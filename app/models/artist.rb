class Artist < ApplicationRecord
  has_many :albums, -> { includes :songs }
  has_many :songs, :through => :albums
  has_one_attached :photo

  validates :name, presence: true
end
