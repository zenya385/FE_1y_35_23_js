
//8 split(s) — дозволяє перетворити рядок в масив, розбивши її по розподілу s. Це не метод масиву, але розглядаємо ми його зараз так, як раніше про масиви не знали.

//8 join(s) — робить в точності протилежне split. Він бере масив і склеює його в рядок, використовуючи s як роздільник.


//8 includes() -

//8 indexOf() -
//  indexOf(value) повертає перший індекс, в якому елемент зі значенням value був знайдений в масиві, або число -1, якщо такий елемент відсутній. Використовуйте indexOf тоді, коли необхідно отримати сам індекс елемента.

//8 push() — дозволяє додати один або кілька елементів в кінець масиву. Метод повертає значення властивості length, яке визначає кількість елементів в масиві.

//8 pop() — видаляє елемент з кінця масиву і повертає видалений елемент. Якщо масив порожній, метод повертає undefined.

//8 shift() — видаляє елемент з початку масиву і повертає його (елемента) значення.

//8 unshift() — додає елемент в початок масиву.

//8 slice() - Копіює елементи від begin, до end, але не включаючи його.

//8 splice() — швейцарський ніж для роботи з масивами, в тому випадку, якщо вихідний масив необхідно змінити. Дозволяє видаляти, додавати і замінювати елементи в довільному місці масиву.










//^ ===================== Методи розкол() і join() =============
//5 array.method()

//4 string.split(s)  — дозволяє перетворити рядок в масив, розбивши її по розподілу s. Це не метод масиву, але розглядаємо ми його зараз так, як раніше про масиви не знали.

//4 join(s) — робить в точності протилежне split. Він бере масив і склеює його в рядок, використовуючи s як роздільник.

const str = "Java script";

// console.log(str);

const arrayFromString = str.split(" ");
const arrayFromString1 = str.split("");

// console.log(arrayFromString);
// console.log(arrayFromString1);

const names = ["Stepan", "Ivan", "Mariya", "Olya", "Mango", "Poly", "Ajax"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const stringFromArray = names.join(" ");

const strinForNum = numbers.join("-");

// console.log(names);

// console.log( strinForNum);

// console.log(stringFromArray);

//^ ===================== Методи indexOf() і includes() =============

//4 array.indexOf(x) — повертає число (перший індекс), в якому елемент x був знайдений в масиві, або число -1, якщо такого елемента немає. Використовуйте indexOf тоді, коли необхідно отримати безпосередньо індекс елемента.

const indexOfElement = names.indexOf("Mariya");

// console.log(indexOfElement);

// console.log(numbers.indexOf(5));

// 4 array.includes(x) — визначає, чи містить масив деякий елемент x, повертаючи true або false відповідно. Використовуйте includes тоді, коли необхідно перевірити, чи є елемент в масиві і не важливий його порядковий номер.

// console.log(names.includes('Mariya2'));

//^=========== Перевірка множинних умов з includes()

const nameWoman = "Mariya";
const nameMan = "Ivan1";

if (names.includes(nameWoman)) {
  // console.log('В масиві є такий користувач');
}

for (const element of names) {
  if (element === nameWoman || element === nameMan) {
    //    console.log(`Ім'я ${element} знайдено!`);
  }
}

//^ =================  Методи push(), pop(), shift(), unshift() =========

//4 Додають або видаляють крайні елементи масиву. Працюють тільки з крайнім лівим і крайнім правим елементом масиву, і не можуть поставити або видалити елемент з довільної позиції. Для наочності погляньте на ілюстрацію нижче.

// numbers.push(50)
// numbers.pop()
// numbers.shift()
// numbers.unshift(23)
// console.log(numbers);

// names.push("Diana")
// console.log(names);


//^ =================  Методи slice() =========

//4 array.slice(begin, end) повертає новий масив, що містить копію частини вихідного масиву, не змінюючи його. Копія створюється з begin і до, але не включно, end - індекси елементів вихідного масиву.

//5 Обидва аргументи (begin і end) не обов'язкові.
//5 Параметр begin визначає індекс, з якого слід починати витяг.
//5 Параметр end, визначає індекс елемента, на якому слід закінчити витяг. Метод slice не включає елемент з індексом end у витягнуті елементи.
//5 Якщо begin і end не вказані, копіювання буде з початку масиву, з індексу 0, - тобто скопіюється весь масив.
//5 Якщо не вказати параметр end, метод slice буде використовувати довжину масиву (length) для параметра end.


// const names = ["Stepan", "Ivan", "Mariya", "Olya", "Mango", "Poly", "Ajax"];
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];



const newNames = names.slice(6, 8)

console.log('newNames :>> ', newNames);


const newNum = numbers.slice(3, numbers.length -2 )

console.log('newNum :>> ', newNum);



//^ =================  Методи splice() =========
// мутабельний метод
//6 Швейцарський ніж для роботи з масивами, якщо вихідний масив необхідно змінити. Видаляє, додає і замінює елементи у довільному місці масиву.

//3====== Видалення
//5    splice(position, num)
//6    position - вказує на позицію (індекс) першого елемента для видалення
//6    num - визначає кількість елементів, що видаляються



// console.log(names.splice(1, 5));
// console.log(names);
// const newArrNames = names.slice().splice(1, 5)
// console.log('newArrNames :>> ', newArrNames);
// console.log('names :>> ', names);

//3====== Додавання
//5 splice(position, 0, new_element_1, new_element_2, ...)

numbers.splice(0, 0, -1,-2,-3)


console.log('numbers :>> ', numbers);

//3====== Заміна


numbers.splice(0, 3, -10, -20, 'true')

console.log('numbers :>> ', numbers);


//^ =================  Методи concat() =========

//5 Об'єднує два або більше масивів в один. Він не змінює масив, на якому викликається, а повертає новий. Порядок аргументів методу впливає на порядок елементів нового масиву.

const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
const newClients = ["Monkong", "Singu"];

const allArr1 = oldClients.concat(newClients)
const allArr2 = newClients.concat(oldClients)
console.log('allArr1 :>> ', allArr1);
console.log('allArr2 :>> ', allArr2);



//% ============================ examaple ==============================

//?1 Створити масив із п'яти чисел. Використовуючи метод push(), додати до масиву ще один елемент.
//?2 Створити масив із трьох стрічок. Використовуючи метод pop(), видалити з масиву останній елемент.
//?3 Створити масив із десяти чисел. Використовуючи метод slice(), створити новий масив, який буде містити перші п'ять елементів.
//?4 Створити масив із п'яти чисел. Використовуючи метод indexOf(), знайти індекс елемента зі значенням 3.
//?5 Створити масив із п'яти стрічок. Використовуючи метод join(), створити одну стрічку, яка буде містити всі елементи масиву, розділені комою.

//@ ========= 1 ===============

const array = [10, 59, 765, 8, 3, 263];

array.push(159);



// console.log("array :>> ", array);

//@ ========= 2 ===============

// const names = ["Stepan", "Ivan", "Mariya", "Olya", "Mango", "Poly", "Ajax"];

names.pop();

// console.log("names :>> ", names);


//@ ========= 3 ===============

const indexElement =  array.indexOf(3)

// console.log("array :>> ", indexElement);


//@ ========= 4 ===============




//1 console.log('String :>> ', );

//2 console.log('String :>> ', );


//3 console.log('String :>> ', );


//4 console.log('String :>> ', );


//5 console.log('String :>> ', );


// 6 console.log('String :>> ', );


//7 console.log('String :>> ', );


//8 console.log('String :>> ', );
//9 console.log('String :>> ', );



// const brightColors = [
//   "#FFA500", // Orange (alternative to gold)
//   "#7CFC00", // Lawn Green (alternative to lime green)
//   "#40E0D0", // Turquoise (alternative to cyan)
//   "#4169E1"  // Royal Blue (alternative to Dodger Blue)
// ];