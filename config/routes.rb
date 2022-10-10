Rails.application.routes.draw do
 
  namespace :api do
    resources :orders
    resources :products
    resources :customers
    resources :vendors

  end




  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
