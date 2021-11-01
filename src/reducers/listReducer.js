import { actionTypes } from "./actionTypes.js";

const reducer = (state = null, action) => {
  switch (action.type) {
    case actionTypes.SET_LIST_USERS:
      return { ...state, [action.payload.name]: action.payload.users };
    case actionTypes.DELETE_USER:
      return {
        ...state,
        [action.payload.name]: state[action.payload.name].filter((el) => el.id !== action.payload.id),
      };
    case actionTypes.ADD_USER:
      return {
        ...state,
        [action.payload.name]: [...state[action.payload.name], action.payload.object],
      };
    case actionTypes.EDIT_USER:
      return {
        ...state,
        [action.payload.name]: state[action.payload.name].map((el) => {
          if (el.id === action.payload.object.id) return action.payload.object;
          return el;
        }),
      };
    default:
      return state;
  }
};

export default reducer;
