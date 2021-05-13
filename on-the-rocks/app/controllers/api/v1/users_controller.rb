class Api::V1::UsersController < ApplicationController
    
    def show
        user = User.all
        render json: users
    end

    def index
        users = User.all
        render json: users.to_json(include: {favorite: {include: [:cocktails, :cocktail_favorite_joiners]}})
    end


    def create
       User.create(name: params[:name], age: params[:age], hometown: params[:hometown], picture: params[:picture], password_digest: params[:password])
        # render json: user
    end
    
end
