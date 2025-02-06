const string = "JavaScript";

const element = string[2]

console.log(element); // 


// console.log(string[4]);

// console.log("Java" + "Script");
// console.log(true + " Script");
// console.log(7 + " Script");
// console.log("Java" + " " + "Script" + " " + string);

let result = 0;

result = 6 + "6";
result = 6 + "6" + 6;



// console.log(string);



//$ length - властивість, зберігає довжину рядка
// console.log(string.length);

//$ toLowerCase() і toUpperCase() - повернуть новий рядок у відповідному регістрі, не змінюють оригінальний рядок
// console.log(string.toUpperCase());

const upper = "Hello js";
// console.log(upper.toUpperCase());

// console.log("java script".toLocaleLowerCase());

// console.log(upper);



//$ indexOf() - поверне позицію (індекс) на якій знаходиться перший збіг підрядка або -1, якщо нічого не знайдено
// console.log(string.indexOf('S'));
// console.log(string[4]);

// console.log("S"==="s"); // false


//$ includes() - один з найбільш часто використовуваних методів, в більшості випадків замінює indexOf, перевіряє чи входить підрядок в рядок, повертає true або false
 console.log(string.includes('j'));
 
//$  str.startsWith() та str.endsWith() перевіряють, чи починається і чи закінчується рядок певним підрядком. 
//$ повертає true або false

// console.log(string.endsWith('t'));

//$ trim() – видаляє (“обрізає”) пробіли з початку та кінця рядка.


// const data = prompt("Введи дані")

const trimData = data.trim()

// console.log(trimData.startsWith('H'));


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#Methods_2


// padStart() і padEnd()доповнює поточний рядок іншим рядком (кілька разів, якщо потрібно), доки отриманий рядок не досягне заданої довжини. Відступ застосовується з кінця/початку поточного рядка.


// console.log(string.padStart(20, ':') );
// console.log(string.padEnd(string.length + 3, '.') );


// console.log("Java       " + " " + "Script " + " " + string);

//  '' "" ``

const name = 'Mango';
const age = 2;
const mood = 'happy';


const message =
//  'My name is' + " " + name + ", I'm " + age + ' years old and '  + mood + '.';
 `My name is ${name}, I'm ${age} years old and ${mood}`;

console.log(message);


