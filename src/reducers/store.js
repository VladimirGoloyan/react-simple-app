import { createStore,applyMiddleware } from "redux";
import listReducer from './listReducer'
import reduxThunk from "redux-thunk";

const initialState = {
    users: [],
  };

  export const store = createStore(
    listReducer,
    initialState,
    applyMiddleware(reduxThunk)
  );