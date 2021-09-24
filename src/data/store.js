import { createStore } from "redux";
import rootReducers from "./reducers";

const loadFromLocalStorage = () => {
  try {
    const serialisedState = localStorage.getItem("musicList");
    if (serialisedState === null) return;
    return JSON.parse(serialisedState);
  } catch (e) {
    console.warn(e);
  }
};

const saveToLocalStorage = (state) => {
  try {
    const serialisedState = JSON.stringify(state);
    localStorage.setItem("musicList", serialisedState);
  } catch (e) {
    console.warn(e);
  }
};

const store = createStore(
  rootReducers,
  loadFromLocalStorage(),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
