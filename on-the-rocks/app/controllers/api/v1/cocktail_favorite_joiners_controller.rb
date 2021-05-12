class Api::V1::CocktailFavoriteJoinersController < ApplicationController
    def index
        cocktails = CocktailFavoriteJoiner.all
        render json: cocktails
    end

    def create
        CocktailFavoriteJoiner.create(cocktail_id: params[:cocktail_id], favorite_id: params[:favorite_id])
    end
end
