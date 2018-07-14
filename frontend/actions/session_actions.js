import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

export const receiveCurrentUser = (user) => {
  return {
    type: RECEIVE_CURRENT_USER,
    user,
  };
};

const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER,
  };
};

const receiveErrors = (errors) => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  };
};

export const logOut = () => {
  return dispatch => {
    return SessionApiUtil.logOut().then(() => {
      return dispatch(logoutCurrentUser());
    }, error => (
      dispatch(receiveErrors(error.responseJSON))
    ));
  };
};

export const logIn = (user) => {
  return dispatch => {
    return SessionApiUtil.logIn(user).then(user => {
      return dispatch(receiveCurrentUser(user));
    }, error => (
      dispatch(receiveErrors(error.responseJSON))
    ));
  };
};

export const signUp = (user) => {
  return dispatch => {
    return SessionApiUtil.signUp(user).then(user =>{
      return dispatch(receiveCurrentUser(user));
    }, error => (
      dispatch(receiveErrors(error.responseJSON))
    ));
  };
};
