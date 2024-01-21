const playlist = {
  name: 'Мой супер плейлист',
  rating: 5,
  tracks: ['трек-1', 'трек-2', 'трек-3'],
  trackCount: 3,
};
console.log(playlist.tracks);
console.log(playlist['rating']);

playlist.tracks.push("Mango");
console.log(playlist);

