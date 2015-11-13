class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  before_action :store_location
  before_action :configure_permitted_parameters, if: :devise_controller?

  protected

  def store_location
    puts "Storing: #{params[:continue]}"
      if params[:continue] # =~ /\/(events\/[0-9])\z/ # safelist
          # puts "it's a match"
          session[:continue] = params[:continue]
      end
  end

  def after_sign_in_path_for(resource)
  	languages_path
  end

  def after_sign_up_path_for(resource)
  	languages_path
  end

  def after_sign_out_path_for(resource)
  	root_path
  end

  def after_update_path_for(resource)
    'users#show'
  end

  def configure_permitted_parameters
    devise_parameter_sanitizer.for(:sign_up) { |params| params.permit(:email, :password, :password_confirmation, :fname, :lname, :current_password, :age, :birthday)
    }
    devise_parameter_sanitizer.for(:account_update) { |u| 
      u.permit(:email, :password, :password_confirmation, :fname, :lname, :current_password, :age, :birthday) 
    }
  end

end