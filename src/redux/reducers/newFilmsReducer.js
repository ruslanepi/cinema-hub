const initState = {
  newFilms: [],
  isLoadingNew: false,
}

const newFilmsReducer = (state = initState, action) => {
  switch (action.type) {
    case 'LOADING_NEW_FILMS':
      return {
        ...state,
        isLoadingNew: true,
      }
    case 'FETCH_NEW_FILMS':
      return {
        ...state,
        newFilms: action.payload.newFilms,
      }

    case 'LOADED_NEW_FILMS':
      return {
        ...state,
        isLoadingNew: false,
      }

    default:
      return { ...state }
  }
}

export default newFilmsReducer
