class CreateTranslations < ActiveRecord::Migration
  def change
    create_table :translations do |t|
      t.string :varname
      t.text :varbody
      t.integer :song_id
    end
  end
end
