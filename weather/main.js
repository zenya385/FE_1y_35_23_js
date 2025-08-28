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

//3 ================================== код погоди ==================================================

const BASE_URL = "http://api.weatherapi.com/v1";
const API_KEY = "384aad16c6234f5ea7f170312252108";

const search = document.querySelector(".js-search");
const list = document.querySelector(".js-list");

search.addEventListener("submit", onSearch);

// функція яка
function onSearch(e) {
  e.preventDefault(); //3 заборонити перезавантажувати сторінку
  //   console.log("e.currentTarget.elements :>> ", e.currentTarget.elements);
  const { query, days } = e.currentTarget.elements; //3 отримуємо значення нашого поля інпут та к-ть днів з селекту
  getWeather(query.value, days.value)
    .then((data) => {
      console.log("data :>> ", data.forecast.forecastday.date);
      list.innerHTML = createMarkup(data.forecast.forecastday); //3 викликаємо функцію та вствляємо у HTML
    })
    .catch((error) => {
      console.error(error);
    });
}

//3 промісифікована функція яка робить запит та повертає проміс
function getWeather(city, days) {
  return fetch(
    `${BASE_URL}/forecast.json?key=${API_KEY}&q=${city}&days=${days}&lang=uk`
  ).then((response) => {
    // console.log("response :>> ", response);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
}

//3 функція створення розмітки
function createMarkup(arr) {
  return arr
    .map(
      ({
        date,
        day: {
          avgtemp_c,
          maxwind_mph,
          condition: { text, icon }, // деструктуризація об'єкта
        },
      }) =>
        `<li>
        <img src="${icon}" alt=${text}"" />
        <p>${text}</p>
        <h2>Дата: ${date}</h2>
        <h3>Середня температура: ${avgtemp_c}</h3>
        <p>Максимальний порив вітру: ${maxwind_mph}</p>
            </li>`
    )
    .join("");
}
