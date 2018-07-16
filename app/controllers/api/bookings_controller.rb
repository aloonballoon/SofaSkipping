class BookingsController < ApplicationController

  def show
    @booking = Booking.find(params[:id])
    render "api/bookings/show"
  end

end
