localStorage.setItem("message", "Hello!");
localStorage.setItem("ui-theme", "light");
localStorage.setItem("sidebar", "expanded");
localStorage.setItem("notification-level", "mute");

const settings = {
  theme: "dark",
  isAuthenticated: true,
  options: [1, 2, 3],
};

localStorage.setItem("settings", JSON.stringify(settings));

const userData = {
  name: "John Doe",
  age: 30,
  books: ["Book 1", "Book 2", "Book 3"],
};

const stringUserData = JSON.stringify(userData);

localStorage.setItem("data", stringUserData);

const datFromLocalstorage = localStorage.getItem("message");

console.log("datFromLocalstorage ->", datFromLocalstorage);

const settingsFromLocalstorage = localStorage.getItem("settings");
const parsedSettings = JSON.parse(settingsFromLocalstorage);

// console.log("settingsFromLocalstorage ->", parsedSettings);

const userDataFromLocalStorage = localStorage.getItem("data");
const parsedUserData = JSON.parse(userDataFromLocalStorage);

// console.log("userDataFromLocalStorage :>> ", parsedUserData);

localStorage.removeItem("ui-theme");
// console.log(localStorage.getItem("ui-theme")); // null

// localStorage.clear();
