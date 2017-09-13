class Api::UsersController < ApplicationController

  # Searches for a user with the same facebook_id, if no user is found,
  # will create a new user with the given name and facebook_id.
  def index
    @user = User.find_by(facebook_id: params[:facebook_id])
    if !@user
      @user = User.new(facebook_id: params[:facebook_id], name: params[:name])
      @user.save
    end
    render "/api/users/show"
  end

end
