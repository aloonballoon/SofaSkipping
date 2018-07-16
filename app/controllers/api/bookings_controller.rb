class Api::BookingsController < ApplicationController

  def show
    @bookings = Booking.where(host_id: params[:id]).includes(:guest)
    render "api/bookings/show"
  end

end
