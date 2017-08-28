class CreatePokemon < ActiveRecord::Migration[5.0]
  def change
    create_table :pokemon do |t|
      t.string :name, null: false
      t.string :type1, null: false
      t.string :type2
      t.integer :level, null: false
      t.string :move1, null: false
      t.string :move2
      t.integer :number, null: false
      t.string :image_url, null: false
      t.integer :user_id, null: false
      t.timestamps null: false
    end
  end
end
