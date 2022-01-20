const list = document.querySelector('#movies');

const insertMovies = (data) => {
  list.innerText = '';
  data.Search.forEach((result) => {
    list.insertAdjacentHTML('beforeend', `
      <li class="list-inline-item">
        <img src="${result.Poster}" alt="" width="100">
      </li>
    `);
  });
};

const fetchMovies = (input) => {
  fetch(`http://www.omdbapi.com/?s=${input}&apikey=adf1f2d7`)
    .then(response => response.json())
    .then(insertMovies);
};

export { fetchMovies };
