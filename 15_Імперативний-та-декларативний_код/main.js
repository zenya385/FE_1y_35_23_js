//6 ======================= імперативний підхід =========================

// Імперативний підхід
// const numbers = [10, 20, 30, 40, 50];
// const filteredNumbers = [];

// for(let i = 0; i < numbers.length; i+=1){
//     // console.log(numbers[i]);
// if(numbers[i] > 20){
//     filteredNumbers.push(numbers[i])
// }
// }

// console.log('filteredNumbers :>> ', filteredNumbers);

// Декларативний підхід
// const numbers = [10, 20, 30, 40, 50];

// const filteredNumbers = numbers.filter(value => value > 3);
// console.log(filteredNumbers); // [4, 5]

// const filteredNum = numbers.filter( function filtered (value){
//     return value > 20
// } )

// const filteredNum = numbers.filter((value)=>{
//     return value > 20
// } )

// const filteredNum = numbers.filter((value)=> value > 20 )

// console.log(filteredNum);

// ==================== грязні функції ==========================
// const numbers = [1, 2, 3, 4, 5];

// const dirtyMultiply = (array, value) => {
//     for (let i = 0; i < array.length; i += 1) {

//       array[i] = array[i] * value;

//     }
//   };

//   dirtyMultiply(numbers, 2);

//   // Відбулася мутація вихідних Даних
//   console.log(numbers); // [2, 4, 6, 8, 10]

// ==================== чисті функції ==========================

//   const numbers = [1, 2, 3, 4, 5];
//   const result = [];

// const pureMultiply = (array, value) => {
//     for (let i = 0; i < array.length; i += 1) {
//    result.push(array[i] * value)
//     }
//     return result
//   };

// pureMultiply(numbers, 2);

// Відбулася мутація вихідних Даних
// console.log(numbers); // [2, 4, 6, 8, 10]
// console.log(result)

// //3 ==================== МЕТОДИ МАСИВУ ==========================

// //6 ==================== Метод filter() ==========================

//8  масив.filter((element, index, array) => {
//8  return  // Тіло колбек-функції
//8  });

//# Метод filter(callback) використовується для єдиної операції - фільтрації масиву, тобто, коли необхідно вибрати більше одного елемента з колекції за певним критерієм.

//7 Не змінює оригінальний масив.
//7 Поелементо перебирає оригінальний масив.
//7 Повертає новий масив.
//7 Додає у масив, що повертається, елементи, які задовольняють умови колбек-функції.
//7 Якщо колбек повернув true, елемент додається у масив, що повертається.
//7 Якщо колбек повернув false, елемент не додається у масив, що повертається.
//7 Якщо жоден елемент не задовольнив умову, повертає порожній масив.

// const values = [51, -3, 27, 21, -68, 42, -37, 0];

// const positiveValues = values.filter(value => value >= 0);
// console.log(positiveValues); // [51, 27, 21, 42]

// const negativeValues = values.filter(value => value < 0);
// console.log(negativeValues); // [-3, -68, -37]

// const bigValues = values.filter(value => value > 1000);
// console.log(bigValues); // []

// // Оригінальний масив не змінився
// console.log(values); // [51, -3, 27, 21, -68, 42, -37]

// //6 ==================== Метод forEach() ==========================

//8  масив.forEach((element, index, array) => {
//8  return  // Тіло колбек-функції
//8  });

//7  Перебирає
//7  Може змінювати
//7  Нічого не повертає

const numbers = [10, 20, 30, 40, 50];

// for (let i = 0; i < numbers.length; i+=1) {
//   console.log( numbers[i]);
// }

// numbers.forEach((num, index, array) =>

// console.log('num :>> ', num)
// console.log('index :>> ', index)
// console.log('array :>> ', array)

// )

// //6 ==================== Метод map(()=>) ==========================

//8  масив.map((element, index, array) => {
//8   return // Тіло колбек-функції
//8  });

//# Метод map(callback) використовується для трансформації масиву. Він викликає колбек-функцію для кожного елемента вихідного масиву, а результат її роботи записує у новий масив, який і буде результатом виконання методу.

//7 Поелементо перебирає оригінальний масив.
//7 Не змінює оригінальний масив.
//7 Результат роботи колбек-функції записується у новий масив.
//7 Повертає новий масив однакової довжини.

const planets = ["Земля", "Марс", "Венера", "Юпітер"];

const planetsInUpperCase = planets.map((planet) => planet.toUpperCase());
// console.log(planetsInUpperCase); // ['ЗЕМЛЯ', 'МАРС', 'ВЕНЕРА', 'ЮПІТЕР']

const planetsInLowerCase = planets.map((planet) => planet.toLowerCase());
// console.log(planetsInLowerCase); // ['земля', 'марс', 'венера', 'юпітер']

// Оригінальний масив не змінився
// console.log(planets); // ['Земля', 'Марс', 'Венера', 'Юпітер']

// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Полі", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Ківі", score: 94 },
//   { name: "Х'юстон", score: 64 },
// ];

// const nameStudent = students.map((student) => student.name);
// const nameScore = students.map((student) => student.score);

// console.log('nameStudent :>> ', nameStudent);
// console.log('nameScore :>> ', nameScore);

// //6 ==================== Метод find(()=>) ==========================

//8  масив.find((element, index, array) => {
//8   return // Тіло колбек-функції
//8  });

//# Якщо метод filter(callback) використовується для пошуку всіх елементів, що задовольняють умову, то метод find(callback) дозволяє знайти і повернути перший відповідний елемент, після чого перебирання масиву припиняється. Тобто він шукає до першого збігу.

//7 Не змінює оригінальний масив.
//7 Поелементо перебирає оригінальний масив.
//7 Повертає перший елемент, що задовольняє умову, тобто коли колбек повертає true.
//7 Якщо жоден елемент не задовольнив умову, тобто для всіх елементів колбек повернув false, метод повертає undefined.

const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];

// console.log(colorPickerOptions.find((option) => option.label === "red"));
// console.log(colorPickerOptions.find((option) => option.label === "pink"));
// console.log(colorPickerOptions.find((option) => option.label === "indigo"));

// //6 ==================== Метод every(()=>) та some(()=>) ==========================

//# Метод every()
//# Перевіряє, чи проходять всі елементи масиву тест колбек-ф#ункції. Повертає true або false.

//8   масив.every((element, index, array) => {
//8   // Тіло колбек-функції
//8    });

//7 Не змінює оригінальний масив.
//7 Поелементо перебирає оригінальний масив.
//7 Повертає true, якщо всі елементи масиву задовольняють умову.
//7 Повертає false, якщо хоча б один елемент масиву не задовольняє умову.
//7 Перебирання масиву припиняється, якщо колбек повертає false.

// Усі елементи більші або дорівнюють нулю? - так
[1, 2, 3, 4, 5].every((value) => value >= 0); // true

// Усі елементи більші або дорівнюють нулю? - ні
[1, 2, 3, -10, 4, 5].every((value) => value >= 0); // false

//# Метод some()
//# Перевіряє, чи проходить хоча б один елемент масиву тест колбек-функції. Повертає true або false.

//8 масив.some((element, index, array) => {
//8   // Тіло колбек-функції
//8 });

//7  Не змінює оригінальний масив.
//7  Поелементо перебирає оригінальний масив.
//7  Повертає true, якщо хоча б один елемент масиву задовольняє умову.
//7  Повертає false, якщо жоден елемент масиву не задовольняє умову.
//7  Перебирання масиву припиняється, якщо колбек повертає true.
//7  Чи є хоча б один елемент, що більший або дорівнює нулю? - так

[1, 2, 3, 4, 5].some((value) => value >= 0); // true

// Чи є хоча б один елемент, що більший або дорівнює нулю? - так
[-7, -20, 3, -10, -14].some((value) => value >= 0); // true

// Чи є хоча б один елемент, що менший нуля? - ні
[1, 2, 3, 4, 5].some((value) => value < 0); // false

// Чи є хоча б один елемент, що менший нуля? - так
[1, 2, 3, -10, 4, 5].some((value) => value < 0); // true

const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
  { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
  { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
  { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
  { id: "player-5", name: "Chelsy", timePlayed: 80, points: 48, online: true },
];

// Отримати масив імен всіх гравців

// const playerName = players.map((player) => player.name)

// console.log('playerName :>> ', playerName);

// Збільшити кількість поінтів кожного гравця на 10% (розпорошуємо старий об'єкт)

// const points =  players.map((player)=>({ ...player, points: Math.round(player.points * 1.1)}))

// console.log('points :>> ', points);
// console.log('players :>> ', players);

// //6 ==================== Метод reduce(()=>{}, initialValue)  ==========================

//# Метод reduce(callback, initialValue) використовується для послідовної обробки кожного елемента масиву із збереженням проміжного результату, як акумулятор. Трохи складніший за інші методи для засвоєння, але результат вартий того.

//8 масив.reduce((previousValue, element, index, array) => {
//8   // Тіло колбек-функції
//8 }, initialValue);

//7  Не змінює оригінальний масив.
//7  Поелементо перебирає оригінальний масив.
//7  Повертає все, що завгодно.
//7  Робить все, що завгодно.

// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Полі", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Ківі", score: 94 },
//   { name: "Х'юстон", score: 64 },
// ];

// Назва акумулятора може бути довільною, це просто параметр функції

// const totalScore = students.reduce((total, student)=>{
//   // console.log('total :>> ', total );
//   // console.log('student :>> ', student.score);
//   return  total + student.score
// }, 0 )

// console.log('totalScore :>> ', totalScore);
// const averageScore  = totalScore / students.length
// console.log('averageScore :>> ', averageScore);

const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

const allLikes = tweets.reduce((acc, tweet) => acc + tweet.likes, 0);
// console.log('allLikes :>> ', allLikes);

let total = 0;
for (const tweet of tweets) {
  total = total + tweet.likes;
}
// console.log('total :>> ', total);

const alltegs = tweets.reduce((acc, tweet) => {
  acc.push(...tweet.tags);
  return acc;
}, []);

// //4   ====================== тільки унікальні елементи у масиві ========================
// const uniqueArray1 = [...new Set(alltegs)];  //  тільки унікальні елементи, самий простий спосіб

// //4   ======================тільки унікальні елементи у масиві ========================
//  const uniqueArray2 = alltegs.filter((item, index, self) => self.indexOf(item) === index); //  тільки унікальні елементи у масиві

// //4   ======================тільки унікальні елементи у масиві на вході масив ========================
// const uniqueArray3 = alltegs.reduce((acc, item) => {
//   if (!acc.includes(item)){
//     acc.push(item)
//   };
//   return acc;
// }, []);

// console.log('alltegs :>> ', alltegs);
// console.log('uniqueArray1 :>> ', uniqueArray1);
// console.log('uniqueArray2 :>> ', uniqueArray2);
// console.log('uniqueArray3 :>> ', uniqueArray3);
// console.log('uniqueArray :>> ', uniqueArray);

// let totalTags = []

// for (const tweet of tweets) {
//   totalTags.push(...tweet.tags)

// }
// console.log('totalTegs :>> ', totalTags);

// //6 ==================== Метод sort(()=>{})  ==========================

//# Метод sort() сортує елементи масиву, але на відміну від інших методів перебирання, він сортує вихідний масив.

//7 Сортує і змінює вихідний масив.
//7 Повертає змінений масив, тобто посилання на відсортований вихідний.
//7 За замовчуванням сортує за зростанням.
//7 Сортування відбувається шляхом приведення значень до рядка і порівняння порядкових номерів у таблиці Unicode.

const scores = [61, 3, 19, 74, 35, 92, 56];
scores.sort((a, b) => a - b);
scores.sort((a, b) => b - a);
console.log(scores); // [19, 3, 35, 56, 61, 74, 92]

const students = ["Віка", "Андрій", "Олег", "Юля", "Борис", "Катя"];
students.sort((a, b)=>a.localeCompare(b));
students.sort((a, b)=>b.localeCompare(a));
console.log(students); // [ 'Андрій', 'Борис', 'Віка', 'Катя', 'Олег', 'Юля' ]

const studentsO = [
  { name: "Манго", score: 83 },
  { name: "Полі", score: 59 },
  { name: "Аякс", score: 37 },
  { name: "Ківі", score: 94 },
];

const sortStudents = [...studentsO].sort((a, b) => a.score - b.score);

const sortStudentsByName = [...studentsO].sort((a, b) => a.name.localeCompare(b.name));
const sortStudentsByName1 = [...studentsO].sort((a, b) => b.name.localeCompare(a.name));

console.log("studentsO :>> ", studentsO);

console.log("sortStudents :>> ", sortStudents);
console.log("sortStudents :>> ", sortStudents);
console.log("sortStudentsByName :>> ", sortStudentsByName);
console.log("sortStudentsByName1 :>> ", sortStudentsByName1);
