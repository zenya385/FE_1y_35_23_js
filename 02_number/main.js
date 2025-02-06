
// const x = 11;
// const y = 5;

// Додавання
// console.log(x + y); // 15

// Віднімання
// console.log(x - y); // 5

// Множення
// console.log(x * y); // 50

// Ділення
// console.log(x / y); // 2

// Остача від ділення
// console.log(x % y); // 1

// Додавання із заміною (також є для всіх інших операторів)
// let value = 5;

// Аналогічно запису 
// value = value + 10;
// value += 10;
// value -= 3

// console.log(value); // 15


//% ======================================= 2. Оператори порівняння ============================
//%        повертають true або false

// a > b і a < b - більше/менше
// a >= b і a <= b - більше/менше або дорівнює
// a == b - рівність
// a != b - нерівність
// a === b - строга рівність
// a !== b - строга нерівність


const x = 5;
const y = 10;
const z = 5;

// console.log("x > y:", x > y); // false
// console.log("x < y:", x < y); // true
// console.log("x < z:", x < z); // false
// console.log("x <= z:", x <= z); // true
// console.log("x === y:", x === y); // false
// console.log("x === z:", x === z); // true
// console.log("x !== y:", x !== y); // true
// console.log("x !== z:", x !== z); // false



//% ======================================= Числа ============================
//# Всі числа в JavaScript, як цілі так і дробові, мають тип Number і записувати їх можна не тільки в десятковій системі числення.

//% ======================================= Приведення до числа ============================
//# щоб зробити з рядка число, використовуйте функцію Number(val)


const valueA = "5";
// console.log(Number(valueA)); // 5
// console.log(typeof Number(valueA)); // "number"

const valueB = "random string";
// console.log(Number(valueB)); // NaN
// console.log(typeof Number(valueB)); // "number"



//% ======================================= Методи Number.parseInt() і Number.parseFloat() ============================

// Методи Number.parseInt() і Number.parseFloat()
// Перетворюють рядок символ за символом, доки це можливо. У разі виникнення помилки повертається підсумкове число.

// Метод Number.parseInt() парсить з рядка ціле число.

// console.log(Number.parseInt("5px")); // 5
// console.log(Number.parseInt("12qwe74")); // 12
// console.log(Number.parseInt("12.46qwe79")); // 12
// console.log(Number.parseInt("qweqwe")); // NaN


// Метод Number.parseFloat() парсить з рядка дробове число.

// console.log(Number.parseFloat("5.17.15px")); // 5.17
// console.log(Number.parseFloat("12qwe74")); // 12
// console.log(Number.parseFloat("12.46qwe79")); // 12.46
// console.log(Number.parseFloat("qweqwe")); // NaN




//% ============================= Перевірка на число ============================
//# Для перевірки на число можна використовувати метод Number.isNaN(val). Він перевіряє, чи вказане значення є NaN. Метод відповідає на запитання "Це Not A Number?" і повертає:
// Number.isNaN(val)
// true - якщо значення val - NaN
// false - якщо значення val - не NaN

const validNumber = Number("51"); // 51
// console.log(Number.isNaN(validNumber)); // false

const invalidNumber = Number("qweqwe"); // NaN
// console.log(Number.isNaN(invalidNumber)); // true



// console.log(0.1 + 0.2 === 0.3); // false
// console.log(0.1 + 0.2); // 0.30000000000000004



// console.log(0.17 + 0.24); // 0.41000000000000003
// console.log((0.17 + 0.24).toFixed(2)); // "0.41"
// console.log(Number((0.17 + 0.24).toFixed(2))); // 0.41



//% ============================= Клас Math ============================

// Math.floor(num) - повертає найменше ціле число,
// менше, або яке дорівнює зазначеному числу
// console.log(Math.floor(1.7)); // 1

// Math.ceil(num) - повертає найбільше ціле число,
// більше, або яке дорівнює зазначеному числу.
// console.log(Math.ceil(1.001)); // 2

// Math.round(num) - повертає значення числа,
// округленого до найближчого цілого
// console.log(Math.round(1.2)); // 1
// console.log(Math.round(1.5)); // 2

// Math.max(num1, num2, ...) - повертає найбільше ціле число з набору
// console.log(Math.max(20, 10, 50, 40)); // 50

// Math.min(num1, num2, ...) - повертає найменше ціле число з набору
// console.log(Math.min(20, 10, 50, 40)); // 10

// Math.pow(base, exponent) - піднесення до степеня
// console.log(Math.pow(2, 4)); // 16

// Math.random() - повертає псевдовипадкове число в діапазоні [0, 1)
// console.log(Math.random()); // випадкове число між 0 і 1
// console.log(Math.random() * (10 - 1) + 1); // псевдовипадкове число від 1 до 10

const randomBetween1And100 = Math.floor(Math.random() * 10) + 1;
// console.log(randomBetween1And100);

console.log(Number("7"));
console.log(Number("7px")); 
console.log(Number("7.")); 
