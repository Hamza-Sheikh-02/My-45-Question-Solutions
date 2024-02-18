"use strict";
function make_album(artist, title, tracks) {
    let album = { artist: artist, title: title };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
let album1 = make_album('Linkin Park', 'Meteora');
let album2 = make_album('Ed Sheeran', '÷ (Divide)', 16);
let album3 = make_album('Taylor Swift', '1989', 8);
console.log(album1);
console.log(album2);
console.log(album3);
