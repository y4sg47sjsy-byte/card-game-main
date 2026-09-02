---
name: compose-card
description: Compose a final card deterministically from a human-selected candidate, the card manifest, and the fixed MVP template. Use only after the human explicitly selects a candidate.
---

# Compose Card

Compose one final card from an explicitly approved candidate.

## Selection gate

- Read `selection.txt` from the requested run.
- If it is absent, proceed only when the current human instruction explicitly names a candidate from that run; record that exact filename in `selection.txt`.
- Otherwise stop and request a human selection. Never infer approval from image quality or contact-sheet order.

## Workflow

1. Verify the selected filename resolves inside the run's `candidates/` directory.
2. Read `config/card-manifest.yaml` and `config/card-template.yaml`.
3. Run `scripts/compose_card.py` with the selected image, card ID, and an output name containing both card ID and run ID.
4. Save the final PNG in `output/` and report its path.

## Hard boundaries

- Do not call image generation or alter the selected original.
- Use the fixed center crop and template layout; do not invent focal-point logic.
- Do not rewrite card text or make creative art corrections.
- If composition fails visually, report the problem and return to a new generation run.
