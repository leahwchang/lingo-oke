class Song < ActiveRecord::Base
	belongs_to :language
	has_many :translations
end