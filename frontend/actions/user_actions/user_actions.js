import * as UsersApiUtil from '../../util/users_util';
import { receiveCurrentUser } from '../session_actions';


export const UPDATE_USER_STATUS = "UPDATE_USER_STATUS";
export const RECEIVE_GUESTS = "RECEIVE_GUESTS";
export const RECEIVE_ASSOCIATED_USER = "RECEIVE_ASSOCIATED_USER";


export const receiveAssociatedUser = (user) => {
  return {
    type: RECEIVE_ASSOCIATED_USER,
    user,
  };
};

export const receiveGuests = (guests) => {
  debugger
  return {
    type: RECEIVE_GUESTS,
    users: guests.users
  };
};

export const fetchGuests = (id) => {
  return dispatch => {
    return UsersApiUtil.fetchGuests(id).then((guests) => {
      return dispatch(receiveGuests(guests));
    });
  };
};

export const updateStatus = (user) => {
  return dispatch => {
    return UsersApiUtil.updateStatus(user).then((updated_user) => {
      return dispatch(receiveCurrentUser(updated_user));
    });
  };
};

export const fetchUser = (id) => {
  return dispatch => {
    return UsersApiUtil.fetchUser(id).then((new_user) => {
      return dispatch(receiveAssociatedUser(new_user));
    });
  };
};
