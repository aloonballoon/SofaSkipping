import { combineReducers } from 'redux';
import errorsReducer from './errors_reducer';
import entitiesReducer from './entities_reducer';
import sessionReducer from './session_reducer';
import uiReducer from './ui_reducer';
import searchReducer from './search_reducer';
import guestSearchReducer from './guest_search_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  entities: entitiesReducer,
  errors: errorsReducer,
  ui: uiReducer,
  search: searchReducer,
  guestSearch: guestSearchReducer
});

export default rootReducer;
