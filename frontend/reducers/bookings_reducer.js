import { combineReducers } from 'redux';
import tripsReducer from './trips_reducer';
import hostingsReducer from './hostings_reducer';

const bookingsReducer = combineReducers({
  trips: tripsReducer,
  hostings: hostingsReducer
});

export default bookingsReducer;
