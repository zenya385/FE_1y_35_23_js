const date = new Date();
//
const dateStartUnixTime = new Date(0);
const dateS = new Date(24 * 60 * 60 * 1000); // 86400000ms

const date1 = new Date("December 16, 1995 23:15:30");
const date2 = new Date(2013, 2, 1, 1, 10);

const myBirthday = new Date(1985, 2, 3);
console.log("myBirthday :>> ", myBirthday);

// console.log("now :>> ", date); //  Tue Jul 22 2025 19:53:44 GMT+0300 (за східноєвропейським літнім часом)
// console.log("timestamp", dateStartUnixTime); // Thu Jan 01 1970 03:00:00 GMT+0300 (за східноєвропейським стандартним часом)
// console.log("new Date() :>> ", dateS); // Thu Jan 01 1970 03:16:40 GMT+0300 (за східноєвропейським стандартним часом)

// console.log(date.getDate()); // Отримати день місяця, від 1 до 31
// console.log(date.getDay()); // Отримати день тижня, від 0 (неділя) до 6 (субота).
// console.log(date.getMonth()); // Отримати місяць, від 0 до 11

// Повертає години
console.log("getHours(): ", date.getHours());
console.log("getUTCHours(): ", date.getUTCHours());

// Повертає хвилини
console.log("getMinutes(): ", date.getMinutes());

// console.log("date1 :>> ", date1.getDay());
// console.log("date2 :>> ", date2);

const date0 = Date.now(); //19:51:50
// console.log("date0 :>> ", date0);
const date4 = date.getTime();
// console.log("date4 :>> ", date4); //

setTimeout(() => {
  const date5 = Date.now(); // 19:51:55
  // console.log("date0 :>> ", date0);
  // console.log("date5 :>> ", date5);
  // console.log(date5 - date0);
}, 5000);
