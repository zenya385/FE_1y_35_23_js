// console.log("First log");
// console.log("Second log");
// console.log("Third log");

console.log("First log");

// window.setTimeout(
//   (arg1, arg2) => {
//     console.log("arg1 :>> ", arg1);
//     console.log("arg2 :>> ", arg2);
//   },
//   5000,
//   "qwert",
//   200
// );

const timeId = setTimeout(() => {
  console.log("2 log");
}, 5000);

const timeId1 = setTimeout(() => {
  console.log("3 log");
}, 3000);

// const intervalId = setInterval(() => {
//   console.log("Second log");
// }, 1000);

// clearInterval(intervalId);
// clearTimeout(timeId);

// const loger = setTimeout(
//   (time) => {
//     console.log(`Лог через ${time}ms, тому що ми поки не відмінили таймаут`);
//   },
//   2000,
//   2000
// );

// const loger1 = setInterval(
//   (time) => {
//     console.log(`Лог через ${time}ms - ${Date.now()}`);
//   },
//   1000,
//   1000
// );
console.log("Third log");
