import axiosMock from '../../client/axiosMock/axiosMock';
import * as actionTypes from './actionTypes';
// import * as go from '../../client';
import Axios from 'axios';
import { CREATE_CASE } from '../../client/api';

export const setCreateCase = data => {
  return {
    type: actionTypes.CREATE_CASE,
    case: data,
  };
};

export const createCase = data => {
  debugger;
  axiosMock;
  return dispatch =>
    Axios.post(CREATE_CASE, data)
      .then(response => {
        debugger;
        console.log(response.data);
        dispatch(setCreateCase(response.data));
        return response;
      })

      .catch(error => {
        debugger;
        console.log(error.response);
      });
};
