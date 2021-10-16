import axios from 'axios'
import { popularFilmsURL, newFilmsURL } from '../../api'

export const loadPopularFilms = (genre) => async (dispatch) => {
  dispatch({
    type: 'LOADING_POPULAR_FILMS',
  })

  const popularFilmsData = await axios.get(popularFilmsURL(genre))

  dispatch({
    type: 'FETCH_POPULAR_FILMS',
    payload: {
      popularFilms: popularFilmsData.data.results,
    },
  })

  dispatch({
    type: 'LOADED_POPULAR_FILMS',
  })
}

export const loadNewFilms = (genre) => async (dispatch) => {
  dispatch({
    type: 'LOADING_NEW_FILMS',
  })

  const newFilmsData = await axios.get(newFilmsURL(genre))

  dispatch({
    type: 'FETCH_NEW_FILMS',
    payload: {
      newFilms: newFilmsData.data.results,
    },
  })

  dispatch({
    type: 'LOADED_NEW_FILMS',
  })
}
