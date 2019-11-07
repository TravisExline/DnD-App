Rails.application.routes.draw do
  resources :users, only: [:index, :create, :show]
  resources :characters, only: [:index, :show, :create, :destroy]
  resources :items, only: [:index, :show, :create, :destroy]
  resources :character_items, only: [:index,  :create]

  post '/character_items/remove' => 'character_items#remove'
end
