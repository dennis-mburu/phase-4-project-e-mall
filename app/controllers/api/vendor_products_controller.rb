class Api::VendorProductsController < ApplicationController
    before_action :authorize
    rescue_from ActiveRecord::RecordInvalid, with: :render_unproccessable_entity
    rescue_from ActiveRecord::RecordNotFound, with: :render_record_not_found


    def index
        products = Product.where(vendor_id: @vendor.id)
        render json: products
    end

    private 

    def product_params
        params.permit(:title, :description, :price, :image_url, :stock)
    end

    def authorize
        @vendor = Vendor.find_by(id: session[:vendor_id])
        render json: {errors: ["You can Only Manage Products that belong to you"]}, status: 401 unless @vendor
    end

    def render_unproccessable_entity(invalid)
        render  json: {errors: invalid.record.errors.full_messages}, status: 422
    end

     def render_record_not_found
        render json: {error: "Product not found"}, status: 404
    end

end
