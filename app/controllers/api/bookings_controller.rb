class Api::BookingsController < ApplicationController

  def show
    @bookings = Booking.where(host_id: params[:id]).includes(:guest)
    render "api/bookings/show"
  end

  def trips
    @trips = Booking.where(guest_id: params[:id]).includes(:host)
    render "api/bookings/trips"
  end

  def create
    @trip = Booking.new(booking_params)
    @trip.guest_id = current_user.id
    if @trip.save
      render 'api/bookings/new'
    else
      render json: {message: "Could not book"}, status: 422
    end
  end

  def destroy
    @booking = Booking.find(params[:id])
    if @booking.destroy
      render 'api/bookings/delete'
    end
  end

  def booking_params
    params.require(:booking).permit(:start_date, :end_date, :host_id)
  end

end
