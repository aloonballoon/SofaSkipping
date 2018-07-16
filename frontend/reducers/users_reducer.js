import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { merge } from 'lodash';
import { RECEIVE_ASSOCIATED_USER, RECEIVE_GUESTS } from '../actions/user_actions/user_actions';

const defaultState = {};
const usersReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
    case RECEIVE_ASSOCIATED_USER:
      return merge({}, state, {[action.user.id]: action.user});
    case RECEIVE_GUESTS:
      return merge({}, state, action.users)
    default:
      return state;
  }
};

export default usersReducer;
