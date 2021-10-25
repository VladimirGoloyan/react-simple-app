import { actionTypes } from "./actionTypes.js";

const reducer = (state = null, action) => {
  switch (action.type) {
    case actionTypes.SET_LIST_USERS:
      console.log(action);
      return { ...state, users: action.payload.users };
    case actionTypes.DELETE_USER:
      console.log(action);
      return {
        ...state,
        users: state.users.filter((el) => el.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export default reducer;
