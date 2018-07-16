class Booking < ApplicationRecord

  # validates :dates

  belongs_to :host,
  primary_key: :id,
  foreign_key: :host_id,
  class_name: :User

  belongs_to :guest,
  primary_key: :id,
  foreign_key: :guest_id,
  class_name: :User

  has_one :destination,
  through: :host,
  source: :location

end
