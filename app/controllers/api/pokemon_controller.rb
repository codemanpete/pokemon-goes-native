class Api::PokemonController < ApplicationController

  # returns all of a user's pokemon.
  def index
    user = User.find(params[:user_id])
    @all_pokemon = user.pokemon
    render "/api/pokemon/index"
  end

  # creates a new pokemon, saves it, and returns all of the user's pokemon.
  def create
    pokemon = Pokemon.new(pokemon_params)
    pokemon.save!
    user = User.find(params[:user_id])
    @all_pokemon = user.pokemon
    render "/api/pokemon/index"
  end

  private

  # user_id is passed in separately from the pokemon params, so it
  # must be appended with merge.
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
