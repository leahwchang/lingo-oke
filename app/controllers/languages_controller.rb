class LanguagesController < ApplicationController
  before_action :authenticate_user!

  def index
    @language = Language.new
  	@languages = Language.all
  	@songs = Song.all
  end

  def show
  end

  def create
    @language = Language.new(language_params)
      if @language.save
        redirect_to languages_path
      else
        redirect_to :back, notice: "There was a problem creating languages."
      end
  end

  def new
  end

  private

    def language_params
      params.require(:language).permit(:langname)
    end

end