import { merge } from 'lodash';
import { RECEIVE_USERS } from '../actions/user_actions/user_actions';

const defaultState = {searchTargets: []};
const searchReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
      case RECEIVE_USERS:
      return {searchTargets: action.users.search};
    default:
      return state;
  }
};

export default searchReducer;
