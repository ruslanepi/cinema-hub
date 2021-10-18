import axios from "axios";
import { popularFilmsURL, newFilmsURL, getFilmCreditsURL } from "../../api";

export const loadPopularFilms = (genre) => async (dispatch) => {
  dispatch({
    type: "LOADING_POPULAR_FILMS",
  });

  const popularFilmsData = await axios.get(popularFilmsURL(genre));

  const getCast = async (id) => {
    const response = axios.get(getFilmCreditsURL(id)).then((response) => {
      if (response.data.id === id) {
        return response.data.cast;
      }
    });
    return response;
  };

  Promise.all(
    popularFilmsData.data.results.map(async (movie) => {
      const cast = await getCast(movie.id);
      return { ...movie, cast };
    })
  )
    .then((response) =>
      dispatch({
        type: "FETCH_POPULAR_FILMS",
        payload: {
          popularFilms: response,
        },
      })
    )
    .then(
      dispatch({
        type: "LOADED_POPULAR_FILMS",
      })
    );
};

export const loadNewFilms = (genre) => async (dispatch) => {
  dispatch({
    type: "LOADING_NEW_FILMS",
  });

  const newFilmsData = await axios.get(newFilmsURL(genre));

  const getCast = async (id) => {
    const response = axios.get(getFilmCreditsURL(id)).then((response) => {
      if (response.data.id === id) {
        return response.data.cast;
      }
    });
    return response;
  };

  Promise.all(
    newFilmsData.data.results.map(async (movie) => {
      const cast = await getCast(movie.id);
      return { ...movie, cast };
    })
  )
    .then((response) =>
      dispatch({
        type: "FETCH_NEW_FILMS",
        payload: {
          newFilms: response,
        },
      })
    )
    .then(
      dispatch({
        type: "LOADED_NEW_FILMS",
      })
    );
};
