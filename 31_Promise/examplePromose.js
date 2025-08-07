// function watchTutorialCallback(okCallback, errorCallback) {
//   let userLeft = true;
//   //   let userWatchingCatMeme = false;

//   if (userLeft) {
//     errorCallback({
//       name: "User Left",
//       message: ":(",
//     });
//     //   }
//     // else if (userWatchingCatMeme) {
//     //     errorCallback({
//     //       name: "User Watching Cat Meme",
//     //       message: "WebDevSimplified < Cat",
//     //     });
//   } else {
//     okCallback("Thumbs up and Subscribe");
//   }
// }

// watchTutorialCallback(
//   (message) => {
//     console.log(message);
//   },
//   (error) => {
//     console.error(error.name + " " + error.message);
//   }
// );
//3 ===========================Звичний проміс============================================

//! promise.then(()=>{}).then(()=>{}).catch(()=>{}).finally(); результат обробки промісу

// const promise = new Promise((resolve, reject) => {
//   let userLeft = true;
//   // let userWatchingCatMeme = false;
//   if (userLeft) {
//     reject({
//       name: "User Left",
//       message: ":(",
//     });
//     //   } else if (userWatchingCatMeme) {
//     //     reject({
//     //       name: "User Watching Cat Meme",
//     //       message: "WebDevSimplified < Cat",
//     //     });
//   } else {
//     resolve("Thumbs up and Subscribe");
//   }
// });

// console.log("promise :>> ", promise);

const promise2 = new Promise((resolve, reject) => {
  const isSuccess = true;
  setTimeout(() => {
    if (!isSuccess) {
      resolve("Success! Value passed to resolve function ✅");
    } else {
      reject("Error! Error passed to reject function ❌");
    }
  }, 1000);
});
// console.log("promise2 :>> ", promise2);

promise2
  .then((value) => {
    console.log("value :>> ", value);
  })
  .catch((err) => {
    console.error("errrrrrr :>> ", err);
  });

//3 ================= fetch().then(()=>{}).then(()=>{}).catch(()=>{}).finally(); результат обробки запиту fetch  ==========

//1   fetch().then(()=>{}).then(()=>{}).catch(()=>{}).finally(); результат обробки запиту fetch

// fatch("https://pokeapi.co/api/v2/pokemon/ditto").then((response) => {
//   if (!response.ok) {
//     throw new Error("Network response was not ok");
//   }
//   return response.json();
// });

const promise = fetch("https://pokeapi.co/api/v2/pokemo/ditto");

promise
  .then((response) => {
    // console.log(response.json());
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(
      "There was a problem with the fetch operation 😈👽🤦‍♀️:",
      error
    );
  });

//3 ============================Промісифікована функція===========================================
// watchTutorialCallback(
//   (message) => {
//     console.log(message);
//   },
//   (error) => {
//     console.log(error.name + " " + error.message);
//   }
// );

// function watchTutorialPromise() {
//   let userLeft = false;
//   let userWatchingCatMeme = false;
//   return new Promise((resolve, reject) => {
//     if (userLeft) {
//       reject({
//         name: "User Left",
//         message: ":(",
//       });
//     } else if (userWatchingCatMeme) {
//       reject({
//         name: "User Watching Cat Meme",
//         message: "WebDevSimplified < Cat",
//       });
//     } else {
//       resolve("Thumbs up and Subscribe");
//     }
//   });
// }

// watchTutorialPromise()
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((error) => {
//     console.log(error.name + " " + error.message);
//   });
//3 =======================================================================

// const recordVideoOne = new Promise((resolve, reject) => {
//   resolve("Video 1 Recorded");
// });

// const recordVideoTwo = new Promise((resolve, reject) => {
//   resolve("Video 2 Recorded");
// });

// const recordVideoThree = new Promise((resolve, reject) => {
//   resolve("Video 3 Recorded");
// });

// Promise.all([recordVideoOne, recordVideoTwo, recordVideoThree]).then(
//   (messages) => {
//     console.log(messages);
//   }
// );

// Promise.race([recordVideoOne, recordVideoTwo, recordVideoThree]).then(
//   (message) => {
//     console.log(message);
//   }
// );
