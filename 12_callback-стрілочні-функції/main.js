function loger(msg) {
  console.log(msg);
}

function orderFunction(fn) {
  const str = "Hello world!!!";
  loger(str);
}

// orderFunction(loger)

// for (let i = 0; i < 10; i+=1) {
//   console.log(i);

// }

// const repeade = function(n){

//     for (let i = 0; i < n; i += 1) {
//         console.log(i);

//       }
// }

// repeade(3)
// repeade(5)
// repeade(13)

const logPrint = function (value) {
  console.log(value);
};

const goodFn = function (value) {
  console.log(`Login fn ${value + 1} :>`, value);
};

const repeade = function (n, action) {
  for (let i = 0; i < n; i += 1) {
    action(i);
  }
};

// repeade(3, logPrint)
// repeade(5, goodFn)

const labels = [];

// repeade(3, function (value) {
//     console.log(`Login fn ${value+1} :>`, value);
//   })

// ()=>{}

// repeade(6, (value) => {
//   labels.push(`label-${value + 1}`);
// });

// console.log(labels);

//$ arrow function

// const fn = () =>{ } // синтаксис стрілочної функції

const fruits = [
  { name: "apples", quantity: 200, isFresh: true },
  { name: "grapes", quantity: 150, isFresh: false },
  { name: "bananas", quantity: 100, isFresh: true },
];
const vegetables = [
  { name: "apples", quantity: 200, isFresh: true },
  { name: "grapes", quantity: 150, isFresh: false },
  { name: "bananas", quantity: 100, isFresh: true },
];

const filter = function (array, callback) {
  const filrtedElement = [];
  for (const element of array) {
    // console.log('element :>> ', element);
    const passed = callback(element);
    // const passed = element.isFresh;
    if (passed) {
      filrtedElement.push(element);
    }
  }

  return filrtedElement;
};

// function expretion (функціональни вираз)
// const test = function (elementObj) {
//   return elementObj.name;
// };

// const fn = () =>{ } // синтаксис стрілочної функції
// const test = (elementObj) => {
//  elementObj.name;
// };

// анонімна функція
// elementObj => elementObj.name;

// filter(fruits, test);

// console.log(filter(fruits));
console.log(filter(fruits, elementObj => elementObj.isFresh));
// console.log(filter(fruits, elementObj => elementObj.quantity >= 150));
