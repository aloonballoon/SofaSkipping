import * as LocationApiUtil from '../util/locations_util';
import { receiveSearchErrors } from './user_actions/user_actions';
import { RECEIVE_SEARCH_ERRORS } from './user_actions/user_actions';

export const RECEIVE_LOCATION = "RECEIVE_LOCATION";

export const receiveLocation = (locations) => {
  return {
    type: RECEIVE_LOCATION,
    locations: locations
  };
};

export const fetchLocation = (location) => {
  return dispatch => {
    return LocationApiUtil.fetchLocation(location).then(location => {
      return dispatch(receiveLocation(location));
    }, error => (dispatch(receiveSearchErrors(error.responseJSON))));
  };
};
