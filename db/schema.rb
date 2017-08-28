# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170828072812) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "pokemon", force: :cascade do |t|
    t.string   "name",       null: false
    t.string   "type1",      null: false
    t.string   "type2"
    t.integer  "level",      null: false
    t.string   "move1",      null: false
    t.string   "move2"
    t.integer  "number",     null: false
    t.string   "image_url",  null: false
    t.integer  "user_id",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_pokemon_on_user_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "name",        null: false
    t.string   "facebook_id", null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["facebook_id"], name: "index_users_on_facebook_id", using: :btree
  end

end
