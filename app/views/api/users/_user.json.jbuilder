json.extract! user, :id, :username, :email, :first_name, :last_name, :user_status, :bio, :age, :home_location_id

if user.photo.attached?
  json.photoUrl url_for(user.photo)
end

json.host_ids user.host_ids
json.guest_ids user.guest_ids
json.trip_ids user.booking_ids
json.hosting_ids user.hosting_ids
json.received_review_ids user.received_review_ids
json.location user.location


#unique duplicate ids
