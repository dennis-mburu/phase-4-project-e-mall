class Api::CustomersController < ApplicationController
    def index
        render json: Customer.all
    end

    def show
        customer = Customer.find_by(id: session[:customer_id])
        if customer
            render json: customer
        else
            render json: {error: "unauthorized"}, status: 401
        end

    end
end
