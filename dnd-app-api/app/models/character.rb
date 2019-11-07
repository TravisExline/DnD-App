class Character < ApplicationRecord
    belongs_to :user
    has_many :character_items
    has_many :items, through: :character_items
end