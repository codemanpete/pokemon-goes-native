class Pokemon < ActiveRecord::Base
  validates :name, :type1, :level, :move1, :number, :image_url, :user_id, presence: true

  belongs_to :user, :class_name => "User", :foreign_key => "user_id"
end
