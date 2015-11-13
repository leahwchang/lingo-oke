class FlashcardsController < ApplicationController
  before_action :authenticate_user!
  def index
    @language = Language.find(params[:language_id])
  	@song = Song.find(params[:song_id])
  	@flashcards = Flashcard.all
  end

  def create
  end

  def show
  end

  def new
  end
end
