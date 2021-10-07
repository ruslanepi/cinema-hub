import axios from 'axios'
import {
  popularFilmsURL,
  newFilmsURL,
  detailFilmURL,
  screensFilmURL,
  popularActorsURL,
  searchFilmByNameURL,
} from '../api'

export const loadFilms = (genre) => async (dispatch) => {
  //get data
  const popularFilmsData = await axios.get(popularFilmsURL(genre))
  const newFilmsData = await axios.get(newFilmsURL())

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

export const getDetails = (id) => async (dispatch) => {
  dispatch({
    type: 'LOADING_DETAIL',
  })

  const detailFilmData = await axios.get(detailFilmURL(id))
  const screensFilmData = await axios.get(screensFilmURL(id))

  dispatch({
    type: 'GET_DETAIL',
    payload: {
      filmDetails: detailFilmData.data,
      filmScreens: screensFilmData.data,
    },
  })
}

export const toggleDetail = () => (dispatch) => {
  dispatch({
    type: 'TOGGLE_DETAIL_VISIBLE',
  })
}

export const loadActors = () => async (dispatch) => {
  const popularActorsData = await axios.get(popularActorsURL())

  dispatch({
    type: 'FETCH_ACTORS',
    payload: {
      popularActors: popularActorsData.data,
    },
  })
}

export const searchFilm = (query) => async (dispatch) => {
  dispatch({
    type: 'IS_SEARCHING',
  })

  const searchedFilmsData = await axios.get(searchFilmByNameURL(query))

  dispatch({
    type: 'SEARCH_FILM',
    payload: {
      searchedFilms: searchedFilmsData.data.results,
    },
  })
}

export const addFilmToWishList = (film) => (dispatch) => {
  dispatch({
    type: 'ADD_TO_WISHLIST',
    payload: film,
  })
}

export const addReviewToFilm = (review) => (dispatch) => {
  dispatch({
    type: 'ADD_TO_WISHLIST',
    payload: review,
  })
}

export const changeStatusWatched = (id) => (dispatch) => {
  dispatch({
    type: 'STATUS_TO_WATCHED',
    payload: id,
  })
}

export const changeStatusWant = (id) => (dispatch) => {
  dispatch({
    type: 'STATUS_TO_WANT',
    payload: id,
  })
}

export const addReview = (review) => (dispatch) => {
  dispatch({
    type: 'ADD_REVIEW',
    payload: review,
  })
}
