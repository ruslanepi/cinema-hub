import { combineReducers } from "redux";
import searchReducer from "./searchReducer";
import libraryReducer from "./libraryReducer";
import detailReducer from "./detailReducer";
import actorsReducer from "./actorsReducer";
import elementsReducer from "./elementsReducer";
import popularFilmsReducer from "./popularFilmsReducer";
import newFilmsReducer from "./newFilmsReducer";
import actorDetailReducer from "./actorDetailReducer";

const rootReducer = combineReducers({
  search: searchReducer,
  library: libraryReducer,
  details: detailReducer,
  actors: actorsReducer,
  elements: elementsReducer,
  popular: popularFilmsReducer,
  new: newFilmsReducer,
  actor: actorDetailReducer,
});

export default rootReducer;
