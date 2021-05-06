class Cocktail < ApplicationRecord
    has_many :cocktail_favorite_joiners
    has_many :favorites, through: :cocktail_favorite_joiners
    
    has_many :cocktail_dislike_joiners
    has_many :dislikes, through: :cocktail_dislike_joiners
end
