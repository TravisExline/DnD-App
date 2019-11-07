class CharacterItemsController < ApplicationController
    def index
        character_items = CharacterItem.all 
        render json :character_items, except: [:created_at, :updated_at]
    end

    def create 
        character_item = CharacterItem.create(character_items_params)
        character = character_item.character
        render json: character, :include => {
            character_items: {
                include: :item 
            }
        }, except: [:created_at, :updated_at]
    end

    def remove
        character_item = CharacterItem.find_by(character_items_params)
        character_item.destroy

        render json: character, :include => {
            character_items: {
                include: :item 
            }
        }, except: [:created_at, :updated_at]
    end

    private

    def character_items_params
        params.require(:character_item).permit(:character_id, :item_id)
    end
end