class Artist < ApplicationRecord
  has_many :albums
  has_one_attached :photo

  validates :name, presence: true
end
