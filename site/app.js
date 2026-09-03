const characters = [
  {
    id: "aurora",
    name: "AURORA",
    series: "X-STARS",
    role: "confident, elegant, glamorous",
    image: "../assets/references/x-stars/final-approved/AURORA.png",
    palette: ["#6f45c8", "#3d247d", "#d8d5df", "#c79a3f"],
    summary: "自信、優雅、華麗而親近。以紫色長髮、銀色短外套、羽飾領與金色飾品形成系列標準視覺。",
    note: "X-STARS 系列線重、成熟臉型、角色比例、棚拍光與地面反射的主要風格參照。",
  },
  {
    id: "riva",
    name: "RIVA",
    series: "X-STARS",
    role: "frank, dependable big sister",
    image: "../assets/references/x-stars/final-approved/RIVA.png",
    palette: ["#8e4630", "#d96137", "#f0b7c0", "#4a2b24"],
    summary: "直率、可靠、有保護感的大姊。溫暖 auburn 高馬尾、紅橙裙裝與深棕靴構成她的穩定氣場。",
    note: "表情與姿態應保持放鬆、直接、可靠，不走冷淡或過度誘惑方向。",
  },
  {
    id: "sandra",
    name: "SANDRA",
    series: "X-STARS",
    role: "natural, cheerful, absent-minded big sister",
    image: "../assets/references/x-stars/final-approved/SANDRA.png",
    palette: ["#177dcb", "#2bd4e8", "#6547bc", "#d9dde8"],
    summary: "自然、開朗、真誠，帶一點慢半拍的可愛感。藍色髮型、透明太陽眼鏡與寬鬆外套是核心辨識。",
    note: "應呈現明亮、真誠、略帶驚喜的神情，避免空洞、幼態或刻意裝傻。",
  },
  {
    id: "sara",
    name: "SARA",
    series: "X-STARS",
    role: "bold, cool, decisive",
    image: "../assets/references/x-stars/final-approved/SARA.png",
    palette: ["#e28a23", "#d7a13d", "#6f5634", "#dcdce3"],
    summary: "大膽、冷靜、果斷，不輕易退讓。金橘長髮、結構感胸衣、長褲與開放站姿是角色核心。",
    note: "態度是自我決定與挑戰感，不應變成憤怒、反派或過度男性化。",
  },
  {
    id: "tara",
    name: "TARA",
    series: "X-STARS",
    role: "gentle, empathetic peacemaker",
    image: "../assets/references/x-stars/final-approved/TARA.png",
    palette: ["#ca5b8d", "#8f285d", "#f0b4c5", "#6b2540"],
    summary: "溫柔、共感、擅長協調，帶安定而不脆弱的氣質。粉紅至洋紅高馬尾與軍帽是主要識別。",
    note: "姿態應柔和但有自信，避免膽怯、悲傷、焦慮或曖昧誘惑。",
  },
];

const cards = [
  {
    id: "xstars-aurora-001",
    title: "AURORA",
    series: "X-STARS",
    type: "Character",
    rarity: "SSR",
    characterId: "aurora",
    status: "placeholder",
    image: "",
    tags: ["X-STARS", "紫", "風格基準", "待補卡面"],
    rulesText: "待補正式卡牌能力。",
    worldNote: "X-STARS final-approved 角色。此卡先以角色立繪作為替代素材。",
    missing: ["正式卡面", "費用", "規則文字", "收錄商品"],
  },
  {
    id: "xstars-riva-001",
    title: "RIVA",
    series: "X-STARS",
    type: "Character",
    rarity: "SR",
    characterId: "riva",
    status: "placeholder",
    image: "",
    tags: ["X-STARS", "紅橙", "可靠", "待補卡面"],
    rulesText: "待補正式卡牌能力。",
    worldNote: "X-STARS final-approved 角色。此卡先以角色立繪作為替代素材。",
    missing: ["正式卡面", "費用", "規則文字", "收錄商品"],
  },
  {
    id: "xstars-sandra-001",
    title: "SANDRA",
    series: "X-STARS",
    type: "Character",
    rarity: "SR",
    characterId: "sandra",
    status: "placeholder",
    image: "",
    tags: ["X-STARS", "藍", "開朗", "待補卡面"],
    rulesText: "待補正式卡牌能力。",
    worldNote: "X-STARS final-approved 角色。此卡先以角色立繪作為替代素材。",
    missing: ["正式卡面", "費用", "規則文字", "收錄商品"],
  },
  {
    id: "xstars-sara-001",
    title: "SARA",
    series: "X-STARS",
    type: "Character",
    rarity: "SR",
    characterId: "sara",
    status: "placeholder",
    image: "",
    tags: ["X-STARS", "金橘", "果斷", "待補卡面"],
    rulesText: "待補正式卡牌能力。",
    worldNote: "X-STARS final-approved 角色。此卡先以角色立繪作為替代素材。",
    missing: ["正式卡面", "費用", "規則文字", "收錄商品"],
  },
  {
    id: "xstars-tara-001",
    title: "TARA",
    series: "X-STARS",
    type: "Character",
    rarity: "SR",
    characterId: "tara",
    status: "placeholder",
    image: "",
    tags: ["X-STARS", "粉紅", "協調", "待補卡面"],
    rulesText: "待補正式卡牌能力。",
    worldNote: "X-STARS final-approved 角色。此卡先以角色立繪作為替代素材。",
    missing: ["正式卡面", "費用", "規則文字", "收錄商品"],
  },
];

const worldEntries = [
  {
    title: "X-STARS",
    body: "五位 final-approved 角色構成的角色系列。網站目前以角色身份、個性方向、造型鎖定與未來卡牌資料連結為主。",
  },
  {
    title: "WANIN 世界觀",
    body: "尚未填入正式 canon。之後可在這裡加入 IP 起源、系列關係、陣營、卡牌故事線與產品包裝設定。",
  },
];

const state = {
  search: "",
  series: "全部",
  type: "全部",
  rarity: "全部",
};

const byId = (items) => Object.fromEntries(items.map((item) => [item.id, item]));
const characterMap = byId(characters);

const cardGrid = document.querySelector("#cardGrid");
const characterGrid = document.querySelector("#characterGrid");
const worldList = document.querySelector("#worldList");
const resultCount = document.querySelector("#resultCount");
const searchInput = document.querySelector("#searchInput");
const seriesFilter = document.querySelector("#seriesFilter");
const typeFilter = document.querySelector("#typeFilter");
const rarityFilter = document.querySelector("#rarityFilter");
const clearFilters = document.querySelector("#clearFilters");
const detailDialog = document.querySelector("#detailDialog");
const detailContent = document.querySelector("#detailContent");
const closeDetail = document.querySelector("#closeDetail");

function uniqueOptions(key) {
  return ["全部", ...new Set(cards.map((card) => card[key]).filter(Boolean))];
}

function fillSelect(select, options) {
  select.innerHTML = options.map((option) => `<option value="${option}">${option}</option>`).join("");
}

function cardImage(card) {
  const character = characterMap[card.characterId];
  return card.image || character?.image || "";
}

function renderCardArt(card) {
  const src = cardImage(card);
  if (!src) {
    return `<div class="placeholder-art">CARD ART<br />待補</div>`;
  }
  return `<img src="${src}" alt="${card.title} 替代素材" loading="lazy" />`;
}

function cardMatches(card) {
  const character = characterMap[card.characterId];
  const haystack = [
    card.id,
    card.title,
    card.series,
    card.type,
    card.rarity,
    character?.name,
    character?.summary,
    ...card.tags,
  ]
    .join(" ")
    .toLowerCase();

  return (
    haystack.includes(state.search.toLowerCase()) &&
    (state.series === "全部" || card.series === state.series) &&
    (state.type === "全部" || card.type === state.type) &&
    (state.rarity === "全部" || card.rarity === state.rarity)
  );
}

function renderCards() {
  const filtered = cards.filter(cardMatches);
  resultCount.textContent = `${filtered.length} / ${cards.length} 張卡`;
  cardGrid.innerHTML = filtered
    .map((card) => {
      const character = characterMap[card.characterId];
      return `
        <article class="card-tile">
          <button class="card-button" type="button" data-card-id="${card.id}">
            <div class="card-art">
              ${renderCardArt(card)}
              <span class="status-pill">${card.status === "ready" ? "READY" : "PLACEHOLDER"}</span>
            </div>
            <div class="card-info">
              <h3>${card.title}</h3>
              <div class="meta-row">
                <span class="chip">${card.rarity}</span>
                <span class="chip">${card.type}</span>
                <span class="chip">${card.series}</span>
              </div>
              <p>${character?.summary || card.worldNote}</p>
            </div>
          </button>
        </article>
      `;
    })
    .join("");
}

function renderCharacters() {
  characterGrid.innerHTML = characters
    .map(
      (character) => `
        <article class="character-card">
          <div class="character-portrait">
            <img src="${character.image}" alt="${character.name} final-approved 角色圖" loading="lazy" />
          </div>
          <div class="character-body">
            <h3>${character.name}</h3>
            <div class="meta-row">
              <span class="chip">${character.series}</span>
              <span class="chip">${character.role}</span>
            </div>
            <div class="palette" aria-label="${character.name} 代表色">
              ${character.palette.map((color) => `<span class="swatch" style="background:${color}"></span>`).join("")}
            </div>
            <p>${character.summary}</p>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderWorld() {
  worldList.innerHTML = worldEntries
    .map(
      (entry) => `
        <article class="world-card">
          <h3>${entry.title}</h3>
          <p>${entry.body}</p>
        </article>
      `,
    )
    .join("");
}

function openDetail(cardId) {
  const card = cards.find((item) => item.id === cardId);
  if (!card) return;
  const character = characterMap[card.characterId];
  detailContent.innerHTML = `
    <div class="detail-layout">
      <div class="detail-media">${renderCardArt(card)}</div>
      <div class="detail-copy">
        <p class="section-kicker">${card.id}</p>
        <h2>${card.title}</h2>
        <div class="meta-row">
          <span class="chip">${card.series}</span>
          <span class="chip">${card.type}</span>
          <span class="chip">${card.rarity}</span>
          <span class="chip">${card.status}</span>
        </div>
        <h3>卡牌內容</h3>
        <p>${card.rulesText}</p>
        <h3>世界觀註記</h3>
        <p>${card.worldNote}</p>
        <h3>角色設定</h3>
        <p>${character?.note || "待補角色設定。"}</p>
        <h3>待補欄位</h3>
        <p>${card.missing?.join("、") || "無"}</p>
        <div class="meta-row">${card.tags.map((tag) => `<span class="chip">${tag}</span>`).join("")}</div>
      </div>
    </div>
  `;
  detailDialog.showModal();
}

function bindEvents() {
  searchInput.addEventListener("input", (event) => {
    state.search = event.target.value.trim();
    renderCards();
  });
  seriesFilter.addEventListener("change", (event) => {
    state.series = event.target.value;
    renderCards();
  });
  typeFilter.addEventListener("change", (event) => {
    state.type = event.target.value;
    renderCards();
  });
  rarityFilter.addEventListener("change", (event) => {
    state.rarity = event.target.value;
    renderCards();
  });
  clearFilters.addEventListener("click", () => {
    state.search = "";
    state.series = "全部";
    state.type = "全部";
    state.rarity = "全部";
    searchInput.value = "";
    seriesFilter.value = "全部";
    typeFilter.value = "全部";
    rarityFilter.value = "全部";
    renderCards();
  });
  cardGrid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-card-id]");
    if (button) openDetail(button.dataset.cardId);
  });
  closeDetail.addEventListener("click", () => detailDialog.close());
}

function init() {
  fillSelect(seriesFilter, uniqueOptions("series"));
  fillSelect(typeFilter, uniqueOptions("type"));
  fillSelect(rarityFilter, uniqueOptions("rarity"));
  renderWorld();
  renderCards();
  renderCharacters();
  bindEvents();
}

init();
