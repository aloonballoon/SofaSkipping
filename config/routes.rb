Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users do
      member do
        get 'guests'
      end

      member do
        get 'hosts'
      end

    end
    resource :session, only: [:create, :destroy, :show]
    resources :locations
    resources :reviews, only: [:create, :show]
    resources :bookings do
      member do
        get 'trips'
      end
    end
  end



end
