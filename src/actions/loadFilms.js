import axios from "axios";
import { popularFilmsURL, newFilmsURL, getFilmCreditsURL } from "../api";

export const loadFilms2 = (genre) => async (dispatch) => {
  //get data

  const popularFilmsData = await axios
    .get(popularFilmsURL(genre))
    .then((response) => {
      const res = response.data.results;

      response.data.results.map((item) =>
        axios.get(getFilmCreditsURL(item.id)).then((resp) => {
          res.map((item) => {
            if (item.id === resp.data.id) {
              item.cast = resp.data.cast;
            }
          });
          console.log(res, resp.data);
        })
      );
    });

  console.log(popularFilmsData);

  // popularFilmsData = await popularFilmsData.data.results.map((item) => {
  //   return {
  //     ...item,
  //     cast: axios
  //       .get(getFilmCreditsURL(item.id))
  //       .then((response) => response.data.cast),
  //   };
  // });

  // console.log(popularFilmsData);

  // dispatch({
  //   type: "FETCH_FILMS",
  //   payload: {
  //     popularFilms: popularFilmsData,
  //   },
  // });
};
