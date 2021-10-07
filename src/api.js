const base_url = 'https://api.themoviedb.org'
const api_key = 'api_key=4d8d8d9ff3c741d79ac52539537d4b8b'
const lang = '&language=ru-RU'
const nowDate = new Date().toISOString().split('T')[0]
console.log(nowDate)
const languageSettings = '&language=ru-RU&region=RU'

const popularFilms =
  'https://api.themoviedb.org/3/discover/movie?api_key=4d8d8d9ff3c741d79ac52539537d4b8b&sort_by=release_date.desc&page=1&vote_average.gte=6&year=2021'

const newFilms =
  'https://api.themoviedb.org/3/discover/movie?api_key=4d8d8d9ff3c741d79ac52539537d4b8b&sort_by=release_date.asc&page=1'

//популярные по году выпуска
export const popularFilmsURL = (genre) =>
  `${popularFilms}&with_genres=${genre}${languageSettings}`

// новые по жанру
// export const newFilmsURL = (genre) => `${newFilms}&with_genres=${genre}`

export const newFilmsURL = () =>
  `${newFilms}&release_date.gte=${nowDate}${languageSettings}`

export const detailFilmURL = (id) =>
  `https://api.themoviedb.org/3/movie/${id}?${api_key}${lang}`

export const screensFilmURL = (id) =>
  `${base_url}/3/movie/${id}/images?${api_key}`

export const popularActorsURL = () =>
  `https://api.themoviedb.org/3/person/popular?${api_key}${lang}&page=1`

export const searchFilmByNameURL = (query) => `
  https://api.themoviedb.org/3/search/movie?${api_key}${lang}&query=${query}&page=1
  `

export const searchFilmByActor = (id) => `
  https://api.themoviedb.org/3/discover/movie?${api_key}${lang}&sort_by=popularity.desc&include_adult=true&include_video=false&page=1&with_people=${id}
  `
