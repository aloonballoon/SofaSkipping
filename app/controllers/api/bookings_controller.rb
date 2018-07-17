class Api::BookingsController < ApplicationController

  def show
    @bookings = Booking.where(host_id: params[:id]).includes(:guest)
    render "api/bookings/show"
  end

  def trips
    @trips = Booking.where(guest_id: params[:id]).includes(:host)
    render "api/bookings/trips"
  end

end
