# Codex Card Art Pipeline MVP

A minimal local workflow for generating three independent WANIN IP illustration candidates, pausing for human selection, and composing one final card deterministically.

## MVP boundary

Production runs cover one approved card at a time and produce exactly three independent candidates. No batch generation or automatic art review is part of this version.

Creative decisions belong to the two Codex skills. The Python scripts only make a contact sheet and assemble pixels from approved inputs.

## Requirements

- Python 3.10+
- Pillow
- PyYAML
- Codex with image generation available

Install the two Python packages in your preferred environment:

```powershell
python -m pip install Pillow PyYAML
```

## Production inputs

Before generation:

1. Add the approved card brief to `config/card-manifest.yaml`.
2. Record only confirmed WANIN identity and visual direction in `config/art-bible.md`.
3. Add the supplied IP and visual-direction references under `assets/references/`, then list their paths in the manifest.

Reference files must be shown to image generation as actual visual inputs. A path written into a prompt is not a substitute for loading the image.

For X-STARS character illustration work, `config/x-stars-character-bible.md` defines the final-approved five-character identity locks, personality direction, series rendering rules, hair-matched background rules, and mandatory prompt footer. The final images live under `assets/references/x-stars/final-approved/` and take precedence over historical source references. Read and follow the bible before every X-STARS generation or edit.

## 1. Generate candidates

Ask Codex to read and follow `skills/generate-card-art/SKILL.md` for the approved card ID.

The skill creates a unique run:

```text
runs/<run-id>/
├─ run.yaml
├─ prompt.txt
├─ candidates/
│  ├─ candidate-01.png
│  ├─ candidate-02.png
│  └─ candidate-03.png
└─ contact-sheet.png
```

Each candidate is a separate image-generation call. `prompt.txt` records the exact prompt for each call. Once the contact sheet exists, `run.yaml` is set to `awaiting_review` and generation stops. The generation skill must not create `selection.txt`.

The contact sheet can also be rebuilt deterministically:

```powershell
python scripts/make_contact_sheet.py `
  --input-dir runs/<run-id>/candidates `
  --template config/card-template.yaml `
  --output runs/<run-id>/contact-sheet.png
```

## 2. Human review

Inspect `runs/<run-id>/contact-sheet.png` and explicitly choose one candidate. Codex may record the result only after that explicit instruction.

Manual example:

```powershell
Set-Content -LiteralPath runs/<run-id>/selection.txt -Value 'candidate-02.png'
```

The file must contain exactly one filename from the run's `candidates/` directory.

## 3. Compose the card

After selection, ask Codex to read and follow `skills/compose-card/SKILL.md` for the run. The skill calls:

```powershell
python scripts/compose_card.py `
  --manifest config/card-manifest.yaml `
  --template config/card-template.yaml `
  --card-id <card-id> `
  --candidate runs/<run-id>/candidates/candidate-02.png `
  --output output/<card-id>-<run-id>.png
```

Composition uses a fixed center crop, fixed text boxes, and template colors. It does not regenerate, select, or creatively alter the illustration.

## Run rules

- Never overwrite files in `runs/<run-id>/candidates/`.
- A regeneration attempt creates a new run directory.
- `output/` contains final composed cards only.
- If the chosen illustration cannot survive the fixed center crop, make a new generation run rather than adding automatic crop intelligence.
