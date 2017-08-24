class User < ActiveRecord::Base

  validates :name, :facebook_id, presence: true
  validates :facebook_id, uniqueness: true
  
end
