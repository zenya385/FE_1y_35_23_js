// https://www.omdbapi.com/

const API_KEY = "75842678";
const API_URL = "https://www.omdbapi.com/";

const divResult = document.querySelector("#results");
const modal = document.getElementById("movieModal");

//  пошук фільмів

async function searchMovies(title) {
  try {
    const response = await fetch(`${API_URL}?apikey=${API_KEY}&s=${title}`);
    const data = await response.json();
    if (data.Response === "False") {
      throw new Error("Фільм не знайдено!");
    }
    if (!response.ok) {
      throw new Error("Все пропало помилка 404");
    }

    divResult.innerHTML = "";
    data.Search.forEach((movie) => {
      const card = document.createElement("div");
      card.classList = "movie-card";
      card.innerHTML = `<img src='${
        movie.Poster !== "N/A"
          ? movie.Poster
          : "https://via.placeholder.com/200x300?text=No+Poster"
      }' alt="${movie.Title}">
<h3>${movie.Title}</h3>
<p>${movie.Year}</p>
`;

      // console.log(movie);

      card.addEventListener("click", () => {
        fetchMovieDetails(movie.imdbID);
      });
      divResult.appendChild(card);
    });
  } catch (error) {
    divResult.innerHTML = `<p style="color:red">${error.message}</p>`;
  }
}

// console.log(
//   searchMovies("Avatar").then((data) => {
//     console.log("data :>> ", data);
//   })
// );

// searchMovies("Avatar");

async function fetchMovieDetails(id) {
  try {
    const res = await fetch(`${API_URL}?apikey=${API_KEY}&i=${id}`);
    const movie = await res.json();

    const modalContent = document.getElementById("modalContent");

    modalContent.innerHTML = `
         <button class="close-btn" id="closeModal">X</button>
          <h2>${movie.Title} (${movie.Year})</h2>
          <img src="${movie.Poster}" alt="опис до фільму ${movie.Title}">
          <p><b>Жанр:</b> ${movie.Genre}</p>
          <p><b>Режисер:</b> ${movie.Director}</p>
          <p><b>Актори:</b> ${movie.Actors}</p>
          <p><b>Сюжет:</b> ${movie.Plot}</p>
      `;
    modal.style.display = "flex";
       document.getElementById("closeModal").addEventListener("click", () => {
          modal.style.display = "none";})
  } catch (error) {
    divResult.innerHTML = `<p style="color:red">${error.message}</p>`;
  }
}

// пошук по кнопці

document.querySelector("#searchBtn").addEventListener("click", () => {
  const title = document.querySelector("#movieInput").value.trim();
  if (title) {
    searchMovies(title);
  }
});
