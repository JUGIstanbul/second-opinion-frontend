import axiosMock from '../../client/axiosMock/axiosMock';
import * as actionTypes from './actionTypes';
import * as go from '../../client'
import Axios from 'axios';
import { AXIOS_MOCK_SIGN_IN,AXIOS_MOCK_SIGN_UP} from "../../client/api";



export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000);
    };
};

export const logout = () => {
    return {
        type: actionTypes.AUTH_LOGOUT
    };
};

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
};

export const authSuccess = (userData) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
      userData
    }
};

export const authFailed = (error) => {
    return {
        type: actionTypes.AUTH_FAILED,
        error: error
    }
};

export const auth = (data) => {
    axiosMock;
    return dispatch => {
        dispatch(authStart());
        const authData = {
            username:data.username,
            password:data.password,
            returnSecureToken: true
        };
/*
        let client = go.authSignUpAPI;
        if (data.isSignIn) {
            // client = go.authSignInAPI;
            client = go.authSignInMockAPI;
        }

        */
let mockUrl;
if(data.isSignIn){
  mockUrl= AXIOS_MOCK_SIGN_IN
}else {
  mockUrl= AXIOS_MOCK_SIGN_UP
}

      debugger;
        Axios.post(mockUrl, authData)
            .then(response => {
              debugger;
                console.log(response.data);
                dispatch(authSuccess(response.data));

            return response;
            })
             .then(response =>{
              console.log(response);
               dispatch(checkAuthTimeout(response.data.expiresIn));
             })
            .catch(error => {
              debugger;
                console.log(error.response);
                dispatch(authFailed(error.response.data.error));
            });

    }
};
