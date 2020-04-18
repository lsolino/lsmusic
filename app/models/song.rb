class Song < ApplicationRecord
  belongs_to :album
  has_one_attached :file

  validates :title, presence: true
end
