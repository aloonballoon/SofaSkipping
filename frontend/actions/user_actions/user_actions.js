import * as SessionApiUtil from '../../util/users_util';
import { receiveCurrentUser } from '../session_actions';


export const UPDATE_USER_STATUS = "UPDATE_USER_STATUS";
export const RECEIVE_ASSOCIATED_USER = "RECEIVE_ASSOCIATED_USER";


export const receiveAssociatedUser = (user) => {
  return {
    type: RECEIVE_ASSOCIATED_USER,
    user,
  };
};

export const updateStatus = (user) => {
  return dispatch => {
    debugger
    return SessionApiUtil.updateStatus(user).then((updated_user) => {
      return dispatch(receiveCurrentUser(updated_user));
    });
  };
};

export const fetchUser = (id) => {
  return dispatch => {
    return SessionApiUtil.fetchUser(id).then((new_user) => {
      return dispatch(receiveAssociatedUser(new_user));
    });
  };
};
