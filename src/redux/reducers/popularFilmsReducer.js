const initState = {
  popularFilms: [],
  isLoadingPopular: false,
}

const popularFilmsReducer = (state = initState, action) => {
  switch (action.type) {
    case 'LOADING_POPULAR_FILMS':
      return {
        ...state,
        isLoadingPopular: true,
      }

    case 'FETCH_POPULAR_FILMS':
      return {
        ...state,
        popularFilms: action.payload.popularFilms,
      }

    case 'LOADED_POPULAR_FILMS':
      return {
        ...state,
        isLoadingPopular: false,
      }

    default:
      return { ...state }
  }
}

export default popularFilmsReducer
