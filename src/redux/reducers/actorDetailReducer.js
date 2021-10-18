const initState = {
  actorDetail: {},
  isLoading: true,
};

const actorDetailReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOADING_ACTOR_DATA":
      return {
        ...state,
        isLoading: true,
      };

    case "FETCH_ACTOR_DATA":
      return {
        ...state,
        actorDetail: action.payload.actorDetail,
      };

    case "LOADED_ACTOR_DATA":
      return {
        ...state,
        isLoading: false,
      };

    default:
      return { ...state };
  }
};

export default actorDetailReducer;
