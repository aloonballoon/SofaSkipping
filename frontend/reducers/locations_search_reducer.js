import { merge } from 'lodash';
import { RECEIVE_USERS } from '../actions/user_actions/user_actions';
import { RECEIVE_LOCATION } from '../actions/location_actions';

const defaultState = {locationSearchTargets: []};
const locationsSearchReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
      // case RECEIVE_USERS:
      // return {locationSearchTargets: action.users.search};
      case RECEIVE_LOCATION:
      return {locationSearchTarget: action.locations.locationSearch};
    default:
      return state;
  }
};

export default locationsSearchReducer;
