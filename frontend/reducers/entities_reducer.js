import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import bookingsReducer from './bookings_reducer';
import locationsReducer from './locations_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  bookings: bookingsReducer,
  locations: locationsReducer
});

export default entitiesReducer;
