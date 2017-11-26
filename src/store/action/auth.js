import * as actionTypes from './actionTypes';
import * as go from '../../client'


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

export const authSuccess = (userId, token) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token,
        userId: userId
    }
};

export const authFailed = (error) => {
    return {
        type: actionTypes.AUTH_FAILED,
        error: error
    }
};

export const auth = (data) => {
    debugger;
    return dispatch => {
        dispatch(authStart());
        const authData = {
            username:data.username,
            password:data.password,
            returnSecureToken: true
        };

        let client = go.authSignUpAPI;
        if (data.isSignIn) {
            client = go.authSignInAPI;
        }
        client.post(null, authData)
            .then(response => {
              debugger;
                console.log(response.data);
                dispatch(authSuccess(response.data.localId, response.data.idToken));
                dispatch(checkAuthTimeout(response.data.expiresIn));

            })
            .catch(error => {
              debugger;
                console.log(error.response);
                dispatch(authFailed(error.response.data.error));
            });

    }
};
