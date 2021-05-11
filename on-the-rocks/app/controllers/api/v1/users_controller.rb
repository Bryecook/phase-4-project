class Api::V1::UsersController < ApplicationController

    def show
        user = User.all
        render json: user
    end

end
