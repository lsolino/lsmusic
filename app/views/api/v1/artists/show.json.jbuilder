json.name @artist.name
json.photo_url url_for(@artist.photo)
 
json.albums @artist.albums.each do |album|
  json.id album.id
  json.title album.title
  json.cover_url url_for(album.cover)
  json.album_id album.id
  json.favorite current_user.is_favorite? 'Album', album.id
end

json.songs @artist.songs.each do |song|
  json.id song.id
  json.title song.title
  json.file_url url_for(song.file)
  json.album_id song.album.id
  json.favorite current_user.is_favorite? 'Song', song.id
end