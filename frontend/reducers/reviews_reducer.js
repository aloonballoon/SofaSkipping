import { merge } from 'lodash';
import { RECEIVE_REVIEWS } from '../actions/review_actions';

const defaultState = {};
const reviewsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_REVIEWS:
      return merge({}, state, action.reviews);
    default:
      return state;
  }
};

export default reviewsReducer;
