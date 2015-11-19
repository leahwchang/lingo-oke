Rails.application.routes.draw do

  resources :languages, only: [:index] do
    resources :songs, only: [:show] do
    	put :favorite, on: :member
      resources :flashcards, only: [:index]
    end
  end

  devise_for :users
  resources :users, only: [:show]

  root "homes#index"
end
