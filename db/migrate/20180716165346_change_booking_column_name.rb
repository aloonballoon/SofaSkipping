class ChangeBookingColumnName < ActiveRecord::Migration[5.2]
  def change
    rename_column :bookings, :traveler_id, :guest_id
  end
end
