class CreateBookings < ActiveRecord::Migration[5.2]
  def change
    create_table :bookings do |t|
      t.integer :host_id, null: false
      t.integer :traveler_id, null: false
      t.date :start_date, null: false
      t.date :end_date, null: false
    end
  end
end
