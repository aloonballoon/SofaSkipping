class BookingsController < ApplicationController

  def show
    @bookings = Booking.where(host_id: params[:id]).includes(:traveler)
    render "api/bookings/show"
  end

end
