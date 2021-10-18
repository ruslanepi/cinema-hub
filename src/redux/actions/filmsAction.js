import axios from "axios";
import {
  detailFilmURL,
  screensFilmURL,
  popularActorsURL,
  searchFilmByNameURL,
  getActorURL,
} from "../../api";

// export const setFilmCredits = (id) => async (dispatch) => {
//   const filmCreditsData = await axios.get(getFilmCreditsURL(id));

//   dispatch({
//     type: "SET_FILM_CAST",
//     payload: filmCreditsData.data,
//   });
// };

export const addFilm = (film) => (dispatch) => {
  dispatch({
    type: "ADD_TO_LIBRARY",
    payload: film,
  });
};

export const removeFilm = (id) => (dispatch) => {
  dispatch({
    type: "REMOVE_FILM",
    payload: id,
  });
};

export const getDetails = (id) => async (dispatch) => {
  dispatch({
    type: "LOADING_DETAIL",
  });

  const detailFilmData = await axios.get(detailFilmURL(id));
  const screensFilmData = await axios.get(screensFilmURL(id));

  dispatch({
    type: "GET_DETAIL",
    payload: {
      filmDetails: detailFilmData.data,
      filmScreens: screensFilmData.data,
    },
  });
};

export const toggleDetail = () => (dispatch) => {
  dispatch({
    type: "TOGGLE_DETAIL_VISIBLE",
  });
};

//actors
export const loadActor = (id) => async (dispatch) => {
  dispatch({
    type: "LOADING_ACTOR_DATA",
  });

  const actorData = await axios.get(getActorURL(id));

  dispatch({
    type: "FETCH_ACTOR_DATA",
    payload: {
      actorDetail: actorData.data,
    },
  });

  dispatch({
    type: "LOADED_ACTOR_DATA",
  });
};

export const loadActors = () => async (dispatch) => {
  const popularActorsData = await axios.get(popularActorsURL());

  dispatch({
    type: "FETCH_ACTORS",
    payload: {
      popularActors: popularActorsData.data,
    },
  });
};

//search film
export const searchFilm = (query) => async (dispatch) => {
  dispatch({
    type: "IS_SEARCHING",
  });

  const searchedFilmsData = await axios.get(searchFilmByNameURL(query));

  dispatch({
    type: "SEARCHED_FILM",
    payload: {
      searchedFilms: searchedFilmsData.data.results,
    },
  });
};

export const addFilmToWishList = (film) => (dispatch) => {
  dispatch({
    type: "ADD_TO_WISHLIST",
    payload: film,
  });
};

export const addReviewToFilm = (review) => (dispatch) => {
  dispatch({
    type: "ADD_TO_WISHLIST",
    payload: review,
  });
};

export const changeStatusWatched = (id) => (dispatch) => {
  dispatch({
    type: "STATUS_TO_WATCHED",
    payload: id,
  });
};

export const changeStatusWant = (id) => (dispatch) => {
  dispatch({
    type: "STATUS_TO_WANT",
    payload: id,
  });
};

export const addReview = (review) => (dispatch) => {
  dispatch({
    type: "ADD_REVIEW",
    payload: review,
  });
};

export const setShowMode = (type) => (dispatch) => {
  dispatch({
    type: "SET_SHOWMODE",
    payload: type,
  });
};

export const setShowList = () => (dispatch) => {
  dispatch({
    type: "SET_SHOWLIST",
  });
};
