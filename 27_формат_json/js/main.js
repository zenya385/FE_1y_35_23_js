import { userDataFromJs } from "../data/user.js";
import userDataFromJson from "../data/userData.json";

// console.log("userDataFromJs :>> ", userDataFromJs);

const json = JSON.parse(userDataFromJson);

console.log("json :>> ", json);

// const user = [
//   {
//     name: "Josh",
//     weight: 175,
//     age: 30,
//     eyecolor: "brown",
//     isHappy: true,
//     cars: ["Chevy", "Honda"],
//     favoriteBook: {
//       title: "When the Fire Nation Attacked",
//       author: "Nickelodeon",
//       released: "02-21-2005",
//     },
//   },
//   {
//     name: "Josh",
//     weight: 175,
//     age: 30,
//     eyecolor: "brown",
//     isHappy: true,
//     cars: ["Chevy", "Honda"],
//     favoriteBook: {
//       title: "When the Fire Nation Attacked",
//       author: "Nickelodeon",
//       released: "02-21-2005",
//     },
//   },
//   {
//     name: "Josh",
//     weight: 175,
//     age: 30,
//     eyecolor: "brown",
//     isHappy: true,
//     cars: ["Chevy", "Honda"],
//     favoriteBook: {
//       title: "When the Fire Nation Attacked",
//       author: "Nickelodeon",
//       released: "02-21-2005",
//     },
//   },
// ];

// const userJsonSringObject = JSON.stringify(user);
// console.log("userJsonSringObject :>> ", userJsonSringObject);

// const userJsonPars = JSON.parse(userJsonSringObject);
// console.log("userJsonPars :>> ", userJsonPars);

// const dog = {
//   name: "Mango",
//   age: 3,
//   isHappy: true,
//   bark() {
//     console.log(this.name);
//   },
// };

// dog.bark();
