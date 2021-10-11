const initState = {
  showMode: false,
}

const elementsReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SET_SHOWMODE_LIST':
      return {
        ...state,
        showMode: !state.showMode,
      }

    default:
      return { ...state }
  }
}
export default elementsReducer
