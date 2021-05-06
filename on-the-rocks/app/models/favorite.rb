class Favorite < ApplicationRecord
    belongs_to :user
    has_many :cocktail_favorite_joiners
    has_many :cocktails, through: :cocktail_favorite_joiners 
end
