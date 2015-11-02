class CreateSongs < ActiveRecord::Migration
  def change
    create_table :songs do |t|
      t.string :songname
      t.integer :language_id
    end
  end
end
