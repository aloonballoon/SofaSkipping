user_ids_array = []
@users.each do |user|
    json.set! user.id do
      json.location user.location
      json.extract! user, :id, :username, :email, :first_name, :last_name, :user_status, :bio, :age, :home_location_id
      user_ids_array << user.id
    end
  end

  json.search user_ids_array
