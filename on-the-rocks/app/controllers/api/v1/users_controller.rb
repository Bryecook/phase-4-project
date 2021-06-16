class Api::V1::UsersController < ApplicationController
    
    def show
        users = User.all
        render json: users
    end

    def index
        users = User.all
        render json: users.to_json(include: {favorite: {include: [:cocktails, :cocktail_favorite_joiners]}})
    end


    def create
      user = User.create(name: params[:name], age: params[:age], hometown: params[:hometown], picture: params[:picture], password: params[:password])
      Favorite.create(user_id: User.last.id)
      render json: user 
    end

    def destroy
        user = User.find(params[:id])
        user.destroy
        # User.destroy
        # redirect_to '/login'
    end

end
