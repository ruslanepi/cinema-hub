import { combineReducers } from 'redux'
import filmsReducer from './filmsReducer'
import libraryReducer from './libraryReducer'
import detailReducer from './detailReducer'
import actorsReducer from './actorsReducer'
import wishlistReducer from './wishlistReducer'

const rootReducer = combineReducers({
  films: filmsReducer,
  library: libraryReducer,
  details: detailReducer,
  actors: actorsReducer,
  wishlist: wishlistReducer,
})

export default rootReducer
