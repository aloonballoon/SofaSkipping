class Api::LocationsController < ApplicationController

  def show
    @location = Location.find(params[:id])
  end

  def index
    @locations = Location.where(city: params[:location][:city]).or(Location.where(country: params[:location][:country]))
    if @locations != []
      render 'api/locations/index'
    else
      render json: {message: "Location not found"}, status: 404
    end
  end

end
