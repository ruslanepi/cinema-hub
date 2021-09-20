import { combineReducers } from 'redux'
import filmsReducer from './filmsReducer'

const rootReducer = combineReducers({
  films: filmsReducer,
})

export default rootReducer
