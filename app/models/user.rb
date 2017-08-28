class User < ActiveRecord::Base
  validates :name, :facebook_id, presence: true
  validates :facebook_id, uniqueness: true

  has_many :pokemon, :class_name => "Pokemon", :foreign_key => "user_id"
end
