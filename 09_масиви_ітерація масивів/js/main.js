// const array = ["Iruna", 3, true, undefined];

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const names = ["Stepan", "Ivan", "Mariya", "Olya", "Mango", "Poly", "Ajax"];

const clients = ["Mango", "Poly", "Ajax"];

// console.log("array :>> ", array);
// console.log("numbers :>> ", numbers[5]);
// console.log("names :>> ", names);
// console.log('names :>> ', names.length);

//$ ======================= for of ====================

let total = 0;

for (const number of numbers) {
  // console.log( element);
  total += Math.pow(number, 2);
  // console.log('total :>> ', total);
}

// console.log("total :==>> ", total);

// ==========================================
for (const name of names) {
  // console.log("name :>> ", name.toUpperCase());
}

//$ ======================= for ====================

// for (let i = 0; i <= 10; i += 1) {
//   //  console.log('i :>> ', i);
// }

for (let index = 0; index < names.length; index += 1) {
  // console.log('index :>> ', index);

  const elementOfArray = names[index];

  // console.log(`${index + 1}. ${elementOfArray}`);
}

for (const name of names) {
  // console.log( name);
}

// ===========================================================

const str = "Java Script";

// const srtNew = clients1[2].toUpperCase();

// console.log(srtNew);
// console.log(clients1[3]);
// console.log('clients1 :>> ', clients1);

//const names =  ["Stepan", "Ivan", "Mariya", "Olya", "Mango", "Poly", "Ajax"];
// console.log(names[0]);
// console.log(names[1]);
// console.log(names[2]);
// console.log(names[3]);
// console.log(names[4]);
// console.log(names[5]);
// console.log(names[6]);

for (let i = 0; i < names.length; i += 1) {
  // console.log('i :>> ', i);
  // const element = names[i];
  // console.log( names[i].toLowerCase());
}

const nums = [17, 2, 39, 43, 54, 600, 73, 81, 99];

let sum = 0;

for (let index = 0; index < nums.length; index++) {
  const element = nums[index];
  // console.log(element);
  sum += element;
}

// console.log(sum); //1008

// Що буде в консолі? Розібрати чому саме такий результат:
const numbers1 = [10, 25, 13, 44, 15];

numbers1[5] = 30;
// console.log(array);

numbers1[10] = 5;
// console.log(array);

numbers1[0] = 15;
// console.log(array);

//$ Вивести в консоль всі елементи масиву за допомогою циклів for та for…of.

for (const number of numbers1) {
  // console.log(number);
}

for (let qwe = 0; qwe < numbers1.length; qwe += 1) {
  // console.log(qwe);
  // console.log(numbers1[qwe]);
}

//$  Через індекс елемента додати в кінець масиву Arr1 новий елемент зі значенням: 22. Вивести значення кожного елемента масиву Arr1 в консоль.

const arr1 = [1, 2, 3, 4, 5, 6];
arr1[6] = 22;
// console.log(arr1);

for (const num of arr1) {
  // console.log(num);
}

//$ Напиши скрипт пошуку логіна. Якщо логіна немає, вивести повідомлення 'Користувач [логін] не знайдено.' Якщо знайшли логін, вивести повідомлення 'Користувач [логін] знайдено.'
//$   - Спочатку через for
//$   - Потім через for...of
//$   - Логіка break
//$   - Метод includes() с тернарним оператором

const logins = ["Stepan", "Ivan", "Mariya", "Olya", "Mango", "Poly", "Ajax"];

const serchLogin = "Olya6";
let msg = `Користувач ${serchLogin} не знайдено.`
//^ ===== через for
// for (let i = 0; i < logins.length; i += 1) {
//   const login = logins[i];
//   if(login === serchLogin){
// msg = `Користувач ${serchLogin} знайдено.`
// // console.log(msg);
//   }
// }
//^ ===== через for of
// for (const login of logins) {
//   if(login === serchLogin){
//     msg = `Користувач ${serchLogin} знайдено.`
//     // break
//   }
// }

//^ ===== через тернарний оператор
  // msg = (logins.includes(serchLogin))?`Користувач ${serchLogin} знайдено.`: `Користувач ${serchLogin} не знайдено.`

  

// console.log(msg);
