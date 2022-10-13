class Api::VendorsController < ApplicationController
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
end
