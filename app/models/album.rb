class Album < ApplicationRecord
  belongs_to :category
  belongs_to :artist
  has_many :songs
  has_one_attached :cover

  validates :title, presence: true
  validates :date, presence: true
end
