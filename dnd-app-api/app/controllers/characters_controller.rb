class CharactersController < ApplicationController
    def index
        characters = Character.all 
        render json: characters, :include => {
            character_items: {
                include: :item 
            }
        }, except: [:created_at, :updated_at]
    end

    def show
        character = Character.find_by(id: params[:user_id])
        if character
            render json: character, :include => {
                character_items: {
                    include: :item 
                }
            }, except: [:created_at, :updated_at]
        else
            render json: {message: "This Character Does Not Exist"}
        end
    end

    def create
        character = Character.create(characters_params)
        render json: character, :include => {
            character_items: {
                include: :item 
            }
        }, except: [:created_at, :updated_at]
    end

    private

    def characters_params
        params.require(:character).permit(:name, :spec, :race, :age, :str, :dex, :const, :int, :wis, :char, :details, :user_id)
    end
end