# WANIN Card Archive Content Guide

This file is the handoff checklist for replacing placeholders with production content.

## Current source of truth

- X-STARS identity and art direction: `config/x-stars-character-bible.md`
- General WANIN art notes: `config/art-bible.md`
- Website records: `site/app.js`

## Character card data

`site/app.js` contains the 40 approved proposal records from `卡面資訊.md`: card number,
character, English card title, cost, skill name, rules text, rarity, display series, and
original series key. Production card faces and product inclusion remain pending.

Display series aliases preserve the original series as an internal key:

| Original series | Display name |
| --- | --- |
| 練習生 | 初星未央 |
| 私服 | 閒光拾影 |
| SCHOOL DAY | 青衿時光 |
| 幕後彩排 | 簾後序曲 |
| 夏日泳裝 | 晴海漣光 |
| 春日花海 | 春華綺夢 |
| 經典舞台 | 流光名場 |
| 專屬舞服 | 華裳星裁 |

All 40 website card faces are unmodified 750×1050 copies of the completed card images
from `output/card/`, renamed by card number under `site/assets/cards/`. The source files
remain untouched.

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

- `worldNote`
- `set`
- `cardNumber`
- `artist`
- `releaseStatus`
- `image`

## Canon rule

Only add worldbuilding, character identity, card text, or art direction after the user approves it. Do not restore removed deprecated material unless the user explicitly brings it back.
