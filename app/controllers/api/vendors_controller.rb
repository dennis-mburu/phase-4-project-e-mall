class Api::VendorsController < ApplicationController
    def index
        render json: Vendor.all
    end
end
