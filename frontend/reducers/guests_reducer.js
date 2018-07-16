// import { RECEIVE_GUESTS } from '../actions/session_actions';
// import { merge } from 'lodash';
//
//
// const defaultState = {};
//
// const usersReducer = (state = defaultState, action) => {
//   Object.freeze(state);
//   switch (action.type) {
//     case RECEIVE_CURRENT_USER:
//     case RECEIVE_ASSOCIATED_USER:
//       return merge({}, state, {[action.user.id]: action.user});
//
//     default:
//       return state;
//   }
// };
//
// export default usersReducer;
