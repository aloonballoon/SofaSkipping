import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import hostingsReducer from './hostings_reducer';
import tripsReducer from './trips_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  hostings: hostingsReducer,
  trips: tripsReducer
});

export default entitiesReducer;
