class SongsController < ApplicationController
	before_action :authenticate_user!
	before_action :set_language, only: [:create, :new, :index, :show, :favorite]
	before_action :set_song, only: [:show, :favorite]
  respond_to :json

  def index
  	@songs = Song.all
  end

  def show
    @images = Image.all
    @translations = Translation.all
    respond_to do |format|
    format.html
    format.json { render :json => @song.to_json(
      :include => [:translations, :images] 
      )
    }
    end
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

  def favorite
    type = params[:type]
    if type == "favorite"
      current_user.favorites << @song
      redirect_to :back, notice: "You favorited #{@song.songname}"
    elsif type == "unfavorite"
      current_user.favorites.delete(@song)
      redirect_to :back, notice: "You unfavorited #{@song.songname}"
    else
      # Type missing, nothing happens
      redirect_to :back, notice: "Nothing happened."
    end
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