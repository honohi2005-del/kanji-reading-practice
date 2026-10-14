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
      { id: "itadaku-2", word: "山頂", reading: "さんちょう", example: "山頂でお弁当を食べた。" },
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
  },
  {
    id: "ketsu",
    title: "結",
    readings: "ケツ ／ むすぶ",
    cards: [
      { id: "ketsu-1", word: "結果", reading: "けっか", example: "試験の結果が発表された。" },
      { id: "ketsu-2", word: "結ぶ", reading: "むすぶ", example: "靴ひもをしっかり結ぶ。" },
      { id: "ketsu-3", word: "結局", reading: "けっきょく", example: "結局、電車で行くことにした。" }
    ]
  },
  {
    id: "ka",
    title: "果",
    readings: "カ ／ はたす",
    cards: [
      { id: "ka-1", word: "効果", reading: "こうか", example: "この薬にはどんな効果がありますか。" },
      { id: "ka-2", word: "果物", reading: "くだもの", example: "毎朝、果物を食べる。" },
      { id: "ka-3", word: "果実", reading: "かじつ", example: "秋になると果実が赤くなる。" },
      { id: "ka-4", word: "果たす", reading: "はたす", example: "最後まで責任を果たす。" }
    ]
  },
  {
    id: "fuu",
    title: "封",
    readings: "フウ",
    cards: [
      { id: "fuu-1", word: "開封", reading: "かいふう", example: "届いた荷物を開封する。" },
      { id: "fuu-2", word: "同封", reading: "どうふう", example: "申込書に写真を同封する。" },
      { id: "fuu-3", word: "封書", reading: "ふうしょ", example: "友達から封書が届いた。" }
    ]
  },
  {
    id: "hou",
    title: "法",
    readings: "ホウ",
    cards: [
      { id: "hou-1", word: "方法", reading: "ほうほう", example: "新しい勉強方法を試す。" },
      { id: "hou-2", word: "作法", reading: "さほう", example: "茶道の作法を学ぶ。" },
      { id: "hou-3", word: "文法", reading: "ぶんぽう", example: "日本語の文法を復習する。" },
      { id: "hou-4", word: "法人", reading: "ほうじん", example: "この会社は株式会社という法人です。" }
    ]
  },
  {
    id: "kaku",
    title: "各",
    readings: "カク",
    cards: [
      { id: "kaku-1", word: "各〜", reading: "かく〜", example: "各クラスで発表を行う。" },
      { id: "kaku-2", word: "各地", reading: "かくち", example: "日本各地で祭りが開かれる。" },
      { id: "kaku-3", word: "各位", reading: "かくい", example: "関係各位にお知らせします。" },
      { id: "kaku-4", word: "各自", reading: "かくじ", example: "各自で必要なものを用意してください。" }
    ]
  },
  {
    id: "i",
    title: "位",
    readings: "イ ／ くらい",
    cards: [
      { id: "i-1", word: "〜位", reading: "くらい", example: "彼は大会で三位になった。" },
      { id: "i-2", word: "地位", reading: "ちい", example: "彼は会社で重要な地位に就いている。" }
    ]
  },
  {
    id: "i-kotonaru",
    title: "異",
    readings: "イ ／ ことなる",
    cards: [
      { id: "i-kotonaru-1", word: "異常（な）", reading: "いじょう（な）", example: "機械から異常な音がした。" },
      { id: "i-kotonaru-2", word: "異変", reading: "いへん", example: "空の色に異変が起きた。" },
      { id: "i-kotonaru-3", word: "同音異義語", reading: "どうおんいぎご", example: "「橋」と「箸」は同音異義語です。" },
      { id: "i-kotonaru-4", word: "異なる", reading: "ことなる", example: "国によって文化は異なる。" }
    ]
  },
  {
    id: "utsu",
    title: "移",
    readings: "イ ／ うつる ／ うつす",
    cards: [
      { id: "utsu-1", word: "移転", reading: "いてん", example: "来月、会社が駅前に移転する。" },
      { id: "utsu-2", word: "移る", reading: "うつる", example: "来週、新しい家に移る。" },
      { id: "utsu-3", word: "移動", reading: "いどう", example: "次の教室へ移動してください。" },
      { id: "utsu-4", word: "移す", reading: "うつす", example: "荷物を別の部屋へ移す。" }
    ]
  },
  {
    id: "tsutomeru",
    title: "務",
    readings: "ム ／ つとめる",
    cards: [
      { id: "tsutomeru-1", word: "事務", reading: "じむ", example: "午前中は事務の仕事をする。" },
      { id: "tsutomeru-2", word: "任務", reading: "にんむ", example: "与えられた任務を最後まで果たす。" },
      { id: "tsutomeru-3", word: "事務所", reading: "じむしょ", example: "事務所に書類を届ける。" },
      { id: "tsutomeru-4", word: "務める", reading: "つとめる", example: "今年は委員長を務める。" }
    ]
  },
  {
    id: "kou",
    title: "更",
    readings: "コウ",
    cards: [
      { id: "kou-1", word: "変更", reading: "へんこう", example: "予定を変更する。" },
      { id: "kou-2", word: "更衣室", reading: "こういしつ", example: "更衣室で服を着替える。" },
      { id: "kou-3", word: "更新", reading: "こうしん", example: "運転免許を更新する。" }
    ]
  },
  {
    id: "kosu",
    title: "越",
    readings: "こす ／ こえる",
    cards: [
      { id: "kosu-1", word: "引っ越す", reading: "ひっこす", example: "来月、新しい町へ引っ越す。" },
      { id: "kosu-2", word: "お越しの際", reading: "おこしのさい", example: "お越しの際は、受付にお立ち寄りください。" },
      { id: "kosu-3", word: "乗り越す", reading: "のりこす", example: "駅を乗り越してしまった。" }
    ]
  },
  {
    id: "kougai",
    title: "郊",
    readings: "コウ",
    cards: [
      { id: "kougai-1", word: "郊外", reading: "こうがい", example: "週末は郊外へ出かける。" },
      { id: "kougai-2", word: "近郊", reading: "きんこう", example: "東京近郊に住んでいる。" }
    ]
  },
  {
    id: "mawari",
    title: "周",
    readings: "シュウ ／ まわり",
    cards: [
      { id: "mawari-1", word: "円周", reading: "えんしゅう", example: "円周を求める。" },
      { id: "mawari-2", word: "周り", reading: "まわり", example: "机の周りを片づける。" }
    ]
  },
  {
    id: "hatake",
    title: "畑",
    readings: "はたけ",
    cards: [
      { id: "hatake-1", word: "畑", reading: "はたけ", example: "畑で野菜を育てる。" },
      { id: "hatake-2", word: "花畑", reading: "はなばたけ", example: "花畑で写真を撮る。" }
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
  promptText: document.querySelector("#promptText"),
  promptHint: document.querySelector("#promptHint"),
  answerArea: document.querySelector("#answerArea"),
  answerText: document.querySelector("#answerText"),
  answerAlt: document.querySelector("#answerAlt"),
  exampleText: document.querySelector("#exampleText"),
  revealButton: document.querySelector("#revealButton"),
  previousButton: document.querySelector("#previousButton"),
  nextButton: document.querySelector("#nextButton"),
  shuffleButton: document.querySelector("#shuffleButton"),
  positionLabel: document.querySelector("#positionLabel"),
  orderSelect: document.querySelector("#orderSelect"),
  exampleToggle: document.querySelector("#exampleToggle"),
  wordListContent: document.querySelector("#wordListContent"),
  progressResetButton: document.querySelector("#progressResetButton"),
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

function render() {
  const item = currentItem();
  const index = currentIndex();
  const group = getGroup(item);
  const isReadingMode = state.direction === "readingToWord";
  const learned = learnedCount();
  const progressPercent = Math.round((learned / ITEMS.length) * 100);

  elements.progressCount.textContent = `${learned} / ${ITEMS.length}`;
  elements.progressBar.style.width = `${progressPercent}%`;
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
elements.progressResetButton.addEventListener("click", resetProgress);
elements.resetButton.addEventListener("click", resetProgress);

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
