class Api::CustomerSessionsController < ApplicationController
    
    def create
        customer = Customer.find_by(username: params[:username])
        if customer&.authenticate(params[:password])
            session[:customer_id] = customer.id
            render json: customer
        else
            render json: {errors: ["Invalid Username or Password"]}, status: 401
        end
    end

    def destroy
        if session[:customer_id]
            session.delete :customer_id
            head 204
        else
            render json: {errors: ["Not Authorized"]}, status: 401
        end
    end
end
