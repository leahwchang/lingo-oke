class AddUrlToSongs < ActiveRecord::Migration
  def change
  	add_column :songs, :songurl, :string
  end
end