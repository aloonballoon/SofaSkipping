export const createReviews = (params) => {
  return $.ajax({
    method: "post",
    url: "api/reviews",
    data: {
      review: {
        title: params.title,
        reviewee_id: params.revieweeId,
        body: params.body,
        recommended: params.recommended,
        review_date: params.date,
        rating: params.rating
      }
    }
  });
};

export const fetchReviews = (userId) => {
  return $.ajax({
      method: 'get',
      url: `api/reviews/${userId}`,
  });
};
