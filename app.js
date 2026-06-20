const MAX_TRIALS = 50;
const DIRECT_IMAGES = [
  { side: "left", name: "pexels-75705723-8569753.jpg", url: "Left/pexels-75705723-8569753.jpg" },
  { side: "left", name: "pexels-andy-urdaneta-294961611-13890757.jpg", url: "Left/pexels-andy-urdaneta-294961611-13890757.jpg" },
  { side: "left", name: "pexels-artem-korsakov-132129914-10890527.jpg", url: "Left/pexels-artem-korsakov-132129914-10890527.jpg" },
  { side: "left", name: "pexels-artempodrez-6800934.jpg", url: "Left/pexels-artempodrez-6800934.jpg" },
  { side: "left", name: "pexels-badun-18782642.jpg", url: "Left/pexels-badun-18782642.jpg" },
  { side: "left", name: "pexels-cottonbro-10140812.jpg", url: "Left/pexels-cottonbro-10140812.jpg" },
  { side: "left", name: "pexels-erick-martinez-velasco-247863608-15103177.jpg", url: "Left/pexels-erick-martinez-velasco-247863608-15103177.jpg" },
  { side: "left", name: "pexels-gezerasph-23910018.jpg", url: "Left/pexels-gezerasph-23910018.jpg" },
  { side: "left", name: "pexels-ishahidsultan-7269373.jpg", url: "Left/pexels-ishahidsultan-7269373.jpg" },
  { side: "left", name: "pexels-james-rea-jr-613791-14374525.jpg", url: "Left/pexels-james-rea-jr-613791-14374525.jpg" },
  { side: "left", name: "pexels-kathrinepnw-12892827.jpg", url: "Left/pexels-kathrinepnw-12892827.jpg" },
  { side: "left", name: "pexels-kelvin-cook-451531947-15589713.jpg", url: "Left/pexels-kelvin-cook-451531947-15589713.jpg" },
  { side: "left", name: "pexels-kevin-malik-9017730.jpg", url: "Left/pexels-kevin-malik-9017730.jpg" },
  { side: "left", name: "pexels-krksull-18574050.jpg", url: "Left/pexels-krksull-18574050.jpg" },
  { side: "left", name: "pexels-lapushkina-15023445.jpg", url: "Left/pexels-lapushkina-15023445.jpg" },
  { side: "left", name: "pexels-leandroverolli-2670016.jpg", url: "Left/pexels-leandroverolli-2670016.jpg" },
  { side: "left", name: "pexels-matreding-4394235.jpg", url: "Left/pexels-matreding-4394235.jpg" },
  { side: "left", name: "pexels-matreding-4394238.jpg", url: "Left/pexels-matreding-4394238.jpg" },
  { side: "left", name: "pexels-meowrian-7891864.jpg", url: "Left/pexels-meowrian-7891864.jpg" },
  { side: "left", name: "pexels-nikitaxnikitin-17500962.jpg", url: "Left/pexels-nikitaxnikitin-17500962.jpg" },
  { side: "left", name: "pexels-roy-photos-30017360.jpg", url: "Left/pexels-roy-photos-30017360.jpg" },
  { side: "left", name: "pexels-sebastiaan9977-1206877.jpg", url: "Left/pexels-sebastiaan9977-1206877.jpg" },
  { side: "left", name: "pexels-shvets-production-6975063.jpg", url: "Left/pexels-shvets-production-6975063.jpg" },
  { side: "left", name: "pexels-sohanikamat-10367000.jpg", url: "Left/pexels-sohanikamat-10367000.jpg" },
  { side: "left", name: "pexels-vakho-dolidze-1392009-32809822.jpg", url: "Left/pexels-vakho-dolidze-1392009-32809822.jpg" },
  { side: "left", name: "pexels-wal_-172619-2156618639-36162880.jpg", url: "Left/pexels-wal_-172619-2156618639-36162880.jpg" },
  { side: "right", name: "pexels-aloevera-20805371.jpg", url: "Right/pexels-aloevera-20805371.jpg" },
  { side: "right", name: "pexels-aloevera-20805379.jpg", url: "Right/pexels-aloevera-20805379.jpg" },
  { side: "right", name: "pexels-anna-nekrashevich-8058965.jpg", url: "Right/pexels-anna-nekrashevich-8058965.jpg" },
  { side: "right", name: "pexels-cottonbro-10204118.jpg", url: "Right/pexels-cottonbro-10204118.jpg" },
  { side: "right", name: "pexels-cottonbro-8860911.jpg", url: "Right/pexels-cottonbro-8860911.jpg" },
  { side: "right", name: "pexels-darina-belonogova-7886394.jpg", url: "Right/pexels-darina-belonogova-7886394.jpg" },
  { side: "right", name: "pexels-jeric-turga-1470183193-28535255.jpg", url: "Right/pexels-jeric-turga-1470183193-28535255.jpg" },
  { side: "right", name: "pexels-juanpphotoandvideo-1257770.jpg", url: "Right/pexels-juanpphotoandvideo-1257770.jpg" },
  { side: "right", name: "pexels-kevin-malik-9017567.jpg", url: "Right/pexels-kevin-malik-9017567.jpg" },
  { side: "right", name: "pexels-kevin-malik-9017728.jpg", url: "Right/pexels-kevin-malik-9017728.jpg" },
  { side: "right", name: "pexels-kindelmedia-7298450.jpg", url: "Right/pexels-kindelmedia-7298450.jpg" },
  { side: "right", name: "pexels-marcos-fernandes-de-matos-57406841-7903769.jpg", url: "Right/pexels-marcos-fernandes-de-matos-57406841-7903769.jpg" },
  { side: "right", name: "pexels-meysamoghimzade-14661280.jpg", url: "Right/pexels-meysamoghimzade-14661280.jpg" },
  { side: "right", name: "pexels-michael-burrows-7125708.jpg", url: "Right/pexels-michael-burrows-7125708.jpg" },
  { side: "right", name: "pexels-miguel-angel-rojas-higuita-2154035255-37118310.jpg", url: "Right/pexels-miguel-angel-rojas-higuita-2154035255-37118310.jpg" },
  { side: "right", name: "pexels-mikhail-nilov-8919144.jpg", url: "Right/pexels-mikhail-nilov-8919144.jpg" },
  { side: "right", name: "pexels-nicola-barts-7926711.jpg", url: "Right/pexels-nicola-barts-7926711.jpg" },
  { side: "right", name: "pexels-picturesbyamusan-8062714.jpg", url: "Right/pexels-picturesbyamusan-8062714.jpg" },
  { side: "right", name: "pexels-ravi-roshan-2875998-21300882.jpg", url: "Right/pexels-ravi-roshan-2875998-21300882.jpg" },
  { side: "right", name: "pexels-ravi-roshan-2875998-7036742.jpg", url: "Right/pexels-ravi-roshan-2875998-7036742.jpg" },
  { side: "right", name: "pexels-ravi-roshan-2875998-7036750.jpg", url: "Right/pexels-ravi-roshan-2875998-7036750.jpg" },
  { side: "right", name: "pexels-ravi-roshan-2875998-7036752.jpg", url: "Right/pexels-ravi-roshan-2875998-7036752.jpg" },
  { side: "right", name: "pexels-rdne-10029366.jpg", url: "Right/pexels-rdne-10029366.jpg" },
  { side: "right", name: "pexels-ruts-vakulenko-968932474-20140706.jpg", url: "Right/pexels-ruts-vakulenko-968932474-20140706.jpg" },
  { side: "right", name: "pexels-samuel-reid-2297447-13733640.jpg", url: "Right/pexels-samuel-reid-2297447-13733640.jpg" },
  { side: "right", name: "pexels-shotbyrain-4061223.jpg", url: "Right/pexels-shotbyrain-4061223.jpg" }
];

const state = {
  images: DIRECT_IMAGES,
  trials: [],
  currentIndex: 0,
  correct: 0,
  answers: [],
  startedAt: 0,
  timerId: null,
  elapsedSeconds: 0,
  demoMode: false
};

const elements = {
  homeLayout: document.querySelector("#homeLayout"),
  setupPanel: document.querySelector("#setupPanel"),
  taskPanel: document.querySelector("#taskPanel"),
  resultsPanel: document.querySelector("#resultsPanel"),
  appTitle: document.querySelector("#appTitle"),
  moduleTag: document.querySelector("#moduleTag"),
  moduleDescription: document.querySelector("#moduleDescription"),
  trialCount: document.querySelector("#trialCount"),
  trialCountValue: document.querySelector("#trialCountValue"),
  startButton: document.querySelector("#startButton"),
  timer: document.querySelector("#timer"),
  progressText: document.querySelector("#progressText"),
  scoreText: document.querySelector("#scoreText"),
  handImage: document.querySelector("#handImage"),
  demoHand: document.querySelector("#demoHand"),
  endButton: document.querySelector("#endButton"),
  scoreMetric: document.querySelector("#scoreMetric"),
  accuracyMetric: document.querySelector("#accuracyMetric"),
  timeMetric: document.querySelector("#timeMetric"),
  rateMetric: document.querySelector("#rateMetric"),
  missedList: document.querySelector("#missedList"),
  restartButton: document.querySelector("#restartButton"),
  newSetupButton: document.querySelector("#newSetupButton")
};

elements.trialCount.addEventListener("input", updateStartState);
elements.startButton.addEventListener("click", startSession);
elements.endButton.addEventListener("click", finishSession);
elements.restartButton.addEventListener("click", startSession);
elements.newSetupButton.addEventListener("click", showSetup);

document.querySelectorAll("[data-answer]").forEach((button) => {
  button.addEventListener("click", () => submitAnswer(button.dataset.answer));
});

initializeImages();

function updateStartState() {
  const requested = getRequestedTrialCount();
  elements.startButton.disabled = state.images.length === 0 || requested < 1;
  elements.trialCountValue.textContent = requested;
}

function startSession() {
  const requested = getRequestedTrialCount();

  if (!state.images.length) return;

  state.demoMode = false;
  state.trials = shuffle(state.images).slice(0, Math.min(requested, state.images.length, MAX_TRIALS));
  state.currentIndex = 0;
  state.correct = 0;
  state.answers = [];
  state.elapsedSeconds = 0;

  elements.setupPanel.classList.add("hidden");
  elements.homeLayout.classList.add("hidden");
  elements.resultsPanel.classList.add("hidden");
  elements.taskPanel.classList.remove("hidden");
  document.body.classList.add("session-active");
  setQuestionHeader();
  elements.timer.textContent = formatTime(0);

  state.startedAt = Date.now();
  clearInterval(state.timerId);
  state.timerId = setInterval(updateTimer, 500);

  showCurrentTrial();
}

function showCurrentTrial() {
  const trial = state.trials[state.currentIndex];
  elements.progressText.textContent = `Picture ${state.currentIndex + 1} of ${state.trials.length}`;
  elements.scoreText.textContent = `Correct: ${state.correct}`;
  elements.demoHand.classList.add("hidden");
  elements.handImage.classList.remove("hidden");
  elements.handImage.src = trial.url;
}

function submitAnswer(answer) {
  const trial = state.trials[state.currentIndex];
  const isCorrect = answer === trial.side;

  if (isCorrect) state.correct += 1;

  state.answers.push({
    image: trial.name,
    correctSide: trial.side,
    answer,
    isCorrect
  });

  state.currentIndex += 1;

  if (state.currentIndex >= state.trials.length) {
    finishSession();
  } else {
    showCurrentTrial();
  }
}

function finishSession() {
  clearInterval(state.timerId);
  updateTimer();

  const total = state.answers.length;
  const accuracy = total ? Math.round((state.correct / total) * 100) : 0;
  const minutes = Math.max(state.elapsedSeconds / 60, 1 / 60);
  const rate = total ? (total / minutes).toFixed(1) : "0.0";

  elements.taskPanel.classList.add("hidden");
  elements.resultsPanel.classList.remove("hidden");
  elements.homeLayout.classList.add("hidden");
  document.body.classList.remove("session-active");
  setQuestionHeader();
  elements.scoreMetric.textContent = `${state.correct} / ${total}`;
  elements.accuracyMetric.textContent = `${accuracy}%`;
  elements.timeMetric.textContent = formatTime(state.elapsedSeconds);
  elements.rateMetric.textContent = `${rate} / min`;
  elements.scoreText.textContent = `Correct: ${state.correct}`;

  renderMissedItems();
}

function renderMissedItems() {
  const missed = state.answers.filter((answer) => !answer.isCorrect);

  if (!missed.length) {
    elements.missedList.innerHTML = "<strong>No missed items.</strong>";
    return;
  }

  const listItems = missed
    .map((item) => `<li>${escapeHtml(item.image)}: answered ${item.answer}, correct was ${item.correctSide}</li>`)
    .join("");

  elements.missedList.innerHTML = `<strong>Missed items</strong><ul>${listItems}</ul>`;
}

function showSetup() {
  clearInterval(state.timerId);
  elements.timer.textContent = "00:00";
  elements.taskPanel.classList.add("hidden");
  elements.resultsPanel.classList.add("hidden");
  elements.homeLayout.classList.remove("hidden");
  elements.setupPanel.classList.remove("hidden");
  document.body.classList.remove("session-active");
  setQuestionHeader();
}

function updateTimer() {
  if (!state.startedAt) return;

  state.elapsedSeconds = Math.floor((Date.now() - state.startedAt) / 1000);
  elements.timer.textContent = formatTime(state.elapsedSeconds);
}

function getRequestedTrialCount() {
  const rawValue = Number.parseInt(elements.trialCount.value, 10);
  const safeValue = Number.isFinite(rawValue) ? rawValue : 1;
  const cappedValue = Math.max(1, Math.min(MAX_TRIALS, safeValue));

  if (String(rawValue) !== elements.trialCount.value && document.activeElement !== elements.trialCount) {
    elements.trialCount.value = cappedValue;
  }

  return cappedValue;
}

function initializeImages() {
  setQuestionHeader();
  updateStartState();
}

function setQuestionHeader() {
  elements.appTitle.innerHTML = `
    <span class="left-word">Left</span>
    <span class="or-word">or</span>
    <span class="right-word">Right</span><span class="question-mark">?</span>
  `;
}

function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function shuffle(items) {
  const copy = [...items];

  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }

  return copy;
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;"
    };

    return entities[character];
  });
}
