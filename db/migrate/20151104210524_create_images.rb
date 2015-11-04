class CreateImages < ActiveRecord::Migration
  def change
    create_table :images do |t|
      t.integer :song_id
      t.string :imagename
      t.string :imageurl
    end
  end
end
