class CreateFavoriteSongs < ActiveRecord::Migration
  def change
    create_table :favorite_songs do |t|
      t.integer :song_id
      t.integer :user_id
    end
  end
end
