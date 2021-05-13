class Api::V1::CocktailFavoriteJoinersController < ApplicationController
    def index
        cocktails = CocktailFavoriteJoiner.all
        render json: cocktails.to_json(include: :cocktail)
    end

    def create
        CocktailFavoriteJoiner.create(cocktail_id: params[:cocktail_id], favorite_id: params[:favorite_id])
    end

    def destroy
        joiner = CocktailFavoriteJoiner.find(params[:id])
        joiner.destroy
    end

    def user_favorites
        favorite_list = login.favorite.cocktails
        render json: favorite_list
    end 
end
