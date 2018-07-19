json.hosting do
  json.set! @booking.id do
    json.merge! @booking.attributes
  end
end
