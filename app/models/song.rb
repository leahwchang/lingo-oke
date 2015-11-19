class Song < ActiveRecord::Base
	belongs_to :language
	has_many :translations
	has_many :images
	has_many :flashcards
	has_many :users

	# favorited by users
	has_many :favorite_songs  # the relationship
  has_many :favorited_by, through: :favorite_songs, source: :user # the actual users favoriting a song
end