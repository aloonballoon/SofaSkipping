class Api::ReviewsController < ApplicationController

  def create
    debugger
    @reviews = Review.new(review_params)
    @reviews.reviewer_id = current_user.id
    if @reviews.save
      render 'api/reviews/show'
    else
      render json: @reviews.errors.full_messages, status: 422
    end
  end

  def show
    @reviews = Review.where(reviewee_id: params[:id]).includes(:reviewer)
    render 'api/reviews/show'
  end

  def review_params
    params.require(:review).permit(:reviewee_id, :title, :body, :recommended, :review_date, :rating)
  end

end
