// js виконується у 2-фази - парсинг і виконання

// 1 фаза - парсинг (parsing? compilation? compiletime?)
// на фазі парсингу відбувається перевірка синтаксису
// якщо є помилка парсингу - код не виконається

// 2 фаза - виконання (runtime)
// якщо є помилка виконання - виконається все до помилки, потім буде винесена помилка

// try...catch - це спосіб обробки помилок виконання
// якщо у блоці try виникає помилка, виконання коду припиняється і керування передається в блок catch
// якщо помилки немає, блок catch ігнорується

// const a = 5;

// console.log(a);

// console.log("Привіт!");

// try {
//   console.log("У середині try...catch");
//   myVar;
// } catch (error) {
//   console.log("Помилка!");
// }
// console.log("Після try...catch");

// ============================================

// console.log("Привіт!");

// try {
//   console.log("У середині try...catch"); // M, Mary

//   setTimeout(() => {
//     myVar;
//   }, 1000);
// } catch (error) {
//   console.log("Помилка!"); // Alina
// }

// console.log("Після try...catch"); // D, A,

// =======================================================

console.log("Привіт!");

try {
  console.log("У середині try...catch"); // M, Mary

  setTimeout(() => {
    try {
      myVar;
    } catch (error) {
      console.log("Помилка!");
    }
  }, 1000);
} catch (error) {
  console.log("Помилка!"); // Alina
}

console.log("Після try...catch"); // D, A,

// setTimeout()

//8 Базовий вигляд промісифікованої ф-ції та обробка відповіді
// function foo() {
//   return fetch(url, option).then(() => {})
//   };
// foo()
//   .then(() => {})
//   .catch(() => {})
//   .finally(() => {});

// =====================================================

// const fetchFriends = () => {
//   return fetch("my-api.com/me")
//     .then((token) => {
//       return fetch(`my-api.com/profile?token=${token}`);
//     })
//     .then((user) => {
//       return fetch(`my-api.com/users/${user.id}/friends`);
//     });
// };

// fetchFriends()
//   .then((friends) => console.log(friends))
//   .catch((error) => console.error(error));

//========================== fetchFriends async await ======================================

// async function fetchFriends() {
//   const token = await fetch("my-api.com/me").then();
//     console.log(token);

//   const user = await fetch(`my-api.com/profile?token=${token}`);
//   const friends = await fetch(`my-api.com/users/${user.id}/friends`);
//   return friends;
// }

// fetchFriends()
//   .then((friends) => console.log(friends))
//   .catch((error) => console.error(error));

// ======================================================================================================

("https://restcountries.com/v3.1/name/ukraine");

// function fetchCountries(name) {
//   return fetch(`https://restcountries.com/v3.1/name/${name}`).then(
//     (response) => {
//       if (!response.ok) {
//         throw new Error(response.status);
//       }
//       return response.json();
//     }
//   );
// }

// fetchCountries("ukraine")
//   .then((data) => console.log(data))
//   .catch((error) => {
//     console.log("error :>> ", error);
//   });

// =============================== async await =================================

// async function fetchCountries(name) {
//   const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
//   if (!response.ok) {
//     throw new Error(response.status);
//   }
//   return await response.json();
// }

// fetchCountries("ukraine")
//   .then((data) => console.log(data))
//   .catch((error) => {
//     console.log("error :>> ", error);
//   });

// =============================== async await синтаксис при написанні різних типів функцій ================================

// function declaration() { }

// const expretion = function () { }

// const arrow = () => { }

// const object {

//   getInfo: function () {

// },
//     getName: ()=>{}

// }

// ====================== async await типи ===========================

// async function declaration() { }

// const expretion = async function () { }

// const arrow = async () => { }

// const object {

//   async getFoo(){},

//   getInfo:  async function () {

// },
//     getName: async ()=>{}

// }


