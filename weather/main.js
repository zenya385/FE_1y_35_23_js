//5  fetch(url, options).then(()=>{}).then(()=>{}).catch(()=>{}).finally(()={});

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => {
// console.log("response :>> ", response);
// if (!response.ok) {
//   throw new Error(response.statusText);
// }
//     return response.json();
//   })
//   .then((data) => {
//    console.log("data :>> ", data);
//   })
//   .catch((error) => {
//      console.error(error);
//   });

const search = document.querySelector(".js-search");
const list = document.querySelector(".js-list");

search.addEventListener("submit", onSearch);

function onSearch(e) {
  e.preventDefault();
  //   console.log(
  //     "e.currentTarget.elements :>> ",
  //     e.currentTarget.elements.query.value
  //   );
  const { query, days } = e.currentTarget.elements;
  getWeather(query.value, days.value)
    .then((data) => {
      console.log("data :>> ", data);
    })
    .catch((error) => {
      console.error(error);
    });
}

const BASE_URL = "http://api.weatherapi.com/v1";
const API_KEY = "384aad16c6234f5ea7f170312252108";

function getWeather(city, days) {
  return fetch(
    `${BASE_URL}/forecast.json?key=${API_KEY}&q=${city}&days=${days}`
  ).then((response) => {
    //   console.log("response :>> ", response);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
}

function createMarkup(arr) {
  return arr.map(() => {});
}
