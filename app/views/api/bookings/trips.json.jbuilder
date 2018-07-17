json.trips do
  @trips.each do |trip|
    json.set! trip.id do
      json.merge! trip.attributes
    end
  end
end
