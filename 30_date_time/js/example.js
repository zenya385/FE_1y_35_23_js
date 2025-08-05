const outputDate = document.querySelector("#dateOutput");
const showDateBtn = document.querySelector("#showDateBtn");

const outputTime = document.querySelector("#timeOutput");
const showTimeBtn = document.querySelector("#showTimeBtn");

const daysToNewYearBtn = document.querySelector("#daysToNewYearBtn");
const newYearOutput = document.querySelector("#newYearOutput");

showDateBtn.addEventListener("click", showDate);
showTimeBtn.addEventListener("click", showTime);
daysToNewYearBtn.addEventListener("click", daysToNewYear);
console.log(new Date(1753979100000));
console.log(Date.now());

function showDate() {
  const now = new Date();
  const day = now.getDate().toString().padStart(2, "0");
  const month = (now.getMonth() + 1).toString().padStart(2, "0");
  const year = now.getFullYear();

  outputDate.textContent = `${day}.${month}.${year}`;
}

function showTime() {
  const now = new Date();

  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  outputTime.textContent = `${hours}:${minutes}:${seconds}`;
}

function daysToNewYear() {
  const today = new Date();
  const nextYear = today.getFullYear() + 1;
  const newYear = new Date(nextYear, 0, 1);
  const diff = newYear - today;
  const leftDays = Math.floor(diff / (1000 * 60 * 60 * 24));
  newYearOutput.textContent = `До нового року залишилось ${leftDays} днів`;
}
