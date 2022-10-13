class Api::CustomersController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessible_entity

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

    def create
        if session[:vendor_id] 
            render json: {errors: ["Please Log Out from Vendor Account before Creating a Customer Account"]}, status: 401
        else
            customer = Customer.create!(customer_params)
            session[:customer_id] = customer.id
            render json: customer, status: 201
        end
        
    end

    private

    def customer_params
        params.permit(:username, :password, :password_confirmation, :user_type)
    end

    def render_unprocessible_entity(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: 422
    end
end
