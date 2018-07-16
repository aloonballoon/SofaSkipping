json.extract! user, :id, :username, :email, :first_name, :last_name, :user_status, :bio, :age, :home_location_id

if user.photo.attached?
  json.photoUrl url_for(user.photo)
end

json.host_ids user.host_ids
json.guest_ids user.guest_ids
json.trip_ids user.trip_ids
json.hosting_ids user.hosting_ids

json.trips do
  user.trips.each do |trip|

    json.set! trip.id do
      json.extract! trip, :host_id, :traveler_id, :start_date, :end_date, :id
    end
  end
end

json.hostings do
  user.hostings.each do |hosting|
    json.set! hosting.id do
        json.merge! hosting.attributes
    end
  end
end

json.guests user.guests
json.hosts user.hosts
json.home_location user.location
