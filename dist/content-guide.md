# WANIN Card Archive Content Guide

This file is the handoff checklist for replacing placeholders with production content.

## Current source of truth

- X-STARS identity and art direction: `config/x-stars-character-bible.md`
- General WANIN art notes: `config/art-bible.md`
- Website records: `site/app.js`

## Placeholder cards to complete

| Card ID | Character | Missing fields |
| --- | --- | --- |
| `xstars-aurora-001` | AURORA | final card face, cost, rules text, product/set |
| `xstars-riva-001` | RIVA | final card face, cost, rules text, product/set |
| `xstars-sandra-001` | SANDRA | final card face, cost, rules text, product/set |
| `xstars-sara-001` | SARA | final card face, cost, rules text, product/set |
| `xstars-tara-001` | TARA | final card face, cost, rules text, product/set |

## Recommended card image path

Place production card faces under:

```text
site/assets/cards/<card-id>.png
```

Use the production card ratio:

```text
750 x 1050 px, or any exact 5:7 vertical card face
```

Then update that card in `site/app.js`:

```js
image: "assets/cards/xstars-aurora-001.png",
status: "ready",
rulesText: "正式卡牌能力文字",
```

## Website fields to fill later

- `cost`
- `rulesText`
- `worldNote`
- `set`
- `cardNumber`
- `artist`
- `releaseStatus`
- `image`

## Canon rule

Only add worldbuilding, character identity, card text, or art direction after the user approves it. Do not restore removed deprecated material unless the user explicitly brings it back.
