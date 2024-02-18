function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

function make_great(magicians: string[]): string[] {
    let modified_magicians: string[] = [];
    for (let magician of magicians) {
        modified_magicians.push("The Great " + magician);
    }
    return modified_magicians;
}

let magicians: string[] = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller'];

let copied_magicians: string[] = magicians.slice();

let great_magicians: string[] = make_great(copied_magicians);

console.log("Original Magicians:");
show_magicians(magicians);

console.log("\nMagicians with 'The Great' added:");
show_magicians(great_magicians);
