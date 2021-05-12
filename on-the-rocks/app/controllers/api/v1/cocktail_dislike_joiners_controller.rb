class Api::V1::CocktailDislikeJoinersController < ApplicationController
    def index
        cocktails = CocktailDislikeJoiner.all
        render json: cocktails
    end

    def create
        CocktailDislikeJoiner.create(cocktail_id: params[:cocktail_id], dislike_id: params[:dislike_id])
    end
end
