# == Schema Information
#
# Table name: reviews
#
#  id          :bigint(8)        not null, primary key
#  title       :string           not null
#  body        :string           not null
#  reviewer_id :integer          not null
#  reviewee_id :integer          not null
#

class Review < ApplicationRecord

  belongs_to :reviewer,
  primary_key: :id,
  foreign_key: :reviewer_id,
  class_name: :User

  belongs_to :reviewee,
  primary_key: :id,
  foreign_key: :reviewee_id,
  class_name: :User


end
