json.hostings do
  @bookings.each do |hosting|
    json.set! hosting.id do
      json.merge! hosting.attributes
    end
  end
end
