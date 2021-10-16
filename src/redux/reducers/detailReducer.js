const initState = {
  filmDetails: {},
  filmScreens: {},
  isLoading: true,
  isShow: false,
}

/*

По умолчанию, при рендере страницы у нас состояние "загрузки"
Далее происходит запрос к api и загрузка остается в true
Когда данные загрузились,  кидаем isLoading в false
Только теперь отобразится filmDetail


*/

const detailReducer = (state = initState, action) => {
  switch (action.type) {
    case 'GET_DETAIL':
      return {
        ...state,
        filmDetails: action.payload.filmDetails,
        filmScreens: action.payload.filmScreens,
        isLoading: false,
      }

    case 'LOADING_DETAIL':
      return {
        ...state,
        isLoading: true,
      }

    case 'TOGGLE_DETAIL_VISIBLE':
      return {
        ...state,
        isShow: !state.isShow,
      }

    default:
      return { ...state }
  }
}

export default detailReducer
