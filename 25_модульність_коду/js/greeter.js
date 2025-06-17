// import { superHero } from "./data.js";

const helloMessage = "hello!";
const goodbyeMessage = "goodbye!";

// // === іменований експорт  ===
// export const hello = () => helloMessage;
// export const goodbye = () => goodbyeMessage;
// export const age = 15;

// export function add(a, b) {
//   return a + b;
// }

// === експорт об'єктом ===

const hello = () => helloMessage;
const goodbye = () => goodbyeMessage;
const age = 15;

function add(a, b) {
  return a + b;
}

// console.log("superHero :>> ", superHero);

export { hello, goodbye, age, add };
