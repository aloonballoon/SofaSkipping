class Booking < ApplicationRecord

  belongs_to :host,
  primary_key: :id,
  foreign_key: :host_id,
  class_name: :User

  belongs_to :traveler,
  primary_key: :id,
  foreign_key: :traveler_id,
  class_name: :User


end
