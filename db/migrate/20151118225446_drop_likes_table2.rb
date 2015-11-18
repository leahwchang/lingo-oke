class DropLikesTable2 < ActiveRecord::Migration
  def change
  	drop_table :likes
  end
end
