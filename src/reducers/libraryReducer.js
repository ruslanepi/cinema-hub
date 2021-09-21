const initState = {
  myLibrary: [],
}

const libraryReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_TO_LIBRARY':
      return {
        ...state,
        myLibrary: [...state.myLibrary, action.payload],
      }

    case 'REMOVE_FILM':
      const newLibrary = state.myLibrary.filter(
        (item) => item.id !== action.payload
      )

      return {
        ...state,
        myLibrary: newLibrary,
      }

    default:
      return { ...state }
  }
}

export default libraryReducer
