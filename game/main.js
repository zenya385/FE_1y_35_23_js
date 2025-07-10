const startBtn = document.querySelector("#startBtn");
const gameArea = document.querySelector("#gameArea");
const scoreEl = document.querySelector("#score");
const timerEl = document.querySelector("#timer");

let score = 0;
let timeLeft = 30;
let countDownInterval = 0;
let gameInterval = 0;

startBtn.addEventListener("click", startGame);

function getRandomPosition() {
  const x = Math.floor(Math.random() * (gameArea.clientWidth - 50));
  const y = Math.floor(Math.random() * (gameArea.clientHeight - 50));
  return { x, y };
}

function createTarget() {
  const target = document.createElement("div");
  target.classList.add("target");
  const { x, y } = getRandomPosition();
  target.style.left = `${x}px`;
  target.style.top = `${y}px`;
  target.addEventListener("click", () => {
    score += 1;
    scoreEl.textContent = `Бали: ${score}`;
    target.remove();
    createTarget();
  });
  gameArea.appendChild(target);
}

function startGame() {
  score = 0;
  timeLeft = 30;
  scoreEl.textContent = "Бали: 0";
  timerEl.textContent = "Час: 30";
  startBtn.disabled = true;
  gameArea.innerHTML = "";

  createTarget();

  countDownInterval = setInterval(() => {
    timeLeft -= 1;
    timerEl.textContent = `Час: ${timeLeft}`;
    if (timeLeft <= 0) {
      gameAnd();
    }
  }, 1000);
}

function gameAnd() {
  clearInterval(countDownInterval);
  gameArea.innerHTML = "";
  alert(`Гру завершино! Ваш рахунок ${score} `);
  startBtn.disabled = false;
}
