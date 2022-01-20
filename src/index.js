import { Application } from "stimulus";
import { definitionsFromContext } from "stimulus/webpack-helpers";
import { fetchMovies } from './movies';
import { initSortable } from './plugins/init_sortable';

const application = Application.start();
const context = require.context("./controllers", true, /\.js$/);
application.load(definitionsFromContext(context));

initSortable();

const input = document.querySelector('#keyword');

input.addEventListener('keyup', (event) => {
  fetchMovies(event.currentTarget.value);
});

fetchMovies('harry potter');

const form = document.querySelector('#search-movies');

form.addEventListener('submit', (event) => {
  fetchMovies(input.value);
});
