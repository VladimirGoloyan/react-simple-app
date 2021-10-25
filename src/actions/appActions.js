import { actionTypes } from "../reducers/actionTypes";

export const setUsers = (users) => (dispatch) => {
  dispatch({
    type: actionTypes.SET_LIST_USERS,
    payload: {
      users: users,
    },
  });
};

export const deleteUser = (id) => (dispatch) => {
  dispatch({
    type: actionTypes.DELETE_USER,
    payload: {
      id,
    },
  });
};

export const addUser = (object) => (dispatch) => {
  dispatch({
    type: actionTypes.ADD_USER,
    payload: {
      object,
    },
  });
};

export const editUser = (object) => (dispatch) => {
  dispatch({
    type: actionTypes.EDIT_USER,
    payload: {
      object,
    },
  });
};
