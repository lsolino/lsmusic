class Category < ApplicationRecord
  has_many :albums
  has_one_attached :image

  validates :name, presence: true

  def artists
    Artist.joins(:albums).where(albums: { id: self.albums.ids }).distinct
  end
 
  def songs
    Song.joins(:album).where(songs: { id: self.albums.ids }).distinct
  end
  
end
