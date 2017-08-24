class Api::UsersController < ApplicationController

  def show
    @user = User.find_by(facebook_id: params[:facebook_id])
    if !@user
      @user = User.new(user_params)
      @user.save
    end
  end

  private

  def user_params
    params.require(:user).permit(
      :name,
      :facebook_id
    )
  end

end
