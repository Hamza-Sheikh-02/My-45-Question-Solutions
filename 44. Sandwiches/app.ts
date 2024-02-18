function make_sandwich(...items: string[]): void {
    console.log("Making a sandwich with:");
    for (let item of items) {
        console.log(`- ${item}`);
    }
    console.log("Enjoy your sandwich!");
}

make_sandwich('ham', 'cheese', 'lettuce');
make_sandwich('turkey', 'swiss cheese');
make_sandwich('peanut butter', 'jelly');
