class Article < ApplicationRecord
  
   mount_uploader :avatar, AvatarUploader

	has_many :comments, dependent: :destroy
	validates :title, presence: true,
	                  length: { minimum: 5}
end
