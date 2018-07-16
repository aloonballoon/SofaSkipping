import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { merge } from 'lodash';
import { RECEIVE_HOSTINGS } from '../actions/user_actions/user_actions';

const defaultState = {};

const hostingsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
    case RECEIVE_HOSTINGS:
      return merge({}, state, action.hostings);
    default:
      return state;
  }
};

export default hostingsReducer;
