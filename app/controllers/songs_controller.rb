class SongsController < ApplicationController
  def index
  	@songs = Song.all
  end

  def show
  	@language = Language.find(params[:language_id])
  	@song = Song.find(params[:id])
  end

  def create
  end

  def new
  end

end