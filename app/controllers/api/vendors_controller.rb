class Api::VendorsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessible_entity

    def index
        render json: Vendor.all
    end

    def show
        vendor = Vendor.find_by(id: session[:vendor_id])
        if vendor
            render json: vendor
        else
            render json: {error: "unauthorized"}, status: 401
        end
    end

    def create
        if session[:customer_id]
            render json: {errors: ["Please Log Out from Customer Account before creating a Vendor Account"]}, status: 401
        else
            vendor = Vendor.create!(vendor_params)
            session[:vendor_id] = vendor.id
            render json: vendor, status: 201
        end
    end

    private

    def vendor_params
        params.permit(:username, :password, :password_confirmation, :user_type)
    end

    def render_unprocessible_entity(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: 422
    end
end
