import { actionTypes } from "../reducers/actionTypes";


export const setUsers = (users) => (dispatch) => {
        dispatch({
          type: actionTypes.SET_LIST_USERS,
          payload: {
            users: users,
          }
        });
  };