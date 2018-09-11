import * as ReviewsApiUtil from '../util/reviews_util';

export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";

export const receiveReviews = (reviews) => {
  return {
    type: RECEIVE_REVIEWS,
    reviews: reviews
  };
};

export const fetchReviews = (userId) => {
  return dispatch => {
    return  ReviewsApiUtil.fetchReviews(userId).then((reviews) => {
      return dispatch(receiveReviews(reviews));
    });
  };
};

export const createReviews = (data) => {
  return dispatch => {
    return ReviewsApiUtil.createReviews(data).then((reviews) => {
      debugger
      return dispatch(receiveReviews(reviews));
    });
  };
};
