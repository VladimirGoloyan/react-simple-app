import { actionTypes } from "../reducers/actionTypes";

export const setUsers = (users,name) => (dispatch) => {
  dispatch({
    type: actionTypes.SET_LIST_USERS,
    payload: {
      name,
      users
    },
  });
};

export const deleteUser = (id,name) => (dispatch) => {
  dispatch({
    type: actionTypes.DELETE_USER,
    payload: {
      name,
      id,
    },
  });
};

export const addUser = (object,name) => (dispatch) => {
  dispatch({
    type: actionTypes.ADD_USER,
    payload: {
      name,
      object,
    },
  });
};

export const editUser = (object,name) => (dispatch) => {
  dispatch({
    type: actionTypes.EDIT_USER,
    payload: {
      name,
      object,
    },
  });
};
