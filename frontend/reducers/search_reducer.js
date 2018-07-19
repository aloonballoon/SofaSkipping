import { merge } from 'lodash';
import { RECEIVE_USERS } from '../actions/user_actions/user_actions';
import { RECEIVE_LOCATION } from '../actions/location_actions';

const defaultState = {searchTargets: []};
const searchReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
      case RECEIVE_USERS:
      return {searchTargets: action.users.search};
      case RECEIVE_LOCATION:
      return {searchTargets: action.locations.search}
    default:
      return state;
  }
};

export default searchReducer;
