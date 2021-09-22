import { combineReducers } from 'redux'
import filmsReducer from './filmsReducer'
import libraryReducer from './libraryReducer'
import detailReducer from './detailReducer'

const rootReducer = combineReducers({
  films: filmsReducer,
  library: libraryReducer,
  details: detailReducer,
})

export default rootReducer
