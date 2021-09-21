import axios from 'axios'
import { popularFilmsURL, newFilmsURL } from '../api'

export const loadFilms = (genre) => async (dispatch) => {
  //get data
  const popularFilmsData = await axios.get(popularFilmsURL(genre))
  const newFilmsData = await axios.get(newFilmsURL(genre))

  dispatch({
    type: 'FETCH_FILMS',
    payload: {
      popularFilms: popularFilmsData.data.results,
      newFilms: newFilmsData.data.results,
    },
  })
}

export const addFilm = (film) => (dispatch) => {
  dispatch({
    type: 'ADD_TO_LIBRARY',
    payload: film,
  })
}

export const removeFilm = (id) => (dispatch) => {
  dispatch({
    type: 'REMOVE_FILM',
    payload: id,
  })
}
