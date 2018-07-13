class CreateLocations < ActiveRecord::Migration[5.2]
  def change
    create_table :locations do |t|
      t.string :city, null: false
      t.string :country, null: false
      t.integer :lat, null: false
      t.integer :lng, null: false
    end
  end
end
