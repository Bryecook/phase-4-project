class Api::V1::CocktailsController < ApplicationController
    before_action :logged_in?
    def index
        cocktails = Cocktail.all
        render json: cocktails
    end

    def create
        cocktail = Cocktail.create(name: params[:name], ingredients: params[:ingredients], instructions: params[:instructions],
        glass: params[:glass], picture: params[:picture])
        render json: cocktail
    end
    
end
# create_table "cocktails", force: :cascade do |t|
#     t.string "name"
#     t.text "ingredients", default: [], array: true
#     t.string "instructions"
#     t.string "glass"
#     t.string "picture"
#     t.datetime "created_at", precision: 6, null: false
#     t.datetime "updated_at", precision: 6, null: false