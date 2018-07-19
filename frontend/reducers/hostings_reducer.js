import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { merge } from 'lodash';
import { RECEIVE_HOSTINGS } from '../actions/user_actions/user_actions';
import { RECEIVE_CANCELED_HOSTING, RECEIVE_CONFIRMED_HOSTING } from "../actions/booking_actions";

const defaultState = {};

const hostingsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
    case RECEIVE_HOSTINGS:
      return merge({}, state, action.hostings);
    case RECEIVE_CONFIRMED_HOSTING:
      return merge({}, state, action.hosting.hosting);
    case RECEIVE_CANCELED_HOSTING:
      let newState = merge({}, state);
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
};

export default hostingsReducer;
