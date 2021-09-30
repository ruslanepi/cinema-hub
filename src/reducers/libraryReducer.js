const initState = {
  myLibrary: [],
};

const libraryReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_TO_LIBRARY":
      const newData = action.payload;
      newData.status = "empty";
      return {
        ...state,
        myLibrary: [...state.myLibrary, newData],
      };

    case "REMOVE_FILM":
      const newLibrary = state.myLibrary.filter(
        (item) => item.id !== action.payload
      );

      return {
        ...state,
        myLibrary: newLibrary,
      };

    case "STATUS_TO_WATCHED":
      return {
        ...state,
        myLibrary: state.myLibrary.map((film) => {
          if (film.id === action.payload) {
            const newFilm = {...film, status: 'watched'}
            return {...film, status:'watched'}
          }

          return film;
        }),
      };


      case "STATUS_TO_WANT":
      return {
        ...state,
        myLibrary: state.myLibrary.map((film) => {
          if (film.id === action.payload) {
            const newFilm = {...film, status: 'want'}
            return {...film, status:'want'}
          }

          return film;
        }),
      };
      

    default:
      return { ...state };
  }
};

export default libraryReducer;
