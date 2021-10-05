const base_url = "https://api.themoviedb.org";
const api_key = "api_key=4d8d8d9ff3c741d79ac52539537d4b8b";
const lang = "language=ru-RU";

const popularFilms =
  "https://api.themoviedb.org/3/discover/movie?api_key=4d8d8d9ff3c741d79ac52539537d4b8b&language=ru-RU&sort_by=release_date.desc&page=1&vote_average.gte=7&year=2021&with_original_language=ru||fr||en";

const newFilms =
  "https://api.themoviedb.org/3/discover/movie?api_key=4d8d8d9ff3c741d79ac52539537d4b8b&language=ru-RU&sort_by=release_date.asc&page=1&primary_release_date.gte=2021-10-05&with_original_language=ru||fr||en";

//популярные по году выпуска
export const popularFilmsURL = (genre) =>
  `${popularFilms}&with_genres=${genre}`;

// новые по жанру
export const newFilmsURL = (genre) => `${newFilms}&with_genres=${genre}`;

export const detailFilmURL = (id) =>
  `https://api.themoviedb.org/3/movie/${id}?${api_key}&language=ru-RU`;

export const screensFilmURL = (id) =>
  `${base_url}/3/movie/${id}/images?${api_key}`;

export const popularActorsURL = () =>
  `https://api.themoviedb.org/3/person/popular?${api_key}&language=ru-RU&page=1`;

export const searchFilmByNameURL = (query) => `
  https://api.themoviedb.org/3/search/movie?${api_key}&language=ru-RU&query=${query}&page=1
  `;

export const searchFilmByActor = (id) => `
  https://api.themoviedb.org/3/discover/movie?${api_key}&${lang}&sort_by=popularity.desc&include_adult=true&include_video=false&page=1&with_people=${id}
  `;
