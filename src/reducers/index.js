import { combineReducers } from 'redux'
import filmsReducer from './filmsReducer'
import libraryReducer from './libraryReducer'
import detailReducer from './detailReducer'
import actorsReducer from './actorsReducer'


const rootReducer = combineReducers({
  films: filmsReducer,
  library: libraryReducer,
  details: detailReducer,
  actors: actorsReducer,
  
})

export default rootReducer
