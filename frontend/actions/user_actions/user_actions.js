import * as UsersApiUtil from '../../util/users_util';
import { receiveCurrentUser } from '../session_actions';
import { fetchUserHostings, fetchUserTrips } from '../../util/bookings_util'


export const UPDATE_USER_STATUS = "UPDATE_USER_STATUS";
export const RECEIVE_GUESTS = "RECEIVE_GUESTS";
export const RECEIVE_ASSOCIATED_USER = "RECEIVE_ASSOCIATED_USER";
export const RECEIVE_HOSTINGS = 'RECEIVE_HOSTINGS';
export const RECEIVE_TRIPS = 'RECEIVE_TRIPS';
export const RECEIVE_HOSTS = "RECEIVE_HOSTS";
export const RECEIVE_USERS = "RECEIVE_USERS";


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

export const receiveTrips = (trips) => {
  return {
    type: RECEIVE_TRIPS,
    trips: trips.trips
  };
};



export const receiveHosts = (hosts) => {
  return {
    type: RECEIVE_HOSTS,
    hosts: hosts.users
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


export const fetchTrips = (guestId) => {
  return dispatch => {
    return fetchUserTrips(guestId).then(trips => {
      return dispatch(receiveTrips(trips));
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

export const fetchUsers = (param) => {
  return dispatch => {
    return UsersApiUtil.fetchUsers(param).then((users) => {
      return dispatch(receiveUsers(users));
    });
  };
};

export const receiveUsers = (users) => {
  return {
    type: RECEIVE_USERS,
    users: users
  };
};
