class Api::V1::UsersController < ApplicationController

    def show
        user = User.all
        render json: user
    end

    def index
        users = User.all
        render :json => users
    end
    
end
