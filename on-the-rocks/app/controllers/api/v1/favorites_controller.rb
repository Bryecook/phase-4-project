class Api::V1::FavoritesController < ApplicationController

    def index
        favorites = Favorite.all
        render :json => favorites
    end

    def create
        favorite = Favorite.create(user_id: User.last.id)
    end

end
