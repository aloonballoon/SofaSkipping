class Location < ApplicationRecord

  has_many :hosts,
  primary_key: :id,
  foreign_key: :home_location_id,
  class_name: :User

  has_one_attached :photo

end
