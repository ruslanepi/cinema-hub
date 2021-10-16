import { combineReducers } from 'redux'
import searchReducer from './searchReducer'
import libraryReducer from './libraryReducer'
import detailReducer from './detailReducer'
import actorsReducer from './actorsReducer'
import elementsReducer from './elementsReducer'
import popularFilmsReducer from './popularFilmsReducer'
import newFilmsReducer from './newFilmsReducer'

const rootReducer = combineReducers({
  search: searchReducer,
  library: libraryReducer,
  details: detailReducer,
  actors: actorsReducer,
  elements: elementsReducer,
  popular: popularFilmsReducer,
  new: newFilmsReducer,
})

export default rootReducer
