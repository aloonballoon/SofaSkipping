json.users do
  @guests.each do |guest|
    json.set! guest.id do
      json.location guest.location
      json.extract! guest, :id, :username, :email, :first_name, :last_name, :user_status, :bio, :age, :home_location_id
    end
  end
end
