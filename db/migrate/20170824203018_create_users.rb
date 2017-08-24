class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :name, null: false
      t.string :facebook_id, null: false
      t.timestamps null: false
    end
  end
end
