class CreateTracks < ActiveRecord::Migration
  def change
    create_table :tracks do |t|
      t.string :duration
      t.integer :song_id
    end
  end
end
