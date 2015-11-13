class FlashcardsController < ApplicationController
  def index
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
