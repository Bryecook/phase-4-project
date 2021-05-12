class User < ApplicationRecord
    has_secure_password
    has_one :favorite
    has_one :dislike

    def favorites
        self.favorite.cocktails
    end
    
end
