//5==================================== Promise.all()    ===========================================
// Promise.all([promise1, promise2, promise3, ...])
// Приймає масив промісів, очікує їх виконання і повертає проміс. Якщо всі проміси виконаються успішно, проміс, що повертається, перейде у стан fulfilled, а його значенням буде масив результатів виконання кожного промісу. У разі, коли хоча б один з промісів буде відхилений, проміс, що повертається, перейде у стан rejected, а його значенням буде помилка.

// const promise1 = new Promise((resolve, reject) => {
//   if (!true) {
//     resolve("Promise 1 resolved");
//   } else{}
//     reject("Promise 1 rejected");
//   }
// );

// promise1
//   .then((value) => {
//     console.log("promise1 value :>> ", value);
//   })
//   .catch((error) => {
//     console.error("promise1 error :>> ", error);
//   });

// const makePromise = (text, delay) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (false) {
//         reject("Error! Error passed to reject function ❌");
//       }
//       resolve(text);
//     }, delay);
//   });
// };

// const promiseA = makePromise("promiseA value", 1000);
// const promiseB = makePromise("promiseB value", 3000);
// const promiseC = makePromise("promiseC value", 5000);

// Promise.all([promiseA, promiseB, promiseC])
//   .then((value) => console.log(value)) //["promiseA value", "promiseB value", promiseC value"]
//   .catch((error) => console.log(error));

//5==================================== Promise.race()    ===========================================
// Promise.race([promise1, promise2, promise3, ...])
// Повертає виконаний або відхилений проміс, залежно від того, з яким результатом завершиться «найшвидший» з переданих промісів, зі значенням або причиною його відхилення.

// const makePromise = (text, delay) => {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(text), delay);
//   });
// };

// const makePromise = (text, delay) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (true) {
//         reject("Error! Error passed to reject function ❌");
//       }
//       resolve(text);
//     }, delay);
//   });
// };

// const promiseA = makePromise("promiseA value", 1000);
// const promiseB = makePromise("promiseB value", 300);

// Promise.race([promiseA, promiseB])
//   .then((value) => console.log(value)) // "promiseA value"
//   .catch((error) => console.log(error));

//5==================================== Promise.allSettled()    ===========================================
// Promise.allSettled([promise1, promise2, promise3, ...])

// Метод Promise.allSettled()повертає проміс, який виконується, коли всі отримані проміси завершені (виконані або відхилені), що містить масив результатів виконання отриманих промісів.

const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) =>
  setTimeout(reject("foo"), 3000)
);
const promises = [promise1, promise2];

Promise.allSettled(promises).then((result) => console.log(result));

//5==================================== Promise.resolve() і Promise.reject()    ===========================================

// Fulfilled promise
new Promise((resolve) => resolve("success value")).then((value) =>
  console.log(value)
);

Promise.resolve("success value").then((value) => console.log(value));

// Rejected promise
new Promise((resolve, reject) => reject("error")).catch((error) =>
  console.error(error)
);

Promise.reject("error").catch((error) => console.error(error));
