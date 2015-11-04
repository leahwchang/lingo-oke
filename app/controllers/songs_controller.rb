class SongsController < ApplicationController
	before_action :authenticate_user!
	before_action :set_language, only: [:create, :new, :index, :show]
	before_action :set_song, only: [:show]

  def index
  	@songs = Song.all
  end

  def show
    @images = Image.all
  end

  def create
  	@song = @language.songs.new(song_params)
  	if @song.save
  		redirect_to languages_path
  	else
  		redirect_to :back, notice: "There was a problem creating songs."
  	end
  end

  def new
    @song = Song.new
  end

  private

  def set_song
  	@song = Song.find(params[:id])
  end

  def set_language
  	@language = Language.find(params[:language_id])
  end

  def song_params
  	params.require(:song).permit(:songname)
  end

end