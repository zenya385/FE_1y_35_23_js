fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((data) => console.log("data :>> ", data))
  .catch((error) => console.error(error));

fetch("https://private-anon-81a5a0f03b-bookstore.apiary-mock.com/data/authors")
  .then((response) => response.json())
  .then((data) => console.log("data :>> ", data))
  .catch((error) => console.error(error));

fetch("http://private-anon-81a5a0f03b-bookstore.apiary-mock.com/data/books")
  .then((response) => response.json())
  .then((data) => console.log("data :>> ", data))
  .catch((error) => console.error(error));

fetch(
  "http://api.weatherapi.com/v1/forecast.json?key=384aad16c6234f5ea7f170312252108&q=Paris&days=10"
)
  .then((response) => response.json())
  .then((data) => console.log("data :>> ", data))
  .catch((error) => console.error(error));
