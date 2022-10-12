class Api::OrdersController < ApplicationController
    before_action :authorize
    rescue_from ActiveRecord::RecordInvalid, with: :render_unproccessable_entity

    
    def index
        # render json: Order.all
        orders = Order.where(customer_id: @customer.id)
        render json: orders
    end

    def create
        # binding.pry
        order = Order.create!(product_id: params[:product_id], customer_id: @customer.id)
    end

    private

    def authorize
        @customer = Customer.find_by(id: session[:customer_id])
        render json: {errors: ["Please Log in or Create a customer account to place orders"]}, status: 401 unless @customer  
    end

    def order_param
        params.permit(:product_id)
    end

    def render_unproccessable_entity(invalid)
        render  json: {errors: invalid.record.errors.full_messages}, status: 422
     end

end
