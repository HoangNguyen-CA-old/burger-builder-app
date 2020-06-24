import axios from 'axios';

import * as actionTypes from './actionTypes';

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const authSuccess = (token, userId) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    idToken: token,
    userId: userId,
  };
};

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error,
  };
};

export const auth = (email, password, isSignup) => (dispatch) => {
  dispatch(authStart());
  const authData = {
    email,
    password,
    returnSecureToken: true,
  };
  let url =
    'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB98kqaiBrV7sLUZ7QoF4RHmbi6wbmVKJ8';
  if (!isSignup) {
    url =
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB98kqaiBrV7sLUZ7QoF4RHmbi6wbmVKJ8';
  }
  axios
    .post(url, authData)
    .then((res) => {
      console.log(res);
      dispatch(authSuccess(res.data.idToken, res.data.localId));
    })
    .catch((err) => {
      console.log(err);
      dispatch(authFail(err.response.data.error));
    });
};
