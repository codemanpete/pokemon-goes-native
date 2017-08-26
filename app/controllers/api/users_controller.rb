class Api::UsersController < ApplicationController

  def index
    @user = User.find_by(facebook_id: params[:facebook_id])
    if !@user
      @user = User.new(facebook_id: params[:facebook_id], name: params[:name])
      @user.save
    end
    render "/api/users/show"
  end

end
