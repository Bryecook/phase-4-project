Rails.application.routes.draw do
  resources :cocktail_dislike_joiners
  resources :coktail_dislike_joiners
  resources :cocktail_favorite_joiners
  resources :cocktails
  resources :cocktailnames
  resources :cocktail_list_joiners
  resources :dislikes
  resources :favorites
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
