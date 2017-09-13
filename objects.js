var playlist = new Object({})

function updatePlaylist(pl, newArtist, newSong){
  pl.newArtist=newSong
  return pl
}

function removeFromPlaylist(pl, name){
  delete pl.name
  return pl
}
