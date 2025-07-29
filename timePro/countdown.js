import { formatTime, pad } from "./formatTime.js";

//6 ==================== countdown timer =============================

const dateTimeInput = document.querySelector("#datetime");
const startBtnCoutndown = document.querySelector("#startTimer");
const countdownDisplay = document.querySelector("#countdown");
const countdownDisplayMsg = document.querySelector("#message");

let countdownIntervalId;

startBtnCoutndown.addEventListener("click", startCountdown);

function startCountdown() {
  countdownDisplayMsg.textContent = "";
  const targetDate = new Date(dateTimeInput.value); // я вводив не вірно Date.now
  const now = new Date();
  if (isNaN(targetDate.getTime())) {
    countdownDisplayMsg.textContent = "❌ Введіть коректну дату!";
    return;
  } else if (targetDate <= now) {
    countdownDisplayMsg.textContent = "❌ Оберіть дату майбутню!";
    return;
  }

  clearInterval(countdownIntervalId);

  countdownIntervalId = setInterval(() => {
    const currentTime = new Date();
    const diffTime = targetDate.getTime() - currentTime;
    if (diffTime <= 0) {
      clearInterval(countdownIntervalId);
      countdownDisplayMsg.textContent = "✅ Час настав!";
      // countdownDisplay.textContent = "00d 00h 00min 00s";
      return;
    }

    const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diffTime / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diffTime / (1000 * 60)) % 60);
    const seconds = Math.floor((diffTime / 1000) % 60);

    countdownDisplay.innerHTML =
      // countdownDisplay.textContent =
      `${pad(days)}<small>days</small> ${pad(hours)}<small>hours</small> ${pad(
        minutes
      )}<small>min</small> ${pad(seconds)}<small>sec</small>`;
  }, 1000);
}

// const resetBtnCountdown = document.querySelector("#resetTimer");

// resetBtnCountdown.addEventListener("click", resetCountdown);

// function resetCountdown() {
//   clearInterval(countdownIntervalId);
//   countdownDisplay.textContent = "00d 00h 00min 00s";
//   countdownDisplayMsg.textContent = "";
//   dateTimeInput.value = "";
// }
