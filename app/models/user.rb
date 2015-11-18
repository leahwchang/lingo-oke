class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_many :songs

  # favorite songs of user
  has_many :favorite_songs # the relationship
  has_many :favorites, through: :favorite_songs, source: :song # the actual songs a user favorites

end