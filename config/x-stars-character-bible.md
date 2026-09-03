# X-STARS Character & Art Bible

Status: `final-approved`

This file is the authoritative identity and series-art input for the five approved X-STARS characters. It does not define story canon beyond the visual traits and personalities explicitly confirmed by the user.

## Approved visual references

- Final AURORA: `assets/references/x-stars/final-approved/AURORA.png`
- Final RIVA: `assets/references/x-stars/final-approved/RIVA.png`
- Final SANDRA: `assets/references/x-stars/final-approved/SANDRA.png`
- Final SARA: `assets/references/x-stars/final-approved/SARA.png`
- Final TARA: `assets/references/x-stars/final-approved/TARA.png`

The five files above are the final approved character images and the highest-authority visual references. Earlier `*-original.png` files remain historical source references and must not override a final-approved image.

## Mandatory generation rules

- Read this file before generating or editing any X-STARS character.
- Use the named character's image under `assets/references/x-stars/final-approved/` as the authoritative identity, costume, anatomy, proportion, and palette reference.
- Use `assets/references/x-stars/final-approved/AURORA.png` as the series rendering-style reference.
- Make every local reference image visible to image generation; a filesystem path in a prompt is not a visual input.
- Confirm the interpretation of a new character with the user before its first generation.
- Treat the character identity as a faithful continuation, not a redesign. Camera, framing, pose, expression, background, and lighting are card-specific creative choices.
- Preserve every identity-critical feature listed for the requested character.
- Never mix hair, face, costume, accessories, or palette between characters.
- A retry creates a new image. Never overwrite an original reference or earlier result.

## Shared series art direction

- Premium Korean game-webtoon character-poster illustration.
- Delicate tapered outlines with consistent fine line-weight hierarchy.
- Mature adult feminine facial construction; luminous layered gradient eyes.
- Smooth controlled gradients with selective painterly transitions.
- Natural, elegant adult anatomy; long-legged but not excessively elongated.
- Refined skin, hair, fabric, leather, iridescent material, and restrained metal highlights.
- Camera angle, shot size, framing, pose, expression, background, lighting, and environmental effects follow the approved card-specific `art_brief`.
- The character bible does not require a particular background hue, value structure, character scale, margin, floor reflection, or grounding treatment.
- No readable text, logo, watermark, UI, card frame, extra character, prop, weapon, wings, animal ears, or unreferenced accessory.
- Avoid heavy black outlines, hard cel-shaded blocks, photorealism, glossy plastic 3D rendering, childlike proportions, exaggerated pin-up anatomy, or malformed hands.

## AURORA

### Identity lock

- Long vivid-purple hair with a broad side fringe, two small side twisted buns, and long flowing ponytail sections.
- Purple almond-shaped eyes; mature soft oval face.
- Purple cropped bustier with fine magenta piping.
- Asymmetric high-waisted purple mini skirt with small gold geometric studs.
- Cropped pearlescent silver jacket with a deep-purple feathered collar and dark sleeve bands.
- Layered gold necklaces, angular star-like gold earrings, geometric gold belt ornament.
- Purple ankle boots.
- Palette: violet, deep purple, pearlescent silver, warm gold.

## RIVA

### Identity lock

- Warm auburn/chestnut hair with caramel highlights; large high voluminous ponytail; long face-framing locks; gold tie near the ponytail end.
- Crimson-red upturned almond eyes; mature soft-heart face.
- Glossy pale-pink cropped jacket with gold piping and a small nonverbal gold shoulder motif.
- Dark-brown cropped bustier; fitted red-orange mini skirt; pink belt.
- Dark-brown fingerless gloves.
- Two dark-brown gold-buckled straps around one upper thigh.
- Tall fitted dark-brown high-heeled boots with subtle red soles.
- Palette: auburn, red-orange, pale pink, dark brown, warm gold.

## SANDRA

### Identity lock

- Saturated cobalt-to-cyan blue hair with a braided crown/updo, short tied back section, and long loose face-framing strands.
- Bright blue eyes.
- Large translucent blue sunglasses resting on top of her head; small gold earring.
- Fitted sleeveless blue-violet cropped athletic top with high collar, gold zipper/trim, and burgundy buckle tabs.
- Oversized silver-white/deep-blue jacket worn loosely off both shoulders; quilted purple interior; dark cuffs.
- Glossy blue-violet high-waisted shorts with gold hardware and purple-burgundy belt structures.
- One leg bare; the other wears a blue-violet thigh-high stocking with a glossy top panel.
- Deep-violet ankle boots.
- Palette: cobalt, cyan, blue-violet, silver-white, burgundy, restrained gold.

## SARA

### Identity lock

- Extremely long straight golden-orange hair reaching near the lower legs; heavy clean blunt fringe; long side locks; one slim front section gathered by a gold cylindrical tie.
- Golden-amber almond eyes; gold starburst earring.
- Olive-brown structured cropped bustier with crossed dark upper-chest straps.
- Cropped silver-white jacket with high popped collar, pink-lilac lining, gold cuffs and shoulder tabs, and tiny turquoise accents.
- High-waisted fitted brown full-length trousers with front X-lacing and multiple muted-rose side straps with gold buckles.
- Wrapped wrists; mauve-brown strappy high-heeled shoes.
- Palette: golden orange, honey gold, amber, olive brown, cocoa, silver-white, muted rose, tiny turquoise accents.

## TARA

### Identity lock

- Rose-pink to deep-magenta hair in a very long, thick, softly waved high ponytail; layered side fringe; curled face-framing tendrils.
- Magenta-violet almond eyes.
- Deep plum-magenta soft military/newsboy cap with structured brim and abstract non-readable gold decoration.
- Dusty-magenta cropped off-shoulder jacket with gold zipper and fine gold trim.
- Deep-raspberry fitted cropped top.
- Pale blush-pink high-waisted fitted full-length trousers with a slim pink belt.
- Dark fingerless gloves; soft mauve wraps around one forearm/wrist.
- Deep-raspberry platform high-heeled pumps.
- Palette: rose pink, blush, raspberry, plum, pearl white, restrained gold, dark glove accents.

## Required prompt footer

Append this instruction to every X-STARS generation or edit prompt:

> The requested character's image under `assets/references/x-stars/final-approved/` is the highest authority for identity, hairstyle, face, anatomy, costume, accessories, proportions, and palette. Preserve all identity-critical traits in `config/x-stars-character-bible.md`; never borrow traits from another X-STARS character. Match `assets/references/x-stars/final-approved/AURORA.png` for line weight, facial maturity, and rendering quality. Camera angle, framing, pose, expression, background, lighting, and environmental effects follow the approved card-specific `art_brief`. No readable text, logo, UI, frame, watermark, extra character, or unreferenced element.
