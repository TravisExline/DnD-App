class ItemsController < ApplicationController
    def index
        items = Item.all 
        render json: items, except: [:created_at, :updated_at]
    end

    def show
        item = Item.find_by(id: params[:id])
        if item
            render json: item, except: [:created_at, :updated_at]
        else
            render json: {message: "You Haven't Found That Item Yet"} 
        end
    end

    def create
        item = Item.create(items_params)
        render json: item, except: [:created_at, :updated_at]
    end

    def destroy
        item = Item.find(params[:id])
        item.destroy

        render json: item, except: [:created_at, :updated_at]
    end

    private

    def items_params
        params.require(:item).permit(:name, :category, :description, :stats)
    end
end