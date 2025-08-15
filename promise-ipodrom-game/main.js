/*
 * Promise.race([]) для очікування першого виконаного промісу
 * Promise.all([]) для очікування всіх промісів
 */

const horses = [
  "Secretariat",
  "Eclipse",
  "West Australian",
  "Flying Fox",
  "Seabiscuit",
];

// сonsole.log("🏇 Іподром розпочався!");
// console.log("📝 Заїзд завершився, ставки приймаються!.");
// console.log("🏁 Заїзд розпочався, ставки не приймаються!");
// console.log("🏁 Cтарт заїзду!");

// ================================================================
let raceCounter = 0; // лічильник забігів
// ================================================================

const startBtn = document.querySelector(".js-start-race");
const winnerField = document.querySelector(".js-winner");
const progressField = document.querySelector(".js-progress");
const tableBody = document.querySelector(".js-results-table > tbody");

startBtn.addEventListener("click", () => {
  raceCounter += 1;

  // зробити масив промісів для всіх коней
  // const promises = horses.map((horse) =>  run(horse));
  const promises = horses.map(run);

  winnerField.textContent = "";

  Promise.race(promises).then(({ horse, time }) => {
    //   console.log(`Перемога ${horse}, фіншував за ${time} часу`);
    winnerField.textContent = `Перемога ${horse}, фіншував за ${time} часу`;
    updateResultTable({ horse, time, raceCounter });
  });

  Promise.all(promises).then(({ horse, time }) => {
    // console.log("📝 Заїзд завершився, ставки приймаються!.");
    progressField.textContent = "📝 Заїзд завершився, ставки приймаються!.";
    // updateResultTable({ horse, time });
  });
  progressField.textContent = "🏁 Заїзд розпочався, ставки не приймаються!";
});

function updateResultTable({ horse, time, raceCounter }) {
  const tr = `<tr>
          <td>${raceCounter}</td>
          <td>${horse}</td>
          <td>${time}</td>
        </tr>`;
  tableBody.insertAdjacentHTML("beforeend", tr);
}

// функція забіг розпочаася проміс
function run(horse) {
  return new Promise((resolve, reject) => {
    const time = getRandomTime(2000, 3500); // випадковий час забігу 2 до 3,5сек

    setTimeout(() => {
      resolve({ horse, time });
    }, time);
  });
}

// функція генерації випадкового числа у діапазаоні
function getRandomTime(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
