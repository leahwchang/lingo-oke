class CreateFlashcards < ActiveRecord::Migration
  def change
    create_table :flashcards do |t|
      t.integer :language_id
      t.integer :song_id
      t.string :fvocab
      t.string :fextra
      t.string :bvocab
      t.string :bextra
    end
  end
end
