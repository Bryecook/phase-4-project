class Dislike < ApplicationRecord
    belongs_to :user
    has_many :cocktail_dislike_joiners
    has_many :cocktails, through: :cocktail_dislike_joiners 
end
