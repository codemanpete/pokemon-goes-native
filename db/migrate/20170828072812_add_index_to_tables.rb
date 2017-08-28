class AddIndexToTables < ActiveRecord::Migration[5.0]
  def change
    add_index :users, :facebook_id
    add_index :pokemon, :user_id
  end
end
