class Api::ProductsController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :render_record_not_found


    def index
        render json: Product.all
    end

    def show
        product = Product.find(params[:id])
        render json: product, serializer:  ProductAndVendorSerializer
    end

    def render_record_not_found
        render json: {error: "Product not found"}, status: 404
    end
end
