import { combineReducers } from 'redux'
import filmsReducer from './filmsReducer'
import libraryReducer from './libraryReducer'

const rootReducer = combineReducers({
  films: filmsReducer,
  library: libraryReducer,
})

export default rootReducer
