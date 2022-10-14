Rails.application.routes.draw do
 
  namespace :api do

    resources :orders, only: [:index, :create, :destroy]
    resources :products, only: [:index, :show]
    resources :customers, only: [:index, :show, :create]
    resources :vendors, only: [:index, :show, :create]

    # CUTOMER AUTH
    post "/customer_login", to: "customer_sessions#create"
    delete "/customer_logout", to: "customer_sessions#destroy"
    get "/customer_auth", to: "customers#show"
    post "/customer_signup", to: "customers#create"

    # VENDOR AUTH
    post "vendor_login", to: "vendor_sessions#create"
    delete "vendor_logout", to: "vendor_sessions#destroy"
    get "/vendor_auth", to: "vendors#show"
    post "/vendor_signup", to: "vendors#create"

    # SPECIFIC VENDOR'S PRODUCTS
    get 'vendor_products', to: "vendor_products#index"
    get "vendor_products/:id", to: "vendor_products#show"
    patch "vendor_products/:id", to: "vendor_products#update"
    delete "vendor_products/:id", to: "vendor_products#destroy"
    post 'vendor_products', to: "vendor_products#create"


  end




  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
