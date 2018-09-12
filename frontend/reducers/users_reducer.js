import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { merge } from 'lodash';
import { RECEIVE_ASSOCIATED_USER, RECEIVE_GUESTS, RECEIVE_HOSTS, RECEIVE_USERS } from '../actions/user_actions/user_actions';
import { RECEIVE_TRIP } from '../actions/booking_actions';
import { RECEIVE_LOCATION } from '../actions/location_actions';
import { RECEIVE_REVIEWS } from '../actions/review_actions';

const defaultState = {};
const usersReducer = (state = defaultState, action) => {
  let newState;
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
    case RECEIVE_ASSOCIATED_USER:
      return merge({}, state, {[action.user.id]: action.user});
    case RECEIVE_GUESTS:
      return merge({}, state, action.users);
    case RECEIVE_HOSTS:
      return merge({}, state, action.hosts);
    case RECEIVE_USERS:
      return merge({}, state, action.users);
    case RECEIVE_LOCATION:
      return merge({}, state, action.locations.hosts, action.locations.guests);
    case RECEIVE_REVIEWS:
      let user = action.reviews.user || {};
      return merge({}, state, {[user.id]: user});
    case RECEIVE_TRIP:
      newState = merge({}, state);
      let currentUser = newState[Object.values(action.trip)[0].guest_id];
      currentUser.trip_ids.push(Object.values(action.trip)[0].id);
      return merge({}, newState, currentUser);
    default:
      return state;
  }
};

export default usersReducer;
