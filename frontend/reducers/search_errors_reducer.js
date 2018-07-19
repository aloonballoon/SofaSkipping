import { RECEIVE_SEARCH_ERRORS } from '../actions/user_actions/user_actions';
import { RECEIVE_USERS } from '../actions/user_actions/user_actions';
import { RECEIVE_LOCATION } from '../actions/location_actions';



const searchErrorsReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_SEARCH_ERRORS:
      return action.error;
    case RECEIVE_USERS:
    case RECEIVE_LOCATION:
      return [];
    default:
      return state;
  }
};

export default searchErrorsReducer;
