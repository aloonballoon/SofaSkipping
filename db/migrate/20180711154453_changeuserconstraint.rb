class Changeuserconstraint < ActiveRecord::Migration[5.2]
  def change
    change_column(:users, :home_location_id, :integer)
  end
end
