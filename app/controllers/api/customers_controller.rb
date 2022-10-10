class Api::CustomersController < ApplicationController
    def index
        render json: Customer.all
    end
end
