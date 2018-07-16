import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import bookingsReducer from './bookings_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  bookings: bookingsReducer
});

export default entitiesReducer;
