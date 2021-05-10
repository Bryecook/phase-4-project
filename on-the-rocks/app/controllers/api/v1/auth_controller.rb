class Api::V1::AuthController < ApplicationController

    def login
        
        user = User.find_by(name: auth_param[:name])
        if user && user.authenticate(auth_param[:password])
            #  send back a token
            
            render json: {name: user.name, token: JWT.encode({user_id: user.id}, 'hooplah')}
            
            else 
                # send an errord
                # byebug
                render json: {error: "Incorrect name or password"}
            end
    end
    
        
    
        # strong params
    def auth_param
        params.require(:auth).permit(:name, :password)
    end

end 

