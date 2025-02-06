//5 ============== function declaration ==================

const global = 'GLOBAL'

// function fn(r, s) {
// return  r + s;
// }

// const result = fn(5, 10)
// console.log('result ', result);
// console.log('fn(15, 110) ', fn(15, 110));
// console.log('fn(1, 11) ', fn(1, 11));
// console.log('fn(20, 30) ', fn(20, 30));


//5 1. Оголошення функції multiply
// function multiply() {
//     // Тіло функції
//     console.log("Це лог на момент виклику функції multiply");
//   }

//   multiply()


// Оголошення параметрів x, y, z
// function multiply(x, y, z) {
//     console.log(`Результат множення дорівнює ${x * y * z}`);

//   }

// multiply(1, 2, 3)
// multiply(5, 6, 7)

// function multiply(x, y, z) {
    // console.log("Код до return виконується звичайним чином");
  
    // Повертаємо результат виразу множення
//    return  x * y * z;
  
    // console.log("Цей лог ніколи не виконається, він стоїть після return");
//   }
  
  // Результат роботи функції можна зберегти у змінну
//   let result = multiply(2, 3, 5);
//   console.log(result); // 30

//   console.log( multiply(2, 3, 5)); // 30
  
//   result = multiply(4, 8, 12);
//   console.log(result); // 384
  
//   result = multiply(17, 6, 25);
//   console.log(result); // 2550

//5 =======================

//   function multiply(num, number, numbrNumber) {
//     console.log(`Результат множення дорівнює ${num * number * numbrNumber}`);
//   }
  
  
//   multiply(2, 3, 5)
//   multiply(6, 3, 51)
  
//5  =================================== 
  
// const x = 2
// const y = 3
// const z = 5

// function multiplyCopy() {
//   console.log(`Результат множення дорівнює ${x * y * z}`);
// }

// // multiplyCopy()

  
  //5 ======================== function expretion  ===========================
  
  const name = function(){
    console.log('object :>> ');
  }
  
  // name()


  //5 ======================== function arow  ===========================

  
  const fn = (a, b)=> console.log('hello');
  // fn()
  

  // ()=>{}




    //5 ========================= Порядок виконня коду ================


    // const fnA = function() {
    //   console.log('Почала виконуватися [fnA]');
    //   fnB();
    //   console.log('Продовжила виконуватися [fnA] після виходу з [fnB]');
    // }; 
    // const fnB = function() {
    //   console.log('Виконується [fnB]');
    // }; 
    // console.log('Почав виконання [main]');
    // fnA();
    // console.log('Продовжив виконуватися [main] після виходу з [fnA]'); 


   1 //   Почав виконання [main];
   2 //   Почала виконуватися [fnA];
   3 //   Виконується [fnB];
   4 //   Продовжила виконуватися [fnA] після виходу з [fnB];
   5 //   Продовжив виконуватися [main] після виходу з [fnA];



    //5 ========================= Параметри за замовчуванням ================

const count = function( countFrom = 0, countTo = 10, step = 1 ){

  console.log(`countFrom = ${countFrom}, countTo = ${countTo}, step = ${step} `);

  for (let i = countFrom; i < countTo; i += step ) {
   console.log(i);
   
    }
}  


// count(5, 20, 2)

// count(1, 5)


//5 ==================== Патерн «Раннє повернення» ===========

// function withdraw(amount, balance) {
//     if (amount === 0) {
//       console.log("Для проведення операції введіть суму більшу за нуль");
//     } else if (amount > balance) {
//       console.log("Недостатньо коштів на рахунку");
//     } else {
//       console.log("Операція зняття коштів проведена успішно");
//     }
//   }
  
//   withdraw(0, 300); // "Для проведення операції введіть суму більшу за нуль"
//   withdraw(500, 300); // "Недостатньо коштів на рахунку"
//   withdraw(100, 300); // "Операція зняття коштів проведена успішно"



function withdraw(amount, balance) {
  // Якщо умова виконується, викликається console.log
  // і вихід із функції. Код після тіла if не виконається.
  if (amount === 0) {
    console.log("Для проведення операції введіть суму більшу за нуль");
    return;
  }

  // Якщо умова першого if не виконалась, його тіло пропускається
  // та інтерпретатор доходе до другого if.
  // Якщо умова виконується, викликається console.log і вихід із функції.
  // Код, що знаходиться після тіла if, не виконається.
  if (amount > balance) {
    console.log("Недостатньо коштів на рахунку");
    return;
  }

  // Якщо жоден із попередніх if не виконався,
  // інтерпретатор доходить до цього коду і виконує його.
  console.log("Операція зняття коштів проведена");
}

// withdraw(0, 300); // "Для проведення операції введіть суму більшу за нуль"
//   withdraw(500, 300); // "Недостатньо коштів на рахунку"
  withdraw(100, 300); // "Операція зняття коштів проведена"


 //5 ==================== Псевдомасив arguments ===========


  // function multiply(...args) {
//     let total = 1;
//     console.log('array :>> ', args);
//     console.log('pseudo :>> ', arguments);

//     for (const argument of arguments) {
//       total *= argument;
//     }
  
//     return total;
//   }
  
// //   console.log(multiply(1, 2, 3)); //  6
// //   console.log(multiply(1, 2, 3, 4)); //  24
//   console.log(multiply(1, 2, 3, 4, 5)); //  120