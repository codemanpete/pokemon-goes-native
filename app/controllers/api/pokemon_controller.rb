class Api::PokemonController < ApplicationController

  def index
    user = User.find(params[:user_id])
    @all_pokemon = user.pokemon
    render "/api/pokemon/index"
  end

  def create
    pokemon = Pokemon.new(pokemon_params)
    pokemon.save!
    user = User.find(params[:user_id])
    @all_pokemon = user.pokemon
    render "/api/pokemon/index"
  end

  private

  def pokemon_params
    params.require(:pokemon).permit(
      :name,
      :type1,
      :type2,
      :level,
      :move1,
      :move2,
      :number,
      :image_url
    ).merge(user_id: params[:user_id])
  end

end
