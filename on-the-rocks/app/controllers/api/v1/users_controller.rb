class Api::V1::UsersController < ApplicationController
    
    def show
        user = User.all
        render json: users
    end

    def index
        users = User.all
        render json: users
    end

end
