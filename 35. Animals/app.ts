let animals: string[] = ['dog', 'cat', 'rabbit'];

console.log("Printing animal names:");
for (let animal of animals) {
    console.log(animal);
}

console.log();

console.log("Printing statements about animals:");
for (let animal of animals) {
    console.log(`A ${animal} would make a great pet.`);
}

console.log();

console.log("Any of these animals would make a great pet!");
