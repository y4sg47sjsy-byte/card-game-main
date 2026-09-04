const characters = [
  {
    id: "aurora",
    name: "AURORA",
    series: "X-STARS",
    role: "confident, elegant, glamorous",
    image: "assets/references/x-stars/final-approved/AURORA.png",
    palette: ["#6f45c8", "#3d247d", "#d8d5df", "#c79a3f"],
    summary: "自信、優雅、華麗而親近。以紫色長髮、銀色短外套、羽飾領與金色飾品形成系列標準視覺。",
    note: "X-STARS 系列線重、成熟臉型、角色比例、棚拍光與地面反射的主要風格參照。",
  },
  {
    id: "riva",
    name: "RIVA",
    series: "X-STARS",
    role: "frank, dependable big sister",
    image: "assets/references/x-stars/final-approved/RIVA.png",
    palette: ["#8e4630", "#d96137", "#f0b7c0", "#4a2b24"],
    summary: "直率、可靠、有保護感的大姊。溫暖 auburn 高馬尾、紅橙裙裝與深棕靴構成她的穩定氣場。",
    note: "表情與姿態應保持放鬆、直接、可靠，不走冷淡或過度誘惑方向。",
  },
  {
    id: "sandra",
    name: "SANDRA",
    series: "X-STARS",
    role: "natural, cheerful, absent-minded big sister",
    image: "assets/references/x-stars/final-approved/SANDRA.png",
    palette: ["#177dcb", "#2bd4e8", "#6547bc", "#d9dde8"],
    summary: "自然、開朗、真誠，帶一點慢半拍的可愛感。藍色髮型、透明太陽眼鏡與寬鬆外套是核心辨識。",
    note: "應呈現明亮、真誠、略帶驚喜的神情，避免空洞、幼態或刻意裝傻。",
  },
  {
    id: "sara",
    name: "SARA",
    series: "X-STARS",
    role: "bold, cool, decisive",
    image: "assets/references/x-stars/final-approved/SARA.png",
    palette: ["#e28a23", "#d7a13d", "#6f5634", "#dcdce3"],
    summary: "大膽、冷靜、果斷，不輕易退讓。金橘長髮、結構感胸衣、長褲與開放站姿是角色核心。",
    note: "態度是自我決定與挑戰感，不應變成憤怒、反派或過度男性化。",
  },
  {
    id: "tara",
    name: "TARA",
    series: "X-STARS",
    role: "gentle, empathetic peacemaker",
    image: "assets/references/x-stars/final-approved/TARA.png",
    palette: ["#ca5b8d", "#8f285d", "#f0b4c5", "#6b2540"],
    summary: "溫柔、共感、擅長協調，帶安定而不脆弱的氣質。粉紅至洋紅高馬尾與軍帽是主要識別。",
    note: "姿態應柔和但有自信，避免膽怯、悲傷、焦慮或曖昧誘惑。",
  },
];

const seriesNames = {
  "練習生": "初星未央",
  "私服": "閒光拾影",
  "SCHOOL DAY": "青衿時光",
  "幕後彩排": "簾後序曲",
  "夏日泳裝": "晴海漣光",
  "春日花海": "春華綺夢",
  "經典舞台": "流光名場",
  "專屬舞服": "華裳星裁",
};

// card number, character, English title, cost, skill, rules, rarity, original series
const cardRows = [
  ["XS-R01", "AURORA", "FIRST CUE", 2, "紫影定拍", "登場時，取得 1 個 MIC Symbol。", "R", "練習生"],
  ["XS-R02", "RIVA", "STEP CHANGE", 2, "赤焰踏拍", "每回合 1 次：將你的 1 個 MIC Symbol 轉換為 NOTE Symbol。", "R", "練習生"],
  ["XS-R03", "SANDRA", "COUNT IN", 2, "藍律起式", "登場時，取得 1 個 NOTE Symbol。", "R", "練習生"],
  ["XS-R04", "SARA", "STAR MARK", 2, "金弦定姿", "每回合你首次取得 STAR Symbol 時，獲得 1 STAR POINT。", "R", "練習生"],
  ["XS-R05", "TARA", "LUCKY ENTRY", 2, "緋光隨步", "你完成含 WILD 的 Stage Combo 時，獲得 1 STAR POINT。", "R", "練習生"],
  ["XS-R06", "AURORA", "DAY OFF FOCUS", 2, "午後閱章", "登場時，查看 Symbol 牌庫頂 2 張，取得其中 1 張，其餘置於牌庫底。", "R", "私服"],
  ["XS-R07", "RIVA", "QUICK CHANGE", 2, "晨風疾行", "每回合 1 次：將你的 1 個 NOTE Symbol 轉換為 GEM Symbol。", "R", "私服"],
  ["XS-R08", "SANDRA", "STREET BEAT", 2, "晴日小憩", "你取得 NOTE Symbol 時，可查看 Symbol 牌庫頂 1 張。", "R", "私服"],
  ["XS-R09", "SARA", "SUNNY FIND", 2, "暖陽相伴", "登場時，若你沒有 STAR Symbol，取得 1 個 STAR Symbol。", "R", "私服"],
  ["XS-R10", "TARA", "CASUAL WISH", 2, "花徑漫步", "每回合 1 次：你的 1 個 Symbol 本回合可當作 WILD。", "R", "私服"],
  ["XS-R16", "AURORA", "HALLWAY CUE", 2, "廊間點名", "登場時，宣告 1 種非 WILD Symbol；查看 Symbol 牌庫頂 3 張，可取得其中 1 張該種 Symbol，其餘置於牌庫底。", "R", "SCHOOL DAY"],
  ["XS-R17", "RIVA", "STUDY SHIFT", 2, "課間換題", "每回合 1 次：將你的 1 個 MIC Symbol 轉換為 NOTE Symbol。", "R", "SCHOOL DAY"],
  ["XS-R18", "SANDRA", "AFTER CLASS NOTE", 2, "放學鈴音", "你取得 NOTE Symbol 後，每回合 1 次：查看 Symbol 牌庫頂 2 張，可取得其中 1 張 NOTE Symbol，其餘置於牌庫底。", "R", "SCHOOL DAY"],
  ["XS-R19", "SARA", "LIBRARY STAR", 2, "書頁星標", "每回合你首次取得 STAR Symbol 時，獲得 1 STAR POINT。", "R", "SCHOOL DAY"],
  ["XS-R20", "TARA", "LUCKY HOMEROOM", 2, "校門好運", "每回合 1 次：你完成 Stage Combo 時，可將其中 1 個 Symbol 當作 WILD。", "R", "SCHOOL DAY"],
  ["XS-R11", "AURORA", "CUE CHECK", 3, "耳返點名", "登場時，宣告 1 種 Symbol；查看牌庫頂 3 張，取得其中 1 張該種 Symbol，其餘置於牌庫底。", "SR", "幕後彩排"],
  ["XS-R12", "RIVA", "TEMPO RESET", 3, "鏡前變奏", "每回合 1 次：將你的 1 個 GEM Symbol 轉換為任意非 WILD Symbol。", "SR", "幕後彩排"],
  ["XS-R13", "SANDRA", "SOUND CHECK", 3, "藍調試音", "你取得 NOTE Symbol 後，每回合 1 次：查看牌庫頂 2 張，可取得其中 1 張 NOTE Symbol，其餘置於牌庫底。", "SR", "幕後彩排"],
  ["XS-R14", "SARA", "LIGHT TEST", 3, "追光定妝", "你完成含 STAR 的 Stage Combo 時，獲得 1 STAR POINT。", "SR", "幕後彩排"],
  ["XS-R15", "TARA", "WILD REHEARSAL", 3, "候場幸運符", "登場時，取得 1 個 WILD Symbol；本回合不能再完成 Stage Combo。", "SR", "幕後彩排"],
  ["XS-SR01", "AURORA", "SPLASH TARGET", 3, "潮汐尋珠", "登場時，宣告 1 種非 WILD Symbol；從牌庫頂依序公開，直到公開該種 Symbol。取得該張卡，其餘洗回牌庫。", "R", "夏日泳裝"],
  ["XS-SR02", "RIVA", "TIDAL SWITCH", 3, "浪尖變奏", "每回合 1 次：將你的 1 個 Symbol 轉換為任意非 WILD Symbol。", "R", "夏日泳裝"],
  ["XS-SR03", "SANDRA", "SUMMER RHYTHM", 3, "海風和聲", "你取得 NOTE Symbol 後，每回合 1 次：額外取得牌庫頂 1 張 Symbol。", "R", "夏日泳裝"],
  ["XS-SR04", "SARA", "SUNLIT STAR", 3, "日輪映星", "你取得 STAR Symbol 時，每回合 1 次：額外取得 1 個 STAR Symbol。", "R", "夏日泳裝"],
  ["XS-SR05", "TARA", "POOLSIDE WILD", 3, "浪花許願", "你完成含 WILD 的 Stage Combo 時，額外獲得 1 STAR POINT，並可查看牌庫頂 1 張。", "R", "夏日泳裝"],
  ["XS-SR06", "AURORA", "BLOOMING FOCUS", 3, "薰風擇花", "每回合 1 次：查看牌庫頂 4 張，取得其中 1 張，其餘以任意順序置於牌庫底。", "SR", "春日花海"],
  ["XS-SR07", "RIVA", "PETAL SHIFT", 3, "花瓣染奏", "每回合 1 次：將你的至多 2 個同種 Symbol 轉換為另 1 種相同的非 WILD Symbol。", "SR", "春日花海"],
  ["XS-SR08", "SANDRA", "FLORAL TEMPO", 3, "藍鈴和鳴", "你完成含 NOTE 的 Stage Combo 後，每回合 1 次：額外取得牌庫頂 1 張 Symbol。", "SR", "春日花海"],
  ["XS-SR09", "SARA", "STAR IN BLOOM", 3, "金盞映星", "你完成含 STAR 的 Stage Combo 時，額外獲得 2 STAR POINT。", "SR", "春日花海"],
  ["XS-SR10", "TARA", "LUCK IN BLOOM", 3, "桃霞幸運", "每回合 1 次：你完成 Stage Combo 時，可將其中 1 個 Symbol 當作 WILD。", "SR", "春日花海"],
  ["XS-SSR01", "AURORA", "NEON PULSE", 4, "紫電開唱", "登場時，取得 1 個 MIC Symbol，再查看牌庫頂 3 張，可取得其中 1 張 MIC Symbol，其餘置於牌庫底。", "SSR", "經典舞台"],
  ["XS-SSR02", "RIVA", "PRISM SWITCH", 4, "赤焰轉調", "每回合 1 次：將你的 1 個 NOTE Symbol 轉換為 GEM Symbol；若因此完成 Stage Combo，獲得 1 STAR POINT。", "SSR", "經典舞台"],
  ["XS-SSR03", "SANDRA", "CRYSTAL RHYTHM", 4, "藍晶和聲", "登場時，取得 1 個 NOTE Symbol。你完成含 NOTE 的 Stage Combo 後，額外取得牌庫頂 1 張 Symbol。", "SSR", "經典舞台"],
  ["XS-SSR04", "SARA", "STARLIGHT ECHO", 4, "金曜回聲", "你取得 STAR Symbol 時，每回合 1 次：額外取得 1 個 STAR Symbol，並獲得 1 STAR POINT。", "SSR", "經典舞台"],
  ["XS-SSR05", "TARA", "COSMIC ENCORE", 4, "星穹安可", "你完成含 WILD 的 Stage Combo 時，額外獲得 2 STAR POINT。每回合最多觸發 1 次。", "SSR", "經典舞台"],
  ["XS-SSR06", "AURORA", "PERFECT SIGNAL", 5, "紫晶定標", "登場時，宣告 1 種非 WILD Symbol；從 Symbol 牌庫搜尋 1 張該種 Symbol，展示後取得，然後洗牌。", "SSR", "專屬舞服"],
  ["XS-SSR07", "RIVA", "SIGNATURE SHIFT", 5, "晶紗變奏", "每回合 1 次：將你的至多 2 個 Symbol 各自轉換為任意非 WILD Symbol。", "SSR", "專屬舞服"],
  ["XS-SSR08", "SANDRA", "PERFECT TEMPO", 5, "藍鑽連拍", "你取得 NOTE Symbol 後，每回合 1 次：額外取得牌庫頂 2 張 Symbol，然後將手上 1 張 Symbol 置於牌庫底。", "SSR", "專屬舞服"],
  ["XS-SSR09", "SARA", "CROWNED STAR", 5, "星冠綻芒", "你完成含 STAR 的 Stage Combo 時，額外獲得 2 STAR POINT；若該 Combo 含 2 個以上 STAR，改為 3 STAR POINT。", "SSR", "專屬舞服"],
  ["XS-SSR10", "TARA", "FORTUNE FINALE", 5, "星羅終曲", "每回合 1 次：你完成 Stage Combo 時，可將其中至多 2 個 Symbol 當作 WILD；若如此做，額外獲得 2 STAR POINT。", "SSR", "專屬舞服"],
];

const cardImages = Object.fromEntries(
  cardRows.map(([cardNumber]) => [cardNumber, `assets/cards/${cardNumber.toLowerCase()}.png`]),
);

const cards = cardRows.map(([cardNumber, character, title, cost, skillName, rulesText, rarity, originalSeries]) => ({
  id: cardNumber.toLowerCase(),
  cardNumber,
  title,
  cost,
  skillName,
  rulesText,
  rarity,
  originalSeries,
  series: seriesNames[originalSeries],
  type: "Character",
  characterId: character.toLowerCase(),
  status: "ready",
  image: cardImages[cardNumber],
  arMarker: `WANIN-${cardNumber}`,
  arAsset: "spotlight-profile",
  tags: ["X-STARS", character, seriesNames[originalSeries], originalSeries, skillName],
  worldNote: `${seriesNames[originalSeries]}（原系列：${originalSeries}）角色卡。卡牌資料與正式卡面均已同步。`,
  missing: ["收錄商品"],
}));

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
const arCamera = document.querySelector("#arCamera");
const arFallback = document.querySelector("#arFallback");
const arOverlay = document.querySelector("#arOverlay");
const arCardSelect = document.querySelector("#arCardSelect");
const arStatus = document.querySelector("#arStatus");
const startAr = document.querySelector("#startAr");
const simulateScan = document.querySelector("#simulateScan");
const stopAr = document.querySelector("#stopAr");

let arStream = null;

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
  return `<img src="${src}" alt="${card.title} 完整卡面" loading="lazy" />`;
}

function cardMatches(card) {
  const character = characterMap[card.characterId];
  const haystack = [
    card.id,
    card.title,
    card.series,
    card.type,
    card.rarity,
    card.cardNumber,
    card.skillName,
    card.rulesText,
    card.originalSeries,
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
            </div>
            <div class="card-info">
              <h3>${card.title}</h3>
              <p class="card-number">${card.cardNumber} · ${character?.name || "X-STARS"}</p>
              <div class="meta-row">
                <span class="chip">${card.rarity}</span>
                <span class="chip">費用 ${card.cost}</span>
                <span class="chip">${card.series}</span>
              </div>
              <p><strong>${card.skillName}</strong>｜${card.rulesText}</p>
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

function fillArCardSelect() {
  arCardSelect.innerHTML = cards
    .map((card) => `<option value="${card.id}">${card.title} / ${card.rarity}</option>`)
    .join("");
}

function selectedArCard() {
  return cards.find((card) => card.id === arCardSelect.value) || cards[0];
}

function setArStatus(message) {
  arStatus.textContent = message;
}

function clearArOverlay() {
  arOverlay.innerHTML = "";
  arOverlay.classList.remove("is-visible");
}

function renderArOverlay(card, mode = "camera") {
  const character = characterMap[card.characterId];
  const palette = character?.palette || ["#b998ff", "#ff8fbd", "#65d4eb"];
  arOverlay.innerHTML = `
    <div class="ar-card-hud" style="--hud-a:${palette[0]}; --hud-b:${palette[1]}; --hud-c:${palette[2]};">
      <div class="hud-art">
        <img src="${character?.image || cardImage(card)}" alt="${card.title} AR 角色覆蓋圖" />
      </div>
      <div class="hud-copy">
        <p class="section-kicker">${mode === "preview" ? "Preview Lock" : "Marker Lock"}</p>
        <h3>${card.title}</h3>
        <div class="meta-row">
          <span class="chip">${card.rarity}</span>
          <span class="chip">${card.series}</span>
          <span class="chip">${card.arMarker}</span>
        </div>
        <p>${character?.summary || card.worldNote}</p>
      </div>
    </div>
  `;
  arOverlay.classList.add("is-visible");
  setArStatus(`${card.title} 已建立 AR 覆蓋層：${card.arMarker}`);
}

async function startCamera() {
  if (!navigator.mediaDevices?.getUserMedia) {
    renderArOverlay(selectedArCard(), "preview");
    setArStatus("此瀏覽器不支援相機 API，已切換為 AR 預覽模式。");
    return;
  }

  try {
    arStream = await navigator.mediaDevices.getUserMedia({
      video: {
        facingMode: { ideal: "environment" },
        width: { ideal: 1280 },
        height: { ideal: 720 },
      },
      audio: false,
    });
    arCamera.srcObject = arStream;
    await arCamera.play();
    arFallback.hidden = true;
    setArStatus("相機已啟動：把實體卡牌放進框線內，或按模擬辨識檢查覆蓋層。");
  } catch (error) {
    renderArOverlay(selectedArCard(), "preview");
    setArStatus(`相機未啟動，已使用預覽模式：${error.message}`);
  }
}

function stopCamera() {
  arStream?.getTracks().forEach((track) => track.stop());
  arStream = null;
  arCamera.pause();
  arCamera.srcObject = null;
  arFallback.hidden = false;
  clearArOverlay();
  setArStatus("AR 已停止。");
}

function openDetail(cardId) {
  const card = cards.find((item) => item.id === cardId);
  if (!card) return;
  const character = characterMap[card.characterId];
  detailContent.innerHTML = `
    <div class="detail-layout">
      <div class="detail-media">${renderCardArt(card)}</div>
      <div class="detail-copy">
        <p class="section-kicker">${card.cardNumber} · ${character?.name || "X-STARS"}</p>
        <h2>${card.title}</h2>
        <div class="meta-row">
          <span class="chip">${card.series}</span>
          <span class="chip">${card.type}</span>
          <span class="chip">${card.rarity}</span>
          <span class="chip">費用 ${card.cost}</span>
        </div>
        <p class="series-alias">原系列：${card.originalSeries}</p>
        <h3>卡牌內容</h3>
        <p><strong>${card.skillName}</strong></p>
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
  renderCards();
  bindEvents();
}

init();
