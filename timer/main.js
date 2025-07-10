const timeInput = document.querySelector("#timeInput");
const startBtn = document.querySelector("#startBtn");
const messageEl = document.querySelector("#message");

let timerId = 0;

startBtn.addEventListener("click", () => {
  const seconds = Number(timeInput.value);

  //   console.log(seconds);

  clearTimeout(timerId);
  timeInput.value = "";
  messageEl.textContent = "";

  if (isNaN(seconds) || seconds <= 0) {
    messageEl.textContent = "Введіть коректне число секунд!";
    return;
  }

  timerId = setTimeout(() => {
    messageEl.textContent = "Час вийшов!";
  }, seconds * 1000);
});
