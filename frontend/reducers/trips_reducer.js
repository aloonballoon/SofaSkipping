import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_TRIPS } from '../actions/user_actions/user_actions';
import { merge } from 'lodash';

const defaultState = {};

const tripsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
    case RECEIVE_TRIPS:
      return merge({}, state, action.trips);
    default:
      return state;
  }
};

export default tripsReducer;
