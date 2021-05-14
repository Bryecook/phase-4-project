class Api::V1::CocktailFavoriteJoinersController < ApplicationController
    def index
        cocktails = CocktailFavoriteJoiner.all
        render json: cocktails.to_json(include: :cocktail)
    end

    def create
        cocktail= CocktailFavoriteJoiner.create(cocktail_id: params[:cocktail_id], favorite_id: params[:favorite_id])
        render json: cocktail.to_json(include: :cocktail)
    end

    def destroy
        joiner = CocktailFavoriteJoiner.find(params[:id])
        joiner.destroy
        render json: joiner
    end

    def user_favorites
        favorite_list = login.favorite.cocktails
        render json: favorite_list
    end 
end
