import { actionTypes } from "./actionTypes.js";

const reducer = (state = null, action) => {
    switch (action.type) {
      case actionTypes.SET_LIST_USERS:
        console.log(action);
        return {...state,users:action.payload.users}; 
      default:
        return state;
    }
  };

  export default reducer;