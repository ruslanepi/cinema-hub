const initState = {
  wishList: [],
};

const wishlistReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_TO_WISHLIST":
      return {
        ...state,
        wishList: [...state.wishList, action.payload],
      };

    case "REMOVE_FILM_FROM_WISHLIST":
      const newWishList = state.wishList.filter(
        (item) => item.id !== action.payload
      );

      return {
        ...state,
        wishList: newWishList,
      };

    default:
      return { ...state };
  }
};

export default wishlistReducer;
