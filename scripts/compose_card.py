#!/usr/bin/env python3
"""Compose one final card deterministically from a selected illustration and YAML inputs."""

from __future__ import annotations

import argparse
from pathlib import Path
from typing import Any

import yaml
from PIL import Image, ImageDraw, ImageFont, ImageOps


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--manifest", type=Path, required=True)
    parser.add_argument("--template", type=Path, required=True)
    parser.add_argument("--card-id", required=True)
    parser.add_argument("--candidate", type=Path, required=True)
    parser.add_argument("--output", type=Path, required=True)
    return parser.parse_args()


def load_yaml(path: Path) -> dict[str, Any]:
    if not path.is_file():
        raise ValueError(f"Required file does not exist: {path}")
    with path.open("r", encoding="utf-8") as handle:
        value = yaml.safe_load(handle)
    if not isinstance(value, dict):
        raise ValueError(f"Expected a YAML mapping in: {path}")
    return value


def find_card(manifest: dict[str, Any], card_id: str) -> dict[str, Any]:
    cards = manifest.get("cards")
    if not isinstance(cards, list):
        raise ValueError("Manifest must contain a 'cards' list")
    matches = [card for card in cards if isinstance(card, dict) and card.get("id") == card_id]
    if len(matches) != 1:
        raise ValueError(f"Expected exactly one manifest card with id '{card_id}'")
    return matches[0]


def font_for(path_value: str, size: int) -> ImageFont.FreeTypeFont | ImageFont.ImageFont:
    if path_value:
        font_path = Path(path_value)
        if not font_path.is_file():
            raise ValueError(f"Configured font does not exist: {font_path}")
        return ImageFont.truetype(str(font_path), size=size)
    try:
        return ImageFont.truetype("DejaVuSans.ttf", size=size)
    except OSError:
        return ImageFont.load_default(size=size)


def wrap_text(draw: ImageDraw.ImageDraw, text: str, font: ImageFont.ImageFont, width: int) -> str:
    words = str(text).split()
    if not words:
        return ""
    lines: list[str] = []
    current = words[0]
    for word in words[1:]:
        proposed = f"{current} {word}"
        if draw.textbbox((0, 0), proposed, font=font)[2] <= width:
            current = proposed
        else:
            lines.append(current)
            current = word
    lines.append(current)
    return "\n".join(lines)


def draw_text_box(
    draw: ImageDraw.ImageDraw,
    value: str,
    spec: dict[str, Any],
    font_path: str,
    color: str,
) -> None:
    x, y = int(spec["x"]), int(spec["y"])
    width, height = int(spec["width"]), int(spec["height"])
    start_size = int(spec["font_size"])
    min_size = int(spec.get("min_font_size", start_size))
    align = str(spec.get("align", "left"))

    chosen_font: ImageFont.ImageFont | None = None
    chosen_text = ""
    for size in range(start_size, min_size - 1, -1):
        font = font_for(font_path, size)
        wrapped = wrap_text(draw, str(value), font, width)
        bbox = draw.multiline_textbbox((0, 0), wrapped, font=font, spacing=6, align=align)
        if bbox[2] - bbox[0] <= width and bbox[3] - bbox[1] <= height:
            chosen_font = font
            chosen_text = wrapped
            break
    if chosen_font is None:
        raise ValueError(f"Text does not fit configured box: {value!r}")

    bbox = draw.multiline_textbbox((0, 0), chosen_text, font=chosen_font, spacing=6, align=align)
    text_width = bbox[2] - bbox[0]
    text_height = bbox[3] - bbox[1]
    draw_x = x if align == "left" else x + (width - text_width) / 2
    draw_y = y + (height - text_height) / 2 - bbox[1]
    draw.multiline_text((draw_x, draw_y), chosen_text, font=chosen_font, fill=color, spacing=6, align=align)


def compose(card: dict[str, Any], template: dict[str, Any], candidate: Path) -> Image.Image:
    if not candidate.is_file():
        raise ValueError(f"Selected candidate does not exist: {candidate}")

    canvas_spec = template["canvas"]
    art_spec = template["illustration"]
    text_spec = template["text"]
    canvas = Image.new(
        "RGB",
        (int(canvas_spec["width"]), int(canvas_spec["height"])),
        str(canvas_spec["background"]),
    )
    draw = ImageDraw.Draw(canvas)

    border_width = int(canvas_spec["border_width"])
    draw.rectangle(
        (0, 0, canvas.width - 1, canvas.height - 1),
        outline=str(canvas_spec["border_color"]),
        width=border_width,
    )

    art_box = (
        int(art_spec["x"]),
        int(art_spec["y"]),
        int(art_spec["width"]),
        int(art_spec["height"]),
    )
    with Image.open(candidate) as source:
        illustration = ImageOps.fit(
            source.convert("RGB"),
            (art_box[2], art_box[3]),
            method=Image.Resampling.LANCZOS,
            centering=(0.5, 0.5),
        )
    canvas.paste(illustration, (art_box[0], art_box[1]))
    draw.rectangle(
        (
            art_box[0],
            art_box[1],
            art_box[0] + art_box[2] - 1,
            art_box[1] + art_box[3] - 1,
        ),
        outline=str(art_spec["border_color"]),
        width=int(art_spec["border_width"]),
    )

    panel_color = str(text_spec["panel_color"])
    type_box = text_spec["type"]
    rules_box = text_spec["rules_text"]
    draw.rounded_rectangle(
        (
            int(type_box["x"]) - 10,
            int(type_box["y"]) - 8,
            int(type_box["x"]) + int(type_box["width"]) + 10,
            int(rules_box["y"]) + int(rules_box["height"]) + 10,
        ),
        radius=14,
        fill=panel_color,
        outline=str(canvas_spec["border_color"]),
        width=2,
    )

    font_path = str(text_spec.get("font_path", ""))
    color = str(text_spec["color"])
    muted = str(text_spec["muted_color"])
    draw_text_box(draw, str(card["title"]), text_spec["title"], font_path, color)
    draw_text_box(draw, str(card["cost"]), text_spec["cost"], font_path, color)
    draw_text_box(draw, str(card["type"]), type_box, font_path, muted)
    draw_text_box(draw, str(card["rules_text"]), rules_box, font_path, color)
    return canvas


def main() -> None:
    args = parse_args()
    manifest = load_yaml(args.manifest)
    template = load_yaml(args.template)
    card = find_card(manifest, args.card_id)
    result = compose(card, template, args.candidate)
    args.output.parent.mkdir(parents=True, exist_ok=True)
    result.save(args.output)
    print(args.output.resolve())


if __name__ == "__main__":
    main()
