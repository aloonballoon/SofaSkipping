class Changeuserconstraints < ActiveRecord::Migration[5.2]
  def change
    change_column :users, :home_location_id, :integer, null:true
  end
end
