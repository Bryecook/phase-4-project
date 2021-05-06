class CocktailFavoriteJoiner < ApplicationRecord
    belongs_to :cocktail
    belongs_to :favorite
end
