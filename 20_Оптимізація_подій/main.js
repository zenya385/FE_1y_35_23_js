const parent = document.querySelector("#parent");
// const child = document.querySelector("#child");
// const descendant = document.querySelector("#descendant");

// parent.addEventListener("click", (event) => {
//   //   console.log("event :>> ", event);
//   console.log("Parent click handler");
// });

// child.addEventListener("click", () => {
//   console.log("Child click handler");
// });

// descendant.addEventListener("click", () => {
//   //   stopPropogation();
//   console.log("Descendant click handler");
// });

parent.addEventListener("click", (event) => {
  console.log("event.currentTarget", event.currentTarget);
  console.log("event.target", event.target);
  console.log("event :>> ", event);
});

// console.log(
//   "Math.floor(Math.random() * 16) :>> ",
//   Math.floor(Math.random() * 16)
// );
