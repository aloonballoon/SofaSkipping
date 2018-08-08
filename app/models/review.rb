class Review < ApplicationRecord

  belongs_to :reviewer,
  primary_key: :id,
  foreign_key: :reviewer_id,
  class_name: :User

  belongs_to :reviewee,
  primary_key: :id,
  foreign_key: :reviewer_id,
  class_name: :User


end
