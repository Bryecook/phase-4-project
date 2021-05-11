Rails.application.routes.draw do


  namespace :api do
    namespace :v1 do
      resources :cocktails
      resources :users
      resources :favorites
      resources :dislikes
      resources :cocktail_favorite_joiners
      resources :cocktail_dislike_joiners
      post '/login', to: "auth#login"
      get '/show', to: 'users#show'
    end
  end
end
