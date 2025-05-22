// ==========================mousemove===================================

// document.addEventListener("mousemove",  _.throttle(() => {}, 300));

const mouseMove = document.querySelector(".js-event");

// document.addEventListener("mousemove", onMouseMove, 300);
document.addEventListener("mousemove", _.throttle(onMouseMove, 300));
// document.addEventListener("mousemove", _.debounce(onMouseMove, 300));

let mouseCount = 0;

function onMouseMove(event) {
  mouseCount += 1;
  mouseMove.textContent = `Mouse moved to: ${mouseCount}, (${event.clientX}, ${event.clientY})`;

  //   const { clientX, clientY } = event;
  //   console.log(`Mouse moved to: (${clientX}, ${clientY})`);
}

// ===========================input==================================

const input = document.querySelector("input[type='text']");
const output = document.querySelector(".js-output");

let inputCount = 0;

// input.addEventListener("input", onInputChange);
// input.addEventListener("input", _.debounce(onInputChange, 500));
input.addEventListener("input", _.throttle(onInputChange, 300));

function onInputChange(e) {
  inputCount += 1;
  output.textContent = `Кількість викликів onInputChange: ${inputCount}, значення input: ${e.target.value}`;
}

// ===========================scroll==================================

const outputScroll = document.querySelector(".output");
let scrollEventCounter = 0;

document.addEventListener("scroll", () => {
  scrollEventCounter += 1;
  outputScroll.textContent = scrollEventCounter;
});
