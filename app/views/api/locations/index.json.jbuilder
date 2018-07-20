json.locations do
  @locations.each do |location|
    json.set! location.id do
      json.merge! location.attributes
      json.host_ids location.host_ids
    end
  end
end

user_guest_ids_array = []
user_ids_array = []
json.hosts do
  @locations.each do |location|
    location.hosts.each do |user|
      json.set! user.id do
        json.location user.location
        json.extract! user, :id, :username, :email, :first_name, :last_name, :user_status, :bio, :age, :home_location_id
        user_ids_array << user.id
        if user.photo.attached?
          json.photoUrl url_for(user.photo)
        end
      end
    end
  end
end

json.guests do
  @locations.each do |location|
    location.guests.each do |user|
      json.set! user.id do
        json.location user.location
        json.extract! user, :id, :username, :email, :first_name, :last_name, :user_status, :bio, :age, :home_location_id
        user_guest_ids_array << user.id
        if user.photo.attached?
          json.photoUrl url_for(user.photo)
        end
      end
    end
  end
end

json.search user_ids_array.uniq
json.guest_search user_guest_ids_array.uniq
