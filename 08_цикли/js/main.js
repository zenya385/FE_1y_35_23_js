//% ======================= Цикл while ================================
//$ Цикл з передумовою — цикл, який виконується поки істинна деяка умова

// while (умова) {
//     // тіло циклу
// }

let counter = 0;

while (counter < 10) {
  //   console.log('counter: ', counter);
  counter += 1;
}

let clientCounter = 18;
const maxClients = 25;

while (clientCounter <= maxClients) {
  // console.log(clientCounter);
  clientCounter += 1;
}

//% ======================= Цикл do...while ================================
//$ Цикл з постумовою — цикл, в якому умова перевіряється після виконання тіла циклу

// do {
// //     // тіло циклу
// } while (умова);

let password = "";
// do {
//     password = prompt('Введіть пароль довше 4-х символів', '');
// } while (password.length < 5);

// console.log('Ввели пароль: ', password);

//% ======================= Цикл for ================================

// for(Ініціалізація; Умова; Поствираз) {
//     // тіло циклу
// }

// i++

// for (let i = 0; i < 10; i += 1) {
//   console.log(i);
// }

let totalSum = 0;

for (let i = 0; i <= 10; i += 1) {
  //   console.log("i :>> ", i);

  totalSum += i;
    // console.log('totalSum :>> ', totalSum);
}

// console.log(totalSum);

//^ ================================================

const max = 10;

for (let i = 0; i < max; i += 1) {
  //   console.log(`${max} % ${i} = `, max % i);
}

const arr = ["Ivan", "Petro", "Stepan", "Mary"];

for (let i = 0; i < arr.length; i++) {
  // console.log(`${i+1}. ${arr[i]}`);
}

//^ ================================================

for (let i = 10; i >= 1; i -= 1) {
// console.log(i);

}



//^ ============================  Інструкції break і continue ==========================

//^ ================   break =================

for (let i = 1; i <= 10; i += 1) {
  if (i === 5) {
    break;
  }
//   console.log('i :>> ', i);
}

//^ ================   continue ==============
//* Використовуємо цикл для виведення тільки непарних чисел.
 //*  Для парних i спрацьовує continue, виконання тіла припиняється
 //*  і управління передається на наступну ітерацію.

const number = 10;
for (let i = 1; i <= number; i += 1) {
  if (i % 2 == 0) {
    continue;
  }
//   console.log('Непарне i: ', i); // 1, 3, 5, 7, 9
}


//$ ========================== example ====================================== 


let string = "Hello world!!!$"

// const leng = string[string.length - 1] 


// console.log('leng :>> ', leng);
// console.log('string[5] :>> ', string[6]);

// console.log('string :>> ', string);

// console.log('lengthStr :>> ', string.length);


for (let i = 0; i < string.length; i+=1) {
  // console.log('i :>> ', i); 
  const element = string[i];
    // console.log(element);
}


//$ Написати скрипт який буде перевіряти середній бал успішності учня. Прервати роботу циклу, коли середній бал буде меньше 7.


//$ Виведіть в консоль всі непарні числа за допомогою циклу for


//$ Напиши цикл, який пропонує в prompt ввести число, більше 100. Якщо відвідувач ввів інше число – попросити ввести ще раз и т.д.

// let userInput
// do {
//   userInput = Number(prompt(" Введи число більше 100 "))
//    console.log('userInput :>> ', userInput);
//   if (userInput > 100) {
//     alert('Все чудово')
//   }
// } while (userInput < 100);


// while (userInput > 100) {
//     const userInput = Number(prompt(" Введи число більше 100 "))
//   console.log('userInput :>> ', userInput);
// }


// for (let i = 0; i < array.length; i++) {
//   const element = array[i];
  
// }

//$ Напиши скрипт який підраховує загальну суму зп працівників. Кількість робітників зберігається в змінній employees. ЗП кожного працівника це випадкове число від 500 до 5000.  Записати суму в змінну totalSalary і вивести в на сторінку.


let totalSalary = 0;
const employees= 5;

  
// console.log('rand :>> ', rand);

function genereteRandomNumber() {
const rand = Math.floor(500 + Math.random() * (5000 + 1 - 500));
  return rand
}

for (let i = 1; i < employees + 1; i++) {

 let randomSalary = genereteRandomNumber()
 console.log(`employees ${i} salary:>> `, randomSalary);
  totalSalary += randomSalary
}

console.log('totalSalary :>> ', totalSalary);



