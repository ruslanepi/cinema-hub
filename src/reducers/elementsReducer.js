const initState = {
  showMode: "cells",
  showList: false,
};

const elementsReducer = (state = initState, action) => {
  switch (action.type) {
    case "SET_SHOWMODE":
      return {
        ...state,
        showMode: action.payload,
      };

    case "SET_SHOWLIST":
      return {
        ...state,
        showList: !state.showList,
      };

    case "SET_SHOWLIST__FALSE":
      return {
        ...state,
        showList: false,
      };

    default:
      return { ...state };
  }
};
export default elementsReducer;
