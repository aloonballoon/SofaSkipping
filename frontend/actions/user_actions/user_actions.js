import * as UsersApiUtil from '../../util/users_util';
import { receiveCurrentUser } from '../session_actions';
import { fetchUserHostings } from '../../util/bookings_util'


export const UPDATE_USER_STATUS = "UPDATE_USER_STATUS";
export const RECEIVE_GUESTS = "RECEIVE_GUESTS";
export const RECEIVE_ASSOCIATED_USER = "RECEIVE_ASSOCIATED_USER";
export const RECEIVE_HOSTINGS = 'RECEIVE_BOOKINGS';
export const RECEIVE_HOSTS = "RECEIVE_HOSTS";


export const receiveAssociatedUser = (user) => {
  return {
    type: RECEIVE_ASSOCIATED_USER,
    user,
  };
};

export const receiveHostings = (hostings) => {
  return {
    type: RECEIVE_HOSTINGS,
    hostings: hostings.hostings
  };
};

export const receiveHosts = (hosts) => {
  return {
    type: RECEIVE_HOSTS,
    hostings: hosts.users
  };
};

export const receiveGuests = (guests) => {
  return {
    type: RECEIVE_GUESTS,
    users: guests.users
  };
};

export const fetchHosts = (id) => {
  return dispatch => {
    return UsersApiUtil.fetchHosts(id).then(hosts => {
      dispatch(receiveHosts(hosts));
    });
  };
};

export const fetchHostings = (hostId) => {
  return dispatch => {
    return fetchUserHostings(hostId).then(hostings => {
      return dispatch(receiveHostings(hostings));
    });
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
