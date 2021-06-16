class Api::V1::FavoritesController < ApplicationController

    def index
        favorites = Favorite.all
        render :json => favorites
    end

    def create
        # byebug
        favorite = Favorite.create(user_id: params[:user_id])
        render json: favorite
    end

end
