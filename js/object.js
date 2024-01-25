const playlist = {
  name: 'Мой супер плейлист',
  rating: 5,
  tracks: ['трек-1', 'трек-2', 'трек-3'],
  trackCount: 3,
  changeName(newName) { 
    console.log(" this in changeName", this);
    this.name = newName;
  },
  addTrack(track) { 
    this.tracks.push(track);
    this.trackCount = this.tracks.length;
  },
  updateRating(newRating) { 
    this.rating = newRating;
  },
};


// console.log(playlist.tracks);
// console.log(playlist['rating']);

// playlist.tracks.push("Mango");

console.log(playlist);
playlist.changeName("new Name");
console.log(playlist);
playlist.addTrack('New track');
console.log(playlist);
playlist.updateRating(8);
console.log(playlist);
playlist.addTrack('Mango');
console.log(playlist);
