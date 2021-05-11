class ApplicationController < ActionController::API
    def logged_in?
        # byebug
        headers = request.headers['Authorization']

        token = headers.split(" ")[1]

        user_id = JWT.decode(token, 'hooplah')[0]['user_id']
        user = User.find(user_id)
        if user
           user # byebug 
        else
            user = nil
        end
        render json:{error: 'Please Log In'} unless user

    end
end
