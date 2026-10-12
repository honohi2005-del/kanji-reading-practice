const STORAGE_KEY = "kanji-reading-lab:worksheet-01";

const GROUPS = [
  {
    id: "kurenai",
    title: "紅",
    readings: "ヨウ ／ べに ／ くれない",
    cards: [
      { id: "kurenai-1", word: "紅葉", reading: "こうよう", example: "紅葉を見に行く。", altReading: "もみじ", altLabel: "別の読み" },
      { id: "kurenai-2", word: "紅茶", reading: "こうちゃ", example: "お土産に紅茶を買う。" },
      { id: "kurenai-3", word: "口紅", reading: "くちべに", example: "口紅をつける。" },
      { id: "kurenai-4", word: "紅葉", reading: "もみじ", example: "紅葉を見に行く。", note: "「紅葉」を「もみじ」と読むときの読みです。" }
    ]
  },
  {
    id: "ha",
    title: "葉",
    readings: "ヨウ ／ は",
    cards: [
      { id: "ha-1", word: "紅葉", reading: "こうよう", example: "秋になると、山の紅葉がきれいです。" },
      { id: "ha-2", word: "葉", reading: "は", example: "葉の色が変わってきました。" },
      { id: "ha-3", word: "言葉", reading: "ことば", example: "好きな言葉は何ですか。" }
    ]
  },
  {
    id: "ki",
    title: "黄",
    readings: "オウ ／ き",
    cards: [
      { id: "ki-1", word: "黄色", reading: "きいろ", example: "今年の流行色は黄色だそうです。" },
      { id: "ki-2", word: "卵黄", reading: "らんおう", example: "卵黄と砂糖を混ぜる。" }
    ]
  },
  {
    id: "itadaku",
    title: "頂",
    readings: "チョウ ／ いただく ／ いただき",
    cards: [
      { id: "itadaku-1", word: "頂上", reading: "ちょうじょう", example: "山の頂上でお弁当を食べた。" },
      { id: "itadaku-2", word: "山頂", reading: "さんちょう", example: "山の頂上でお弁当を食べた。" },
      { id: "itadaku-3", word: "頂く", reading: "いただく", example: "結婚のお祝いを頂いた。" }
    ]
  },
  {
    id: "utsukushii",
    title: "美",
    readings: "ビ ／ うつくしい",
    cards: [
      { id: "utsukushii-1", word: "美しい", reading: "うつくしい", example: "山頂から見た景色は美しかった。" },
      { id: "utsukushii-2", word: "美術館", reading: "びじゅつかん", example: "週末に美術館へ絵を見に行きます。" },
      { id: "utsukushii-3", word: "美味しい", reading: "おいしい", example: "この店の料理はとても美味しいです。", note: "画像では「美味しい」が別の読みの例として示されています。" }
    ]
  },
  {
    id: "fune",
    title: "船",
    readings: "セン ／ ふね ／ ふな",
    cards: [
      { id: "fune-1", word: "船", reading: "ふね", example: "大きな船が港に入ってきました。" },
      { id: "fune-2", word: "遊覧船", reading: "ゆうらんせん", example: "遊覧船に乗る。" },
      { id: "fune-3", word: "船便", reading: "ふなびん", example: "船便で荷物を送る。" },
      { id: "fune-4", word: "風船", reading: "ふうせん", example: "風船を膨らませる。" }
    ]
  },
  {
    id: "tobu",
    title: "飛",
    readings: "ヒ ／ とぶ ／ とばす",
    cards: [
      { id: "tobu-1", word: "飛ぶ", reading: "とぶ", example: "飛行機が飛んでいる。" },
      { id: "tobu-2", word: "飛行機", reading: "ひこうき", example: "空に飛行機が見えます。" },
      { id: "tobu-3", word: "飛ばす", reading: "とばす", example: "風が強いので、帽子を飛ばさないようにしてください。" },
      { id: "tobu-4", word: "飛び出す", reading: "とびだす", example: "角から急に子どもが飛び出してきた。" }
    ]
  },
  {
    id: "niru",
    title: "似",
    readings: "にる ／ ジ",
    cards: [
      { id: "niru-1", word: "似る", reading: "にる", example: "私と妹はとてもよく似ている。" },
      { id: "niru-2", word: "似合う", reading: "にあう", example: "彼は帽子がよく似合う。" }
    ]
  },
  {
    id: "yobu",
    title: "呼",
    readings: "よぶ ／ コ",
    cards: [
      { id: "yobu-1", word: "呼ぶ", reading: "よぶ", example: "名前を呼ばれたら、返事をしてください。" },
      { id: "yobu-2", word: "呼びかける", reading: "よびかける", example: "寄付を呼びかける。" },
      { id: "yobu-3", word: "呼吸", reading: "こきゅう", example: "ゆっくり息を吸って、深く呼吸します。" }
    ]
  }
];

const ITEMS = GROUPS.flatMap((group) =>
  group.cards.map((card) => ({ ...card, groupId: group.id, groupTitle: group.title, groupReadings: group.readings }))
);

const defaultState = {
  direction: "wordToReading",
  order: "sequential",
  showExample: true,
  currentId: ITEMS[0].id,
  progress: {}
};

let state = loadState();
let queue = createQueue();
let revealed = false;
let toastTimer;

const elements = {
  saveStatus: document.querySelector("#saveStatus"),
  progressCount: document.querySelector("#progressCount"),
  progressBar: document.querySelector("#progressBar"),
  cardIndex: document.querySelector("#cardIndex"),
  cardGroup: document.querySelector("#cardGroup"),
  promptLabel: document.querySelector("#promptLabel"),
  promptText: document.querySelector("#promptText"),
  promptHint: document.querySelector("#promptHint"),
  answerArea: document.querySelector("#answerArea"),
  answerText: document.querySelector("#answerText"),
  answerAlt: document.querySelector("#answerAlt"),
  exampleText: document.querySelector("#exampleText"),
  revealButton: document.querySelector("#revealButton"),
  selfCheck: document.querySelector("#selfCheck"),
  previousButton: document.querySelector("#previousButton"),
  nextButton: document.querySelector("#nextButton"),
  shuffleButton: document.querySelector("#shuffleButton"),
  positionLabel: document.querySelector("#positionLabel"),
  orderSelect: document.querySelector("#orderSelect"),
  exampleToggle: document.querySelector("#exampleToggle"),
  wordListContent: document.querySelector("#wordListContent"),
  resetButton: document.querySelector("#resetButton"),
  toast: document.querySelector("#toast")
};

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
    if (!saved || typeof saved !== "object") return { ...defaultState, progress: {} };
    const progress = saved.progress && typeof saved.progress === "object" ? saved.progress : {};
    const currentId = ITEMS.some((item) => item.id === saved.currentId) ? saved.currentId : defaultState.currentId;
    return {
      ...defaultState,
      ...saved,
      currentId,
      progress,
      direction: saved.direction === "readingToWord" ? "readingToWord" : "wordToReading",
      order: saved.order === "shuffle" ? "shuffle" : "sequential",
      showExample: saved.showExample !== false
    };
  } catch {
    return { ...defaultState, progress: {} };
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  elements.saveStatus.textContent = "保存しました";
  window.clearTimeout(saveState.statusTimer);
  saveState.statusTimer = window.setTimeout(() => {
    elements.saveStatus.textContent = "この端末に保存";
  }, 1600);
}

function createQueue() {
  const result = [...ITEMS];
  if (state.order === "shuffle") {
    for (let i = result.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
  }
  return result;
}

function currentItem() {
  return queue.find((item) => item.id === state.currentId) || queue[0];
}

function currentIndex() {
  const index = queue.findIndex((item) => item.id === state.currentId);
  return index < 0 ? 0 : index;
}

function getGroup(item) {
  return GROUPS.find((group) => group.id === item.groupId);
}

function learnedCount() {
  return ITEMS.filter((item) => state.progress[item.id]).length;
}

function masteredCount() {
  return ITEMS.filter((item) => state.progress[item.id] === "mastered").length;
}

function render() {
  const item = currentItem();
  const index = currentIndex();
  const group = getGroup(item);
  const isReadingMode = state.direction === "readingToWord";
  const learned = learnedCount();
  const progressPercent = Math.round((learned / ITEMS.length) * 100);

  elements.progressCount.textContent = `${learned} / ${ITEMS.length}`;
  elements.progressBar.style.width = `${progressPercent}%`;
  elements.cardIndex.textContent = `CARD ${String(index + 1).padStart(2, "0")}`;
  elements.cardGroup.textContent = `${group.title} ・ ${group.cards.length}語`;
  elements.promptLabel.textContent = isReadingMode ? "この読みの漢字語彙は？" : "この語彙の読みは？";
  elements.promptText.textContent = isReadingMode ? item.reading : item.word;
  elements.promptText.classList.toggle("is-reading", isReadingMode);
  elements.promptHint.textContent = isReadingMode ? `${group.title}のことば　·　読みを漢字で答える` : `${group.title}のことば　·　${group.readings}`;
  elements.positionLabel.textContent = `${String(index + 1).padStart(2, "0")} / ${ITEMS.length}`;
  elements.previousButton.disabled = index === 0;
  elements.nextButton.disabled = index === queue.length - 1;
  elements.orderSelect.value = state.order;
  elements.exampleToggle.checked = state.showExample;

  document.querySelectorAll("[data-direction]").forEach((button) => {
    const active = button.dataset.direction === state.direction;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  elements.answerText.textContent = isReadingMode ? item.word : item.reading;
  if (isReadingMode && item.altReading) {
    elements.answerAlt.hidden = false;
    elements.answerAlt.textContent = `${item.altLabel || "別の読み"}：${item.altReading}`;
  } else {
    elements.answerAlt.hidden = true;
  }

  const example = item.example || item.note || "この語彙の例文は教材に記載されていません。";
  elements.exampleText.textContent = state.showExample ? example : "";
  elements.exampleText.hidden = !state.showExample;

  elements.answerArea.hidden = !revealed;
  elements.selfCheck.hidden = !revealed;
  elements.revealButton.hidden = revealed;
  renderWordList();
}

function renderWordList() {
  elements.wordListContent.innerHTML = queue.map((item, index) => {
    const status = state.progress[item.id];
    const current = item.id === state.currentId;
    const statusMark = status === "mastered" ? "✓" : status === "review" ? "↻" : "○";
    return `<button class="list-item${current ? " is-current" : ""}${status === "mastered" ? " is-mastered" : ""}" type="button" data-item-id="${item.id}" aria-label="${escapeHtml(item.word)} ${escapeHtml(item.reading)}、カード${index + 1}">
      <span class="list-item-status" aria-hidden="true">${statusMark}</span>
      <span class="list-item-copy"><span class="list-item-word">${escapeHtml(item.word)}</span><span class="list-item-reading">${escapeHtml(item.reading)}　·　${escapeHtml(item.groupTitle)}</span></span>
    </button>`;
  }).join("");
}

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;"
  }[character]));
}

function setCurrent(itemId, shouldSave = true) {
  if (!ITEMS.some((item) => item.id === itemId)) return;
  state.currentId = itemId;
  revealed = false;
  if (shouldSave) saveState();
  render();
}

function moveBy(amount) {
  const index = currentIndex();
  const nextIndex = Math.max(0, Math.min(queue.length - 1, index + amount));
  if (nextIndex === index) return;
  setCurrent(queue[nextIndex].id);
}

function revealAnswer() {
  if (revealed) return;
  revealed = true;
  if (!state.progress[currentItem().id]) {
    state.progress[currentItem().id] = "seen";
    saveState();
  }
  render();
}

function gradeCurrent(grade) {
  const item = currentItem();
  state.progress[item.id] = grade;
  saveState();
  const next = queue[currentIndex() + 1];
  if (next) {
    setCurrent(next.id, false);
  } else {
    revealed = false;
    render();
    showToast(masteredCount() === ITEMS.length ? "すべてのカードを覚えました。おつかれさまです。" : "最後のカードです。復習したい語彙を一覧から選べます。");
  }
}

function changeDirection(direction) {
  if (state.direction === direction) return;
  state.direction = direction;
  revealed = false;
  saveState();
  render();
}

function changeOrder(order) {
  state.order = order === "shuffle" ? "shuffle" : "sequential";
  queue = createQueue();
  if (!queue.some((item) => item.id === state.currentId)) state.currentId = queue[0].id;
  revealed = false;
  saveState();
  render();
  showToast(state.order === "shuffle" ? "出題順をシャッフルしました。" : "教材の順番に戻しました。");
}

function shuffleLesson() {
  state.order = "shuffle";
  queue = createQueue();
  state.currentId = queue[0].id;
  revealed = false;
  saveState();
  render();
  showToast("今日の教材をシャッフルしました。");
}

function resetProgress() {
  if (!window.confirm("学習状況をすべてリセットしますか？")) return;
  state.progress = {};
  state.currentId = ITEMS[0].id;
  queue = createQueue();
  revealed = false;
  saveState();
  render();
  showToast("学習状況をリセットしました。");
}

function showToast(message) {
  window.clearTimeout(toastTimer);
  elements.toast.textContent = message;
  elements.toast.classList.add("is-visible");
  toastTimer = window.setTimeout(() => elements.toast.classList.remove("is-visible"), 2600);
}

document.querySelectorAll("[data-direction]").forEach((button) => {
  button.addEventListener("click", () => changeDirection(button.dataset.direction));
});

elements.orderSelect.addEventListener("change", (event) => changeOrder(event.target.value));
elements.exampleToggle.addEventListener("change", (event) => {
  state.showExample = event.target.checked;
  saveState();
  render();
});
elements.revealButton.addEventListener("click", revealAnswer);
elements.previousButton.addEventListener("click", () => moveBy(-1));
elements.nextButton.addEventListener("click", () => moveBy(1));
elements.shuffleButton.addEventListener("click", shuffleLesson);
elements.resetButton.addEventListener("click", resetProgress);

document.querySelectorAll("[data-grade]").forEach((button) => {
  button.addEventListener("click", () => gradeCurrent(button.dataset.grade));
});

elements.wordListContent.addEventListener("click", (event) => {
  const button = event.target.closest("[data-item-id]");
  if (button) setCurrent(button.dataset.itemId);
});

document.addEventListener("keydown", (event) => {
  const target = event.target;
  if (target instanceof HTMLInputElement || target instanceof HTMLSelectElement || target instanceof HTMLTextAreaElement) return;
  if (event.key === "ArrowLeft") {
    event.preventDefault();
    moveBy(-1);
  } else if (event.key === "ArrowRight") {
    event.preventDefault();
    moveBy(1);
  } else if (event.code === "Space") {
    event.preventDefault();
    if (revealed) moveBy(1);
    else revealAnswer();
  }
});

render();
