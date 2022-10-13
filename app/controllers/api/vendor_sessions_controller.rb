class Api::VendorSessionsController < ApplicationController

    def create
        vendor = Vendor.find_by(username: params[:username])
        if vendor&.authenticate(params[:password])
            session[:vendor_id] = vendor.id
            render json: vendor
        else
            render json: {errors: ["Invalid Username or Password"]}, status: 401
        end
    end

    def destroy
        if session[:vendor_id]
            session.delete :vendor_id
            head 204
        else
            render json: {errors: ["Not Authorized"]}, status: 401
        end
    end
end
