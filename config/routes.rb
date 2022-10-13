Rails.application.routes.draw do
 
  namespace :api do

    resources :orders
    resources :products
    resources :customers
    resources :vendors

    # CUTOMER AUTH
    post "/customer_login", to: "customer_sessions#create"
    delete "/customer_logout", to: "customer_sessions#destroy"
    get "/customer_auth", to: "customers#show"
    post "/customer_signup", to: "customers#create"

    # VENDOR AUTH
    post "vendor_login", to: "vendor_sessions#create"
    delete "vendor_logout", to: "vendor_sessions#destroy"
    get "/vendor_auth", to: "vendors#show"


  end




  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
