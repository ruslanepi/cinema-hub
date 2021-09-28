const initState = {
  popularFilms: [],
  newFilms: [],
  searchedFilms: [],
  isSearching: false,
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
        searchedFilms: action.payload.searchedFilms,
        isSearching: false,
      }

    case 'IS_SEARCHING':
      return {
        ...state,
        isSearching: true,
      }

    default:
      return { ...state }
  }
}

export default filmsReducer
