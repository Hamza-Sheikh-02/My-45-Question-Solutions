"use strict";
function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
function make_great(magicians) {
    let modified_magicians = [];
    for (let magician of magicians) {
        modified_magicians.push("The Great " + magician);
    }
    return modified_magicians;
}
let magicians = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller'];
let copied_magicians = magicians.slice();
let great_magicians = make_great(copied_magicians);
console.log("Original Magicians:");
show_magicians(magicians);
console.log("\nMagicians with 'The Great' added:");
show_magicians(great_magicians);
