const base_url = 'https://api.themoviedb.org'
const api_key = 'api_key=4d8d8d9ff3c741d79ac52539537d4b8b'

const popularFilms =
  'https://api.themoviedb.org/3/discover/movie?api_key=4d8d8d9ff3c741d79ac52539537d4b8b&language=ru-RU&sort_by=release_date.desc&page=1&vote_average.gte=7&year=2021'

const newFilms =
  'https://api.themoviedb.org/3/movie/top_rated?api_key=4d8d8d9ff3c741d79ac52539537d4b8b&language=ru-RU&page=1&year=2019'

//популярные по году выпуска
export const popularFilmsURL = (genre) => `${popularFilms}&with_genres=${genre}`

// новые по жанру
export const newFilmsURL = (genre) =>
  `${newFilms}&sort_by=vote_average.desc&with_genres=${genre}`

export const detailFilmURL = (id) =>
  `https://api.themoviedb.org/3/movie/${id}?${api_key}&language=ru-RU`

export const screensFilmURL = (id) =>
  `${base_url}/3/movie/${id}/images?${api_key}`

export const popularActorsURL = () =>
  `https://api.themoviedb.org/3/person/popular?${api_key}&language=ru-RU&page=1`
