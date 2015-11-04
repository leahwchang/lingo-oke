class CreatePictures < ActiveRecord::Migration
  def change
    create_table :pictures do |t|
      t.string :picture_name
      t.integer :song_id
    end
  end
end
