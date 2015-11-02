Rails.application.routes.draw do

  resources :languages do
    resources :songs do
      resources :translations
    end
  end

  devise_for :users
  resources :users, only: [:show]

  root "homes#index"
end
