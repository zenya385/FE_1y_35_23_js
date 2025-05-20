const container = document.querySelector(".js-container");
// const body = document.querySelector("body");

// body.addEventListener("click", onClick);
container.addEventListener("click", onClick);

function onClick(event) {
  //   console.log("target :>> ", event.target);
  //   console.log("currentTarget :>> ", event.currentTarget);
  if (event.target.nodeName === "BUTTON") {
    //   console.log("клікнули по кнопці :>> ", event.target.nodeName);

    console.log("текст у кнопці :>> ", event.target.textContent);
  }
}

// код добавлення кнопки

const addBtn = document.querySelector(".js-add-btn");
let lableCount = 6;

addBtn.addEventListener("click", onAddBtnClick);

function onAddBtnClick() {
  const btn = document.createElement("button");
  btn.textContent = `кнопка ${lableCount}`;
  btn.type = "button";
  container.appendChild(btn); // додаємо кнопку в контейнер, appendChild додає елемент в кінець батьківського елементу. В даному випадку це контейнер. Метод append може приймати будь-яку кількість аргументів, і,
  lableCount += 1;
}
