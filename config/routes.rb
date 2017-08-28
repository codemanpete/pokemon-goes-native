Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, default: { format: :json } do
    resources :users, only: [:index] do
      resources :pokemon, only: [:create, :index]
    end
  end
end
