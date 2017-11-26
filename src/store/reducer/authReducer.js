import * as actionTypes from '../action/actionTypes';
import { updateObject } from '../util/util.js';

const initialState = {
  token: null,
  userId: null,
  error: null,
  loading: false,
};

const authStart = oldState => {
  return updateObject(oldState, { error: null, loading: true });
};

const authSuccess = (oldState, action) => {
  return updateObject(oldState, {
    error: null,
    loading: false,
    ...action,
  });
};

const authFail = (oldState, action) => {
  return updateObject(oldState, {
    error: action.error,
    loading: false,
  });
};

const authLogout = (oldState, action) => {
  return updateObject(oldState, {
    token: null,
    userId: null,
  });
};

const authReducer = (oldState = initialState, action) => {
  console.log(oldState, action.type);
  switch (action.type) {
    case actionTypes.AUTH_START:
      return authStart(oldState);
    case actionTypes.AUTH_SUCCESS:
      return authSuccess(oldState, action);
    case actionTypes.AUTH_FAILED:
      return authFail(oldState, action);
    case actionTypes.AUTH_LOGOUT:
      return authLogout(oldState, action);
    default:
      return oldState;
  }
};

export default authReducer;
