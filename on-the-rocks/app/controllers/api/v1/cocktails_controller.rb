class Api::V1::CocktailsController < ApplicationController
    before_action :logged_in?
    def index
        cocktails = Cocktail.all
        render json:a cocktails
    end
    
end
