class UsersController < ApplicationController
  before_filter :authenticate_user!
  def show
  	@user = current_user
  	# show lesson view tracking: completed lessons and incompleted lessons
  	# use view count

  	# impressionist gem
  end
end
