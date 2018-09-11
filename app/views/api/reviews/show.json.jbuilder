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

  json.user do
    reviews.first.reviewee
  end
