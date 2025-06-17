// === іменований import  ===
// import { hello, goodbye, age, add } from "./js/greeter.js";
import superHeros from "./js/data.js";

// ===  import об'єктом ===
// import * as greeter from "./js/greeter.js";

import { hello, goodbye, age, add } from "./js/greeter.js";

import myFun from "./js/myFunction.js";

console.log("виклик функції hello :>> ", hello());
// console.log("виклик функції goodbye :>> ", goodbye());
// console.log("age :>> ", age);

// console.log("add :>> ", add(age, 15));

// const result = add(age, 15);

// console.log("result :>> ", result);

console.log("superHero :>> ", superHeros);

// console.log("greeter :>> ", greeter);

// console.log("object :>> ", greeter.hello());

myFun();
myFun();
myFun();
myFun();
myFun();
myFun();
