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
    case actionTypes.ADD_USER:
      console.log(action);
      return {
        ...state,
        users: [...state.users, action.payload.object],
      };
    case actionTypes.EDIT_USER:
      console.log(action);
      return {
        ...state,
        users: state.users.map((el) => {
          if (el.id === action.payload.object.id) return action.payload.object;
          return el;
        }),
      };
    default:
      return state;
  }
};

export default reducer;
