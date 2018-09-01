class AddReviewsColumnDatetime < ActiveRecord::Migration[5.2]
  def change
    add_column :reviews, :review_date, :date
  end
end
