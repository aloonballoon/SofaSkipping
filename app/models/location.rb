# == Schema Information
#
# Table name: locations
#
#  id      :bigint(8)        not null, primary key
#  city    :string           not null
#  country :string           not null
#  lat     :float            not null
#  lng     :float            not null
#  photos  :string
#

class Location < ApplicationRecord

  has_many :hosts,
  primary_key: :id,
  foreign_key: :home_location_id,
  class_name: :User

  has_many :bookings,
  through: :hosts,
  source: :bookings

  has_many :guests,
  through: :hosts,
  source: :guests

  has_one_attached :photo

end
