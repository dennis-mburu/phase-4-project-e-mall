Rails.application.routes.draw do
  resources :orders
  resources :products
  resources :customers
  resources :vendors

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
