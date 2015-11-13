class Song < ActiveRecord::Base
	belongs_to :language
	has_many :translations
	has_many :images
	has_many :flashcards

end