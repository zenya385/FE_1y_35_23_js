

const hotel = {
    name: 'Resort Hotel',
    stars: 5,
    capacity: 100,
    };

//   console.log('hotel :>> ', hotel);

for (const key in hotel) {
   
        const element = hotel[key];
        
//    console.log('element :>> ', element);
}



//6 ========= Методи об'єкту Object.keys(), Object.values(), Object.entries()

//7 Object.keys (obj) - поверне масив, з ключами об'єкта obj у вигляді рядків.
//7 Object.values (obj) - поверне масив, зі значеннями властивостей об'єкта obj.
//7 Object.entries (obj) - поверне масив записів, кожним елементом якого буде ще один масив з 2-х елементів, ключа і значення цього ключа з об'єкта Obj.



const keys = Object.keys(hotel);
// console.log('keys :>> ', keys);

for(const key of keys ){
    // console.log('key :>> ', hotel[key]);  //повернeтся  значення
    // console.log('key :>> ', key);   //повернется ключі як рядочки
}

const values = Object.values(hotel);
// console.log('values :>> ', values);

const entries = Object.entries(hotel);
// console.log('entries :>> ', entries);

for (const entri of entries) {
    const key = entri[0]
    const value = entri[1]
// console.log(`${key}   =>>  ${value}  `);
}

//6  ==================================  Операція spread  =======================

//7 ...  - spread, розпорошення. Дозволяє розпорошити колекцію елементів в іншу колекцію, зробивши копію оригінальної не зраджуючи її. При цьому, під час розпилення, якщо елемент колекції примітив - створюється копія елемента, в разі складного типу створюється посилання на оригінальний елемент.

const temps = [14, -4, 25, 8, 5, 5, 11];

// Це точна, але незалежна копія масиву temps
const copyOfTemps = [...temps]
// console.log(copyOfTemps); // [14, -4, 25, 8, 11]


const obj1 = {a:1, b:2, c:1}
const obj2 = {c:3, d:5}

// const newObj = {...obj1, ...obj2}
// const newObj = {...obj2, ...obj1}

// console.log('newObj :>> ', newObj);


// const test = {a:1, b:2 , c:3, d:5}

// const test = {a:1, b:2 , c:1, d:5}



//6 ====================== Присвоєння за посиланням і за значенням ======================


const str = 'hello';

const copyStr = str;

console.log('copyStr :>> ', copyStr);


//9  Присвоєння за значенням

// let a = 5;
// Присвоєння за значенням, в пам'яті буде створена ще
// одна комірка, в яку буде скопійоване значення 5

// let b = a;
// console.log(a); // 5
// console.log(b); // 5

// Змінимо значення a
// a = 10;
// console.log(a); // 10
// Значення b не змінилося, оскільки це окрема копія
// console.log(b); // 5


//9  Присвоєння за посиланням


// const a = ["Mango"];
// Оскільки a - це масив, в b записується посилання на вже існуючий
// масив в пам'яті. Тепер a і b вказують на той самий масив.

// const b = a;
// console.log(a); // ["Mango"]
// console.log(b); // ["Mango"]

// Змінимо масив, додавши ще один елемент, використовуючи вказівник з a
// a.push("Poly");
// console.log(a); // ["Mango", "Poly"]

// b також змінилось, тому що b, як і a,
// просто містить посилання на те ж саме місце в пам'яті
// console.log(b); // ["Mango", "Poly"]

// Результат повторюється
// b.push("Ajax");
// console.log(a); // ["Mango", "Poly", "Ajax"]
// console.log(b); // ["Mango", "Poly", "Ajax"]





// const arr = [1, 2];  //  [1, 2]


// const copyArr = arr;  // [1, 2]

// const copyArr1 = copyArr // [1, 2]

// arr.push(3)
// copyArr.push(4)
// copyArr1.push(5)

// const arr2 = [1, 2, 3, 4, 5]

// console.log('arr :>> ', arr);
// console.log('copyArr :>> ', copyArr);
// console.log('copyArr1 :>> ', copyArr1);
// console.log('arr2 :>> ', arr2);

// console.log('copyArr1 === copyArr1 :>> ', copyArr1 === copyArr1); 
// console.log('arr === arr2 :>> ', arr === arr2); 





// let a = 5;

// let b = a;
// console.log(a); // 5
// console.log(b); // 5


// a = 10;
// console.log(a); // 10

// console.log(b); // 5
























//8 ================================== HW ===================================
// посилання на завдання
//4  https://github.com/ViktorSvertoka/goit-js-hw-03/blob/main/README.md

//3 Завдання 1
//5 Напиши скрипт, який, для об'єкта user, послідовно:
//5 додає поле mood зі значенням 'happy'
//5 замінює значення hobby на 'skydiving'
//5 замінює значення premium на false
//5 виводить вміст об'єкта user в форматі ключ:значення використовуючи Object.keys() і for...of

const user = {
    name: "Mango",
    age: 20,
    hobby: "html",
    premium: true,
  };

user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = false;

// console.log('user :>> ', user);

const keysUser = Object.keys(user)
for (const key of keysUser) {
    // console.log(`${key}:${user[key]}`);
    
}


//3 Завдання 2
//6 Напиши функцію countProps(obj), яка рахує кількість властивостей в об'єкті. Функція повертає число — кількість властивостей.


function countProps(obj){
console.log(Object.keys(obj).length);

}

countProps(user)

//3 Завдання 3



//6 Напиши функцію findBestEmployee(employees), яка приймає об'єкт співробітників і повертає ім'я найпродуктивнішого (який виконав більше всіх задач). Співробітники і кількість виконаних завдань містяться як властивості об'єкта в форматі "ім'я":"кількість задач".

//6 const findBestEmployee = function (employees) {
//6     //6 твій код
//6   };
  

// //    * Викличи функції для перевірки працездатності твоєї реалізації.

//6   console.log(
//6     findBestEmployee({
//6       ann: 29,
//6       david: 35,
//6       helen: 1,
//6       lorence: 99,
//6     })
//6   ); 
// // lorence
  
//6   console.log(
//6     findBestEmployee({
//6       poly: 12,
//6       mango: 17,
//6       ajax: 4,
//6     })
//6   );
//  // mango
  
//6   console.log(
//6     findBestEmployee({
//6       lux: 147,
//6       david: 21,
//6       kiwi: 19,
//6       chelsy: 38,
//6     })
//6   ); 
// // lux

function findBestEmployee(employees){
const workerKeys = Object.keys(employees);
let bestEmployee = '';
let maxTask = 0;

for (const workerKey of workerKeys) {

    if(employees[workerKey] > maxTask){
        maxTask = employees[workerKey]
        bestEmployee = workerKey
    }

}
return bestEmployee
}

//   


//3 Завдання 4

//6 Напиши функцію countTotalSalary(employees) приймаючу об'єкт зарплат. Функція рахує загальну суму зарплати працівників і повертає її. Кожне поле об'єкта, переданого в функцію, має вигляд "ім'я":"зарплата".

const countTotalSalary = function (employees) {
    // твій код
  };
  
  /*
   * Викличи функції для перевірки працездатності твоєї реалізації.
   */
  console.log(countTotalSalary({})); // 0
  
  console.log(
    countTotalSalary({
      mango: 100,
      poly: 150,
      alfred: 80,
    })
  ); // 330
  
  console.log(
    countTotalSalary({
      kiwi: 200,
      lux: 50,
      chelsy: 150,
    })
  ); // 400


// Завдання 5



// Напиши функцію getAllPropValues(arr, prop), яка отримує масив об'єктів і ім'я властивості. Повертає масив значень певної властивості prop з кожного об'єкта в масиві.



// Завдання 6



// Напиши функцію calculateTotalPrice(allProdcuts, productName), яка отримує масив об'єктів та ім'я продукту (значення властивості name). Повертає загальну вартість продукту (ціна * кількість).



// Викличи функції для перевірки працездатності твоєї реалізації.



// Завдання 7 — додаткове, виконувати не обов'язково



// Напиши сценарій керування особистим кабінетом інтернет-банку. Є об'єкт account в якому необхідно реалізувати методи для роботи з балансом та історією транзакцій.