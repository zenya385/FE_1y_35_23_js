const list = document.querySelector(".js-list");
const loadMore = document.querySelector(".js-load");

const BASE_URL = "https://api.themoviedb.org/3/";
const ENDPOINT = "trending/movie/day";
const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYWIwY2JiODdhYmNiY2U5MjY1MTJhYWNmMmNmODVjMiIsIm5iZiI6MTY0MjA3NTcyMC4wMzIsInN1YiI6IjYxZTAxNjQ4YzE3NWIyMDA0MWNjODZlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-K3dXXWqGpHSXtjGmQtaJYQ3Gm1p86tWI22t5nlgEq8";

let currentPage = 1;

loadMore.addEventListener("click", onLoad);

function onLoad() {
  currentPage += 1;
  getTrending(currentPage)
    .then((data) => {
      console.log(data);

      list.insertAdjacentHTML("beforeend", createMarkup(data.results));

      if (data.page === data.total_pages) {
        loadMore.hidden = true;
      }
    })
    .catch((err) => console.error(err));
}

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

function getTrending(page = 1) {
  return fetch(
    //   "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
    `${BASE_URL}${ENDPOINT}?page=${page}&language=uk-UA`,
    options
  ).then((res) => {
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    return res.json();
  });
}

getTrending()
  .then((data) => {
    list.insertAdjacentHTML("beforeend", createMarkup(data.results));
    if (data.page !== data.total_pages) {
      loadMore.hidden = false;
    }
  })
  .catch((err) => console.error(err));

function createMarkup(arr) {
  return arr
    .map(
      ({
        poster_path,
        title,
        overview,
        vote_average,
        original_title,
        release_date,
      }) =>
        `<li class="list-item">
    <img src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${title}">
       <h2>${title} / ${original_title}</h2>
      <h2>Рейтинг: ${vote_average}</h2>
    <h2>Дата випуску: ${release_date}</h2>
   <p>${overview}</p>
</li>`
    )
    .join("");
}
