class CocktailDislikeJoiner < ApplicationRecord
    belongs_to :cocktail
    belongs_to :dislike
end
