# == Schema Information
#
# Table name: users
#
#  id               :bigint(8)        not null, primary key
#  first_name       :string           not null
#  last_name        :string           not null
#  username         :string           not null
#  email            :string           not null
#  session_token    :string           not null
#  password_digest  :string           not null
#  home_location_id :integer          not null
#  user_status      :string
#  age              :integer
#  bio              :string
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#



class User < ApplicationRecord

  attr_reader :password

  validates :email, :password_digest, :session_token, presence: true
  validates :email, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true
  validates :email, length: {minimum: 3}

  after_initialize :ensure_session_token, :set_status

  has_one_attached :photo

  has_many :bookings,
  primary_key: :id,
  foreign_key: :guest_id,
  class_name: :Booking

  has_many :hostings,
  primary_key: :id,
  foreign_key: :host_id,
  class_name: :Booking

  has_many :guests,
  through: :hostings,
  source: :guest

  has_many :hosts,
  through: :bookings,
  source: :host

  belongs_to :location,
  primary_key: :id,
  foreign_key: :home_location_id,
  class_name: :Location,
  optional: true

  has_many :submitted_reviews,
  primary_key: :id,
  foreign_key: :reviewer_id,
  class_name: :Review

  has_many :received_reviews,
  primary_key: :id,
  foreign_key: :reviewee_id,
  class_name: :Review

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    generate_unique_session_token
    save!
    self.session_token
  end

  private

  def ensure_session_token
    generate_unique_session_token unless self.session_token
  end

  def new_session_token
    SecureRandom.urlsafe_base64
  end

  def generate_unique_session_token
    self.session_token = new_session_token
    while User.find_by(session_token: self.session_token)
      self.session_token = new_session_token
    end
    self.session_token
  end

  def set_status
    if self.user_status.nil?
      self.user_status = 'Maybe accepting guests'
    end
  end

end
