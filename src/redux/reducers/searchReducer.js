const initState = {
  searchedFilms: [],
  isSearching: true,
}

const filmsReducer = (state = initState, action) => {
  switch (action.type) {
    case 'IS_SEARCHING':
      return {
        ...state,
        isSearching: true,
      }

    case 'SEARCHED_FILM':
      return {
        ...state,
        searchedFilms: action.payload.searchedFilms,
        isSearching: false,
      }

    default:
      return { ...state }
  }
}

export default filmsReducer
