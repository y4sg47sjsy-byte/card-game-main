# Card Art Pipeline — Codex Rules

This repository is a validated MVP for producing WANIN IP cards from AI-generated illustration candidates.

Codex must preserve these boundaries:

- Keep illustration generation separate from card composition.
- Generate each candidate as an independent image-generation call.
- Never overwrite an original candidate image. A retry creates a new run.
- Skills make creative and workflow decisions. Python scripts perform deterministic image processing only.
- Keep `config/card-manifest.yaml`, `config/art-bible.md`, and `assets/references/` as separate production inputs.
- Production proceeds one explicitly approved card at a time with three candidates. Do not start batch generation unless the user explicitly expands the scope.
- Never invent WANIN canon, character identity, card content, or art direction. Use only user-provided briefs and visible references, then confirm the interpretation before generation.
- `generate-card-art` must stop at `awaiting_review` after creating the contact sheet. It must never create `selection.txt`.
- Create `selection.txt` only after the human explicitly names a candidate.
- Do not add schemas, databases, frameworks, ADRs, automated review, test frameworks, advanced provenance, advanced crop logic, or print color-management infrastructure unless explicitly requested.
- Prefer the smallest working change. Do not broaden the MVP in anticipation of future needs.

## X-STARS character generation

- `config/x-stars-character-bible.md` is the authoritative character and series-art input for AURORA, RIVA, SANDRA, SARA, and TARA.
- Before any X-STARS generation or edit, read that file in full and make every named local visual reference visible to image generation.
- Use the requested character's `assets/references/x-stars/final-approved/<CHARACTER>.png` image as the highest-authority identity reference and `assets/references/x-stars/final-approved/AURORA.png` as the series rendering-style reference. Earlier `*-original.png` files are historical sources only.
- Confirm the interpretation before a character's first generation. Do not invent or mix identity, costume, palette, or accessories.
- Include the bible's Required prompt footer in every X-STARS generation or edit prompt.
- Camera, framing, pose, expression, background, and lighting follow the approved card-specific `art_brief`; the character bible does not constrain them.
- Never overwrite an original reference or an earlier generated result.

Project skills live at `skills/generate-card-art/SKILL.md` and `skills/compose-card/SKILL.md`. Read the matching skill before running either workflow.
