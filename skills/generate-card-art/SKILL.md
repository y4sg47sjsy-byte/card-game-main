---
name: generate-card-art
description: Generate independent illustration candidates for one card, log the exact prompts, build a contact sheet, and stop for human review. Use for the illustration-generation stage, not card layout or final composition.
---

# Generate Card Art

Generate exactly three candidates for one requested card during the MVP.

## Inputs

Read:

- `config/card-manifest.yaml`
- `config/art-bible.md`
- `config/card-template.yaml`
- every visual reference listed for the card

Make each reference image visible to image generation. Do not treat a filesystem path as visual input.
Treat `illustration.width / illustration.height` from the template as the final generation aspect-ratio contract. Write every candidate prompt for that final crop, and keep all identity-critical features inside a safe central region.

## Workflow

1. Confirm the requested card exists and all listed reference files exist. Read the template illustration dimensions and calculate the final art-window ratio.
2. Create a unique `runs/<timestamp>-<card-id>/` directory. Never reuse a run or overwrite a candidate.
3. Plan three meaningfully different but Art-Bible-consistent treatments. Keep the card identity and required subject fixed, and compose each treatment specifically for the final art-window ratio.
4. Write the three exact prompts to `prompt.txt`, clearly labeled `candidate-01` through `candidate-03`.
5. Create `run.yaml` with the card ID, creation time, references, candidate filenames, and status `generating`.
6. Call built-in image generation three separate times, once per prompt. Save the untouched results as `candidates/candidate-01.png` through `candidate-03.png`.
7. Run `scripts/make_contact_sheet.py --template config/card-template.yaml` to create `contact-sheet.png`. Its previews must use the same deterministic center crop as card composition.
8. Set the run status to `awaiting_review`, show the contact sheet, and stop.

## Hard boundaries

- Generate illustration only: no card frame, title, rules text, cost, logo, or UI.
- Do not create candidate grids with image generation.
- Do not request an image aspect ratio that conflicts with the template art window.
- Do not leave crown tips, faces, hands, weapons, identity accessories, or other required features outside the final crop-safe region.
- Do not choose a winner.
- Never create `selection.txt`, even if one candidate appears clearly better.
- Do not continue to composition in the same turn unless the human has subsequently made an explicit selection.
- Do not generate more cards or more candidates without an explicit scope change.
