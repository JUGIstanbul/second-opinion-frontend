import axios from 'axios';
import * as authAPI from './api';

export const baseAPI = axios.create({
  baseURL: 'https://react-my-burger-6a216.firebaseio.com/',
});

export const authSignUpAPI = axios.create({
  baseURL: authAPI.SIGN_UP,
});

export const authSignInAPI = axios.create({
  baseURL: authAPI.SIGN_IN,
});

export const authSignInMockAPI = axios.create({
  baseURL: authAPI.AXIOS_MOCK_SIGN_UP,
});
