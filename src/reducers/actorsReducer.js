const initState = {
  popularActors: [],
}

const actorsReducer = (state = initState, action) => {
  switch (action.type) {
    case 'FETCH_ACTORS':
      return {
        ...state,
        popularActors: action.payload.popularActors.results,
      }

    default:
      return { ...state }
  }
}

export default actorsReducer
