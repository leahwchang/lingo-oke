class LanguagesController < ApplicationController
  def index
  	@languages = Language.all
  	@songs = Song.all
  end

  def show

  end

  def create
  end

  def new
  end

end