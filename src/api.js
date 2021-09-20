const popularFilms2 =
  'https://api.themoviedb.org/3/movie/popular?api_key=4d8d8d9ff3c741d79ac52539537d4b8b&language=ru-RU&page=1'

const popularFilms =
  'https://api.themoviedb.org/3/discover/movie?api_key=4d8d8d9ff3c741d79ac52539537d4b8b&language=ru-RU&sort_by=primary_release_date.desc&include_adult=false&include_video=false&page=1&vote_average.gte=6&with_watch_monetization_types=flatrate'

const newFilms =
  'https://api.themoviedb.org/3/movie/top_rated?api_key=4d8d8d9ff3c741d79ac52539537d4b8b&language=ru-RU&page=1&year=2021'

//популярные по году выпуска
export const popularFilmsURL = (genre) => `${popularFilms}&with_genres=${genre}`

// новые по жанру
export const newFilmsURL = (genre) =>
  `${newFilms}&sort_by=vote_average.desc&with_genres=${genre}`
