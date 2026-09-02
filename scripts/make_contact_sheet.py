#!/usr/bin/env python3
"""Build a deterministic labeled contact sheet from candidate images."""

from __future__ import annotations

import argparse
from pathlib import Path

import yaml
from PIL import Image, ImageDraw, ImageFont, ImageOps


SUPPORTED_EXTENSIONS = {".png", ".jpg", ".jpeg", ".webp"}


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--input-dir", type=Path, required=True)
    parser.add_argument("--output", type=Path, required=True)
    parser.add_argument("--template", type=Path, required=True)
    parser.add_argument("--columns", type=int, default=3)
    parser.add_argument("--thumb-width", type=int, default=420)
    parser.add_argument("--gap", type=int, default=24)
    return parser.parse_args()


def illustration_size(template_path: Path) -> tuple[int, int]:
    if not template_path.is_file():
        raise ValueError(f"Template does not exist: {template_path}")
    with template_path.open("r", encoding="utf-8") as handle:
        template = yaml.safe_load(handle)
    try:
        illustration = template["illustration"]
        width = int(illustration["width"])
        height = int(illustration["height"])
    except (KeyError, TypeError, ValueError) as error:
        raise ValueError("Template must define positive illustration width and height") from error
    if width <= 0 or height <= 0:
        raise ValueError("Template illustration dimensions must be positive")
    return width, height


def candidate_paths(input_dir: Path, output: Path) -> list[Path]:
    if not input_dir.is_dir():
        raise ValueError(f"Candidate directory does not exist: {input_dir}")
    output_resolved = output.resolve()
    paths = [
        path
        for path in input_dir.iterdir()
        if path.is_file()
        and path.suffix.lower() in SUPPORTED_EXTENSIONS
        and path.resolve() != output_resolved
    ]
    paths.sort(key=lambda path: path.name.casefold())
    if not paths:
        raise ValueError(f"No candidate images found in: {input_dir}")
    return paths


def build_sheet(
    paths: list[Path], columns: int, thumb_width: int, art_width: int, art_height: int, gap: int
) -> Image.Image:
    if min(columns, thumb_width, art_width, art_height) <= 0 or gap < 0:
        raise ValueError("Columns and dimensions must be positive; gap cannot be negative")

    thumb_height = max(1, round(thumb_width * art_height / art_width))
    label_height = 48
    rows = (len(paths) + columns - 1) // columns
    width = gap + columns * (thumb_width + gap)
    height = gap + rows * (thumb_height + label_height + gap)
    sheet = Image.new("RGB", (width, height), "#15171c")
    draw = ImageDraw.Draw(sheet)
    font = ImageFont.load_default(size=22)

    for index, path in enumerate(paths):
        row, column = divmod(index, columns)
        x = gap + column * (thumb_width + gap)
        y = gap + row * (thumb_height + label_height + gap)
        with Image.open(path) as source:
            preview = ImageOps.fit(
                source.convert("RGB"),
                (thumb_width, thumb_height),
                method=Image.Resampling.LANCZOS,
                centering=(0.5, 0.5),
            )
        sheet.paste(preview, (x, y))
        draw.rectangle((x, y, x + thumb_width - 1, y + thumb_height - 1), outline="#d18a3a", width=2)
        draw.text(
            (x, y + thumb_height + 10),
            f"{path.name} - FINAL CROP",
            fill="#f3eadb",
            font=font,
        )

    return sheet


def main() -> None:
    args = parse_args()
    paths = candidate_paths(args.input_dir, args.output)
    art_width, art_height = illustration_size(args.template)
    sheet = build_sheet(paths, args.columns, args.thumb_width, art_width, art_height, args.gap)
    args.output.parent.mkdir(parents=True, exist_ok=True)
    sheet.save(args.output)
    print(args.output.resolve())


if __name__ == "__main__":
    main()
