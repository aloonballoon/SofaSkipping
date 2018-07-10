import { combineReducers } from 'redux';

import session from './sessions_reducer';

const rootReducer = combineReducers({
  session,
});

export default rootReducer;
