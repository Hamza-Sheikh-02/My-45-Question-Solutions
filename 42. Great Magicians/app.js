"use strict";
function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
function make_great(magicians) {
    for (let m = 0; m < magicians.length; m++) {
        magicians[m] = "The Great " + magicians[m];
    }
}
let magicians = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller'];
make_great(magicians);
show_magicians(magicians);
