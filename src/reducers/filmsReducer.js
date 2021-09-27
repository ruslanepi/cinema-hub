const initState = {
  popularFilms: [],
  newFilms: [],
  searchedFilm: null,
}

const filmsReducer = (state = initState, action) => {
  switch (action.type) {
    case 'FETCH_FILMS':
      return {
        ...state,
        popularFilms: action.payload.popularFilms,
        newFilms: action.payload.newFilms,
      }

    case 'SEARCH_FILM':
      return {
        ...state,
        searchedFilm: action.payload.searchedFilm,
      }

    default:
      return { ...state }
  }
}

export default filmsReducer
