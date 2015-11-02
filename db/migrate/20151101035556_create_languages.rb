class CreateLanguages < ActiveRecord::Migration
  def change
    create_table :languages do |t|
      t.string :langname
    end
  end
end
