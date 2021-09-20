const initState = {
  popularFilms: [],
  newFilms: [],
}

const filmsReducer = (state = initState, action) => {
  switch (action.type) {
    case 'FETCH_FILMS':
      return {
        ...state,
        popularFilms: action.payload.popularFilms,
        newFilms: action.payload.newFilms,
      }
    default:
      return { ...state }
  }
}

export default filmsReducer
