class Booking < ApplicationRecord

  belongs_to :host,
  primary_key: :id,
  foreign_key: :host_id,
  class_name: :User,
  optional: true

  belongs_to :guest,
  primary_key: :id,
  foreign_key: :guest_id,
  class_name: :User,
  optional: true

  has_one :destination,
  through: :host,
  source: :location


end
