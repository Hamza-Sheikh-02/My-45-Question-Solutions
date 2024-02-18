type Album = {
    artist: string;
    title: string;
    tracks?: number;
};

function make_album(artist: string, title: string, tracks?: number): Album {
    let album: Album = { artist: artist, title: title };

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
