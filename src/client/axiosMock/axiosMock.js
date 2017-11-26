import Axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {signIn} from "./data/signIn";
import {signUp} from "./data/signUp";
import {updateAccountInfo} from "./data/updateAccountInfo";
import {viewAccountInfo} from "./data/viewAccountInfo";
import {
    AXIOS_MOCK_SIGN_IN, AXIOS_MOCK_SIGN_UP, AXIOS_MOCK_UPDATE_ACCOUNT_INFO,
    AXIOS_MOCK_VIEW_ACCOUNT_INFO
} from "../api";

// This sets the mock adapter on the default instance
var mock = new MockAdapter(Axios);

mock.onPost(AXIOS_MOCK_SIGN_UP).reply(201, signUp);
mock.onGet(AXIOS_MOCK_VIEW_ACCOUNT_INFO).reply(200, viewAccountInfo);
mock.onPut(AXIOS_MOCK_UPDATE_ACCOUNT_INFO).reply(204, updateAccountInfo);
mock.onPost(AXIOS_MOCK_SIGN_IN).reply(201, signIn);

/*Axios.post(AXIOS_MOCK_SIGN_UP)
    .then(function(response) {
        console.log('AXIOS_MOCK_SIGN_UP', response.data);
    });

Axios.get(AXIOS_MOCK_VIEW_ACCOUNT_INFO)
    .then(function(response) {
        console.log('AXIOS_MOCK_VIEW_ACCOUNT_INFO', response.data);
    });

Axios.put(AXIOS_MOCK_UPDATE_ACCOUNT_INFO)
    .then(function(response) {
        console.log('AXIOS_MOCK_UPDATE_ACCOUNT_INFO', response.data);
    });

Axios.post(AXIOS_MOCK_SIGN_IN)
    .then(function(response) {
        console.log('AXIOS_MOCK_SIGN_IN', response.data);
    });*/

export default {}