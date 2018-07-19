import { RECEIVE_LOCATION } from '../actions/location_actions';
import { merge } from 'lodash';

const defaultState = {};

const locationsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_LOCATION:
      return merge({}, state, action.locations.locations);
    default:
      return state;
  }
};

export default locationsReducer;
