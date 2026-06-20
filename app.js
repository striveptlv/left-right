const MAX_TRIALS = 50;
const SPEED_NORM_MIN_SECONDS = 1.5;
const SPEED_NORM_MAX_SECONDS = 2.5;
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
  imagesPerSet: 10,
  setCount: 1,
  striveAiEnabled: true,
  startedAt: 0,
  timerId: null,
  elapsedSeconds: 0,
  demoMode: false
};

const elements = {
  homeLayout: document.querySelector("#homeLayout"),
  navAction: document.querySelector("#navAction"),
  setupPanel: document.querySelector("#setupPanel"),
  taskPanel: document.querySelector("#taskPanel"),
  resultsPanel: document.querySelector("#resultsPanel"),
  appTitle: document.querySelector("#appTitle"),
  moduleTag: document.querySelector("#moduleTag"),
  moduleDescription: document.querySelector("#moduleDescription"),
  trialCount: document.querySelector("#trialCount"),
  trialCountValue: document.querySelector("#trialCountValue"),
  setCount: document.querySelector("#setCount"),
  striveAiToggle: document.querySelector("#striveAiToggle"),
  startButton: document.querySelector("#startButton"),
  timer: document.querySelector("#timer"),
  progressText: document.querySelector("#progressText"),
  scoreText: document.querySelector("#scoreText"),
  handImage: document.querySelector("#handImage"),
  demoHand: document.querySelector("#demoHand"),
  scoreMetric: document.querySelector("#scoreMetric"),
  accuracyMetric: document.querySelector("#accuracyMetric"),
  timeMetric: document.querySelector("#timeMetric"),
  rateMetric: document.querySelector("#rateMetric"),
  missedList: document.querySelector("#missedList"),
  soapPanel: document.querySelector("#soapPanel"),
  soapList: document.querySelector("#soapList"),
  restartButton: document.querySelector("#restartButton"),
  newSetupButton: document.querySelector("#newSetupButton")
};

elements.trialCount.addEventListener("input", updateStartState);
elements.setCount.addEventListener("change", updateStartState);
elements.striveAiToggle.addEventListener("change", updateStartState);
elements.startButton.addEventListener("click", startSession);
elements.restartButton.addEventListener("click", startSession);
elements.newSetupButton.addEventListener("click", showSetup);
elements.navAction.addEventListener("click", (event) => {
  if (!document.body.classList.contains("session-active")) return;

  event.preventDefault();
  finishSession();
});

document.querySelectorAll("[data-answer]").forEach((button) => {
  button.addEventListener("click", () => submitAnswer(button.dataset.answer));
});

initializeImages();

function updateStartState() {
  state.imagesPerSet = getRequestedTrialCount();
  state.setCount = getRequestedSetCount();
  state.striveAiEnabled = elements.striveAiToggle.checked;
  elements.startButton.disabled = state.images.length === 0 || state.imagesPerSet < 1 || state.setCount < 1;
  elements.trialCountValue.textContent = state.imagesPerSet;
}

function startSession() {
  updateStartState();

  if (!state.images.length) return;

  state.demoMode = false;
  state.trials = buildSessionTrials(state.imagesPerSet, state.setCount);
  state.currentIndex = 0;
  state.correct = 0;
  state.answers = [];
  state.elapsedSeconds = 0;

  elements.setupPanel.classList.add("hidden");
  elements.homeLayout.classList.add("hidden");
  elements.resultsPanel.classList.add("hidden");
  elements.soapPanel.classList.add("hidden");
  elements.taskPanel.classList.remove("hidden");
  document.body.classList.add("session-active");
  setNavAction("session");
  setQuestionHeader();
  elements.timer.textContent = formatTime(0);

  state.startedAt = Date.now();
  clearInterval(state.timerId);
  state.timerId = setInterval(updateTimer, 500);

  showCurrentTrial();
}

function showCurrentTrial() {
  const trial = state.trials[state.currentIndex];
  elements.progressText.textContent = `Set ${trial.setNumber} of ${state.setCount} | Picture ${trial.itemNumber} of ${state.imagesPerSet}`;
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
    url: trial.url,
    setNumber: trial.setNumber,
    itemNumber: trial.itemNumber,
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
  setNavAction("contact");
  setQuestionHeader();
  elements.scoreMetric.textContent = `${state.correct} / ${total}`;
  elements.accuracyMetric.textContent = `${accuracy}%`;
  elements.timeMetric.textContent = formatTime(state.elapsedSeconds);
  elements.rateMetric.textContent = `${rate} / min`;
  elements.scoreText.textContent = `Correct: ${state.correct}`;

  renderMissedItems();
  renderSoapNotes({
    total,
    accuracy,
    rate,
    missedCount: total - state.correct,
    plannedTotal: state.trials.length
  });
}

function renderMissedItems() {
  const missed = state.answers.filter((answer) => !answer.isCorrect);

  if (!missed.length) {
    elements.missedList.innerHTML = '<div class="missed-empty">No missed items.</div>';
    return;
  }

  const photoItems = missed
    .map((item) => `
      <figure class="missed-photo">
        <img src="${escapeHtml(item.url)}" alt="Missed hand item from set ${item.setNumber}, picture ${item.itemNumber}" loading="lazy" />
        <figcaption>Set ${item.setNumber} · Picture ${item.itemNumber}</figcaption>
      </figure>
    `)
    .join("");

  elements.missedList.innerHTML = `
    <details class="missed-details">
      <summary>
        <span>Missed items</span>
        <strong>${missed.length} ${missed.length === 1 ? "photo" : "photos"}</strong>
      </summary>
      <div class="missed-photo-grid">${photoItems}</div>
    </details>
  `;
}

function showSetup() {
  clearInterval(state.timerId);
  elements.timer.textContent = "00:00";
  elements.taskPanel.classList.add("hidden");
  elements.resultsPanel.classList.add("hidden");
  elements.soapPanel.classList.add("hidden");
  elements.homeLayout.classList.remove("hidden");
  elements.setupPanel.classList.remove("hidden");
  document.body.classList.remove("session-active");
  setNavAction("contact");
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

function getRequestedSetCount() {
  const rawValue = Number.parseInt(elements.setCount.value, 10);
  const safeValue = Number.isFinite(rawValue) ? rawValue : 1;
  return Math.max(1, Math.min(5, safeValue));
}

function buildSessionTrials(imagesPerSet, setCount) {
  const cappedImagesPerSet = Math.min(imagesPerSet, state.images.length, MAX_TRIALS);
  const trials = [];

  for (let setIndex = 0; setIndex < setCount; setIndex += 1) {
    const setImages = shuffle(state.images).slice(0, cappedImagesPerSet);
    setImages.forEach((image, itemIndex) => {
      trials.push({
        ...image,
        setNumber: setIndex + 1,
        itemNumber: itemIndex + 1
      });
    });
  }

  return trials;
}

function initializeImages() {
  setNavAction("contact");
  setQuestionHeader();
  updateStartState();
}

function setNavAction(mode) {
  if (mode === "session") {
    elements.navAction.textContent = "End Session";
    elements.navAction.href = "#end-session";
    elements.navAction.setAttribute("aria-label", "End current session");
    return;
  }

  elements.navAction.textContent = "Contact";
  elements.navAction.href = "https://www.striveptlv.com/independence/contact.html";
  elements.navAction.setAttribute("aria-label", "Contact STRIVE Independence");
}

function setQuestionHeader() {
  elements.appTitle.innerHTML = `
    <span class="left-word">Left</span>
    <span class="or-word">or</span>
    <span class="right-word">Right</span><span class="question-mark">?</span>
  `;
}

function renderSoapNotes(summary) {
  elements.soapList.innerHTML = "";

  if (!state.striveAiEnabled) {
    elements.soapPanel.classList.add("hidden");
    return;
  }

  const note = generateSoapNote(summary);
  const option = document.createElement("article");
  option.className = "soap-option";

  const paragraph = document.createElement("p");
  paragraph.textContent = note;

  const copyButton = document.createElement("button");
  copyButton.className = "copy-soap-button";
  copyButton.type = "button";
  copyButton.textContent = "Copy SOAP note";
  copyButton.addEventListener("click", () => copySoapNote(note, copyButton));

  option.append(paragraph, copyButton);
  elements.soapList.append(option);

  elements.soapPanel.classList.remove("hidden");
}

function generateSoapNote({ total, accuracy, rate, missedCount, plannedTotal }) {
  const setPhrase = `${state.setCount} ${state.setCount === 1 ? "set" : "sets"} of ${state.imagesPerSet} images`;
  const participationPhrase = total >= plannedTotal ? `completed ${setPhrase}` : `attempted ${total} of ${plannedTotal} planned images across ${setPhrase}`;
  const scorePhrase = `${state.correct}/${total} correct (${accuracy}% accuracy)`;
  const timePhrase = `${formatTime(state.elapsedSeconds)} with a response rate of ${rate} images/min`;
  const errorPhrase = missedCount === 0 ? "no left/right discrimination errors" : `${missedCount} left/right discrimination ${missedCount === 1 ? "error" : "errors"}`;
  const speedPhrase = getSpeedInterpretation(total, missedCount);
  const trendPhrase = getSetTrendInterpretation();
  const performancePhrase = trendPhrase ? `${speedPhrase} ${trendPhrase}` : speedPhrase;
  const noteOptions = [
    `Patient participated in STRIVE Independence left-right discrimination activity and was instructed to identify whether each image showed a left or right hand. Patient ${participationPhrase}, scoring ${scorePhrase} in ${timePhrase}, with ${errorPhrase}. ${performancePhrase} Performance indicates current visual laterality discrimination accuracy and processing speed during a timed recognition task. Continue left-right discrimination training with graded image volume and monitor accuracy, response speed, and consistency across sets.`,
    `Patient engaged in a timed hand laterality task targeting left/right discrimination. Patient ${participationPhrase} and identified ${scorePhrase}; total task time was ${timePhrase}, with ${errorPhrase}. ${performancePhrase} Patient demonstrated measurable performance in visual discrimination, attention, and rapid motor response selection. Continue practice using STRIVE Independence tasks and adjust set/image count based on accuracy and fatigue.`,
    `Patient completed left-right hand identification practice to support body schema, laterality, and visual perceptual skills. Patient ${participationPhrase}, achieved ${scorePhrase} in ${timePhrase}, and session included ${errorPhrase}. ${performancePhrase} Results suggest functional level of accuracy and speed for left/right discrimination under timed conditions. Progress or maintain task demands by modifying sets, image count, and pacing during future sessions.`,
    `Patient worked on a structured left-right discrimination activity using randomized hand images. Patient ${participationPhrase}, with ${scorePhrase}, task time/rate of ${timePhrase}, and ${errorPhrase}. ${performancePhrase} Results give a practical snapshot of laterality recognition, attention to visual details, and response efficiency. Continue practice with repeated trials and compare performance across sessions to guide grading.`,
    `Patient was presented with randomized hand images and asked to select left or right for each stimulus. Patient ${participationPhrase}; score was ${scorePhrase}, time/rate was ${timePhrase}, and errors totaled ${missedCount}. ${performancePhrase} Patient demonstrated current capacity for timed left-right visual discrimination with documented accuracy and speed. Continue left-right discrimination practice and increase or decrease set volume according to performance and clinical tolerance.`,
    `Patient engaged in left-right discrimination task as part of STRIVE Independence visual perceptual training. Patient ${participationPhrase}, correctly identifying ${scorePhrase} with total time/rate of ${timePhrase} and ${errorPhrase}. ${performancePhrase} Performance reflects visual scanning, laterality judgment, sustained attention, and decision speed during a structured task. Continue task-based training and use accuracy/time data to support ongoing documentation and progression.`,
    `Patient practiced identifying left versus right hand images in a timed therapeutic activity. Patient ${participationPhrase} and scored ${scorePhrase}; completion time was ${timePhrase}, with ${errorPhrase}. ${performancePhrase} Patient showed quantifiable left-right discrimination performance with objective measures for accuracy and efficiency. Continue STRIVE Independence laterality training, repeat comparable sets, and track changes in score, time, and error pattern over time.`
  ];

  return noteOptions[Math.floor(Math.random() * noteOptions.length)];
}

function getSpeedInterpretation(total, missedCount) {
  if (!total) {
    return `Speed comparison was not calculated because no responses were recorded; average reference speed is ${SPEED_NORM_MIN_SECONDS}-${SPEED_NORM_MAX_SECONDS} seconds per hand/foot image.`;
  }

  const secondsPerImage = state.elapsedSeconds / total;
  const roundedSeconds = secondsPerImage.toFixed(1);
  const accuracyRatio = total ? state.correct / total : 0;
  const recognitionWasGood = accuracyRatio > 0.7;
  const normPhrase = `average reference speed is ${SPEED_NORM_MIN_SECONDS}-${SPEED_NORM_MAX_SECONDS} seconds per hand/foot image`;

  if (secondsPerImage < SPEED_NORM_MIN_SECONDS) {
    const accuracyContext = missedCount > 0
      ? "with errors present, which may suggest the patient rushed the activity and prioritized speed over accuracy"
      : "while maintaining accurate recognition during this trial";
    return `Average speed was ${roundedSeconds} seconds per image, faster than average (${normPhrase}); ${accuracyContext}.`;
  }

  if (secondsPerImage > SPEED_NORM_MAX_SECONDS) {
    const accuracyContext = recognitionWasGood
      ? "recognition remained good at greater than 7/10 accuracy, suggesting deliberate processing with preserved discrimination"
      : "accuracy was also reduced, suggesting increased processing time with difficulty in left-right discrimination";
    return `Average speed was ${roundedSeconds} seconds per image, slower than average (${normPhrase}); ${accuracyContext}.`;
  }

  return `Average speed was ${roundedSeconds} seconds per image, within the average range (${normPhrase}).`;
}

function getSetTrendInterpretation() {
  if (state.setCount < 2) return "";

  const setSummaries = Array.from({ length: state.setCount }, (_, index) => {
    const setNumber = index + 1;
    const answers = state.answers.filter((answer) => answer.setNumber === setNumber);
    const correct = answers.filter((answer) => answer.isCorrect).length;
    const total = answers.length;
    const accuracy = total ? correct / total : 0;

    return { setNumber, correct, total, accuracy };
  }).filter((summary) => summary.total > 0);

  if (setSummaries.length < 2) return "";

  const first = setSummaries[0];
  const last = setSummaries[setSummaries.length - 1];
  const improvedWithRepetition = last.accuracy - first.accuracy >= 0.1 && last.correct > first.correct;
  const fatiguePattern = first.accuracy >= 0.8 && first.accuracy - last.accuracy >= 0.2;
  const steadyDecline = setSummaries.every((summary, index) => index === 0 || summary.accuracy <= setSummaries[index - 1].accuracy);
  const steadyImprovement = setSummaries.every((summary, index) => index === 0 || summary.accuracy >= setSummaries[index - 1].accuracy);
  const setScorePhrase = setSummaries
    .map((summary) => `set ${summary.setNumber}: ${summary.correct}/${summary.total}`)
    .join(", ");

  if (fatiguePattern || (steadyDecline && first.accuracy > last.accuracy)) {
    return `Set pattern (${setScorePhrase}) showed stronger initial performance followed by lower accuracy, which may indicate mental fatigue or reduced consistency as the activity continued.`;
  }

  if (improvedWithRepetition || (steadyImprovement && last.accuracy > first.accuracy)) {
    return `Set pattern (${setScorePhrase}) showed improved recognition with repetition, suggesting benefit from practice and task familiarity across sets.`;
  }

  return `Set pattern (${setScorePhrase}) was relatively stable without a clear repetition gain or fatigue-related decline.`;
}

async function copySoapNote(note, button) {
  const originalLabel = button.textContent;

  try {
    await navigator.clipboard.writeText(note);
    button.textContent = "Copied";
  } catch (error) {
    button.textContent = "Select text to copy";
  }

  setTimeout(() => {
    button.textContent = originalLabel;
  }, 1600);
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
