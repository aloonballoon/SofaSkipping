class Api::LocationsController < ApplicationController

  def show
    @location = Location.find(params[:id])
  end

  def index
    like_keyword = params[:location][:city]
    @locations = Location.where("city LIKE :query", query: "#{like_keyword}")
    if @locations != []
      render 'api/locations/index'
    else
      render json: {message: "Location not found"}, status: 404
    end
  end

  def create
    @locations = Location.new(location_params)
    if @locations.save
      @locations = [@locations]
      render 'api/locations/index'
    else
      render json: {message: "Location not found"}, status: 404
    end
  end

  def location_params
    params.require(:location).permit(:city, :country, :lat, :lng, :photos)
  end

end
