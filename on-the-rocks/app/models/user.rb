class User < ApplicationRecord
    has_secure_password
    belongs_to :favorite
    belongs_to :dislike
end
