class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.string :title, null: false
      t.string :body, null: false
      t.integer :reviewer_id, null: false
      t.integer :reviewee_id, null: false
    end
  end
end
