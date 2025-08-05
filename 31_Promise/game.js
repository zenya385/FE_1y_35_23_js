const start = document.querySelector(".js-start");
const container = document.querySelector(".js-container");

start.addEventListener("click", onStart);

function onStart() {
  //   console.log(container.children);
  //   [...container.children].forEach((box) => console.log(box));
  //   [...container.children].forEach((box) => (box.textContent = "👽"));
  [...container.children].forEach((box) => (box.textContent = ""));
  [...container.children].forEach((box, i) =>
    createPromise(i)
      .then((smile) => (box.textContent = smile))
      .catch((smile) => (box.textContent = smile))
  );
}

function createPromise(delay) {
  return new Promise((res, rej) => {
    const random = Math.random() > 0.1;
    setTimeout(() => {
      if (random) {
        res("🤑");
      } else {
        rej("😈");
      }
    }, 1000 * delay);
  });
}
