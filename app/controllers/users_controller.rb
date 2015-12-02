class UsersController < ApplicationController
  before_filter :authenticate_user!

  def show
  	@user = current_user
  	@favorite_songs = @user.favorite_songs
  	# show lesson view tracking: completed lessons and incompleted lessons
  	# use view count
  	# impressionist gem
  end
end
