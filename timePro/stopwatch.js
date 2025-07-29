import { formatTime, pad } from "./formatTime.js";

const timeDisplay = document.querySelector("#time");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resetBtn = document.querySelector("#resetBtn");

let startTime = 0;
let elapsedTime = 0;
let intervalId = null;
let isRuning = false;

startBtn.addEventListener("click", start);
pauseBtn.addEventListener("click", pause);
resetBtn.addEventListener("click", reset);

function updateTime() {
  const now = Date.now();
  elapsedTime = now - startTime;

  timeDisplay.textContent = formatTime(elapsedTime);
}

function start() {
  if (!isRuning) {
    startTime = Date.now() - elapsedTime;
    intervalId = setInterval(updateTime, 10);
    console.log("intervalId :>> ", intervalId);

    isRuning = true;
    return;
  }
}
function pause() {
  if (isRuning) {
    clearInterval(intervalId);
    isRuning = false;
  }
}
function reset() {
  clearInterval(intervalId);
  elapsedTime = 0;
  isRuning = false;
  timeDisplay.textContent = "00:00:00.000";
}
