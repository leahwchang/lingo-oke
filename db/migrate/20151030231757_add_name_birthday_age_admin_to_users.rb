class AddNameBirthdayAgeAdminToUsers < ActiveRecord::Migration
  def change
  	add_column :users, :fname, :string
  	add_column :users, :lname, :string
  	add_column :users, :age, :integer
  	add_column :users, :birthday, :date
  	add_column :users, :admin, :boolean, default: false
  end
end
