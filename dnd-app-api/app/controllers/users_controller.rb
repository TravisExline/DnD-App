class UsersController < ApplicationController
    def index
        users = User.all 
        render json: users, :include => {
            characters: {
                except: [:created_at, :updated_at]
            }
        }, except: [:created_at, :updated_at]
    end

    def show
        user = User.find_by(id: params[:id])
        if user
            render json: user, :include => {
                characters: {
                    except: [:created_at, :updated_at]
                }
            }, except: [:created_at, :updated_at]
        else
            render json: {message: "User Not Found"}
        end
    end

    def create
        user = User.find_or_create_by(users_params)
        render json: user, :include => {
            characters: {
                except: [:created_at, :updated_at]
            }
        }, except: [:created_at, :updated_at]
    end

    private

    def users_params
        params.require(:user).permit(:name, :email)
    end
end