import Axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { signIn } from './Response/signIn';
import { signUp } from './Response/signUp';
import { updateAccountInfo } from './Response/updateAccountInfo';
import { viewAccountInfo } from './Response/viewAccountInfo';
import {
  AXIOS_MOCK_SIGN_IN,
  AXIOS_MOCK_SIGN_UP,
  AXIOS_MOCK_UPDATE_ACCOUNT_INFO,
  AXIOS_MOCK_VIEW_ACCOUNT_INFO,
} from '../api';

// This sets the mock adapter on the default instance
var mock = new MockAdapter(Axios);

mock.onPost(AXIOS_MOCK_SIGN_UP).reply(201, signUp);
mock.onGet(AXIOS_MOCK_VIEW_ACCOUNT_INFO).reply(200, viewAccountInfo);
mock.onPut(AXIOS_MOCK_UPDATE_ACCOUNT_INFO).reply(204, updateAccountInfo);
mock.onPost(AXIOS_MOCK_SIGN_IN).reply(201, signIn);

/*Axios.post(AXIOS_MOCK_SIGN_UP)
    .then(function(response) {
        console.log('AXIOS_MOCK_SIGN_UP', response.Response);
    });

Axios.get(AXIOS_MOCK_VIEW_ACCOUNT_INFO)
    .then(function(response) {
        console.log('AXIOS_MOCK_VIEW_ACCOUNT_INFO', response.Response);
    });

Axios.put(AXIOS_MOCK_UPDATE_ACCOUNT_INFO)
    .then(function(response) {
        console.log('AXIOS_MOCK_UPDATE_ACCOUNT_INFO', response.Response);
    });

Axios.post(AXIOS_MOCK_SIGN_IN)
    .then(function(response) {
        console.log('AXIOS_MOCK_SIGN_IN', response.Response);
    });*/

export default {};
