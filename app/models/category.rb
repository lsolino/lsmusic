class Category < ApplicationRecord
  has_many :albums
  has_one_attached :image

  validates :name, presence: true
end
