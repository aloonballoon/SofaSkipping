# == Schema Information
#
# Table name: bookings
#
#  id         :bigint(8)        not null, primary key
#  host_id    :integer          not null
#  guest_id   :integer          not null
#  start_date :date             not null
#  end_date   :date             not null
#  confirmed  :boolean          default(FALSE)
#

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
