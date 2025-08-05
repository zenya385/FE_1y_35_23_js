// const promis = new Promise((resolve, reject) => {
//     const val
// })

//! promise.then(()=>{}).then(()=>{}).catch(()=>{}).finally(); результат обробки промісу

// Promise.resolve('5');
// Promise.reject('10');

// Change value of isSuccess variable to call resolve or reject
// const isSuccess = true;

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve("Success! Value passed to resolve function");
//     } else {
//       reject("Error! Error passed to reject function");
//     }
//   }, 2000);
// });

// console.log(promise);

// // // Promise.resolve("Success! Value passed to resolve function");
// promise
//   .then(
//     // onResolve will run third or not at all
//     (value) => {
//       // console.log("onResolve call inside promise.then()");
//       console.log(value); // "Success! Value passed to resolve function"
//     }
//   )
//   .catch((err) => {
//     console.error(err);
//     console.log(err);
//   });

// https://pokeapi.co/api/v2/pokemon/ditto

// fatch("https://pokeapi.co/api/v2/pokemon/ditto").then((response) => {
//   if (!response.ok) {
//     throw new Error("Network response was not ok");
//   }
//   return response.json();
// }

// const promise = fetch("https://pokeapi.co/api/v2/pokemo/ditto");

// promise
//   .then((response) => {
//     return response.json();
//     // console.log(response.json());
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error(
//       "There was a problem with the fetch operation 😈👽🤦‍♀️:",
//       error
//     );
//   })
//   .finally(() => {});
