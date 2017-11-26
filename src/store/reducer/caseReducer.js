import * as actionTypes from '../action/actionTypes';
import { updateObject } from '../util/util.js';

const initialState = {
  token: null,
  userId: null,
  error: null,
  loading: false,
};

const createCase = (oldState, action) => {
  return updateObject(oldState, {
    ...action,
  });
};

const authReducer = (oldState = initialState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_CASE:
      return createCase(oldState);

    default:
      return oldState;
  }
};

export default authReducer;
