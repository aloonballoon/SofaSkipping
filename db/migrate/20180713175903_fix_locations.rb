class FixLocations < ActiveRecord::Migration[5.2]
  def change
    change_column :locations, :lat, :float
    change_column :locations, :lng, :float
  end
end
