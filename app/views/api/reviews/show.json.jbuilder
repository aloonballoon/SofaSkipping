reviews = Array(@reviews)

  reviews.each do |review|
    json.set! review.id do
      json.merge! review.attributes
      json.author do
        json.first_name review.reviewer.first_name
        json.last_name review.reviewer.last_name
      end
    end
  end

  user = reviews.first.reviewee

  json.set! :user do
    json.extract! user, :id, :username, :email, :first_name, :last_name, :user_status, :bio, :age, :home_location_id
    json.received_review_ids user.received_review_ids
  end
