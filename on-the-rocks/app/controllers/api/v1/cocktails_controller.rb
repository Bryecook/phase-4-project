class Api::V1::CocktailsController < ApplicationController

    def index
        cocktails = Cocktail.all
        render :json => cocktails
    end
    
end
