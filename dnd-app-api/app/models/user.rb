class User < ApplicationRecord
    has_many :characters
    has_many :character_items, through: :characters
    has_many :items, through: :character_items
end