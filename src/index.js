console.log("Hello from src/index.js!");

const list = document.querySelector('#movies');

const fetchMovies = (input) => {
  fetch(`http://www.omdbapi.com/?s=${input}&apikey=adf1f2d7`)
    .then(response => response.json())
    .then((data) => {
      list.innerText = '';
      data.Search.forEach((result) => {
        list.insertAdjacentHTML('beforeend', `<li class="list-inline-item"><img src="${result.Poster}" alt=""><p>${result.Title}</p></li>`);
      });
    });
};
const input = document.querySelector('#keyword');

input.addEventListener('keyup', (event) => {
  fetchMovies(event.currentTarget.value);
});


// const searchAlgoliaPlaces = (event) => {
//   fetch("https://places-dsn.algolia.net/1/places/query", {
//     method: "POST",
//     body: JSON.stringify({ query: event.currentTarget.value })
//   })
//     .then(response => response.json())
//     .then((data) => {
//       console.log(data.hits); // Look at local_names.default
//     });
// };

// input.addEventListener("keyup", searchAlgoliaPlaces);
