export const createReview = (params) => {
  return $.ajax({
    method: "post",
    url: "api/reviews",
    data: {
      review: {
        title: params.title,
        body: params.body,
        recommended: params.recommended,
        date: params.date
      }
    }
  });
};
