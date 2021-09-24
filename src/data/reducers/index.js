import { combineReducers } from "redux";
import albumReducer from "./album.reducer.js";

const rootReducers = combineReducers({
  albums: albumReducer,
});

export default rootReducers;
