json.extract! user, :id, :username, :email, :first_name, :last_name, :user_status, :bio, :age, :home_location_id
if user.photo.attached?
  json.photoUrl url_for(user.photo)
end
