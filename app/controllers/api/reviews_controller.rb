class Api::ReviewsController < ApplicationController

  def create
    @review = Review.new(review_params)
    @review.reviewer_id = current_user.id
    if @review.save
      render 'api/reviews/show'
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def review_params
    pararms.require(:review).permit(:reviewee_id, :title, :body)
  end

end
