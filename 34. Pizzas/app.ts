let favorite_pizzas: string[] = ['Phantom', 'Arabic Ranch', 'Tarzan Tikka'];

console.log("Printing pizza names:");
for (let pizza of favorite_pizzas) {
    console.log(pizza);
}

console.log();

console.log("Printing sentences about favorite pizzas:");
for (let pizza of favorite_pizzas) {
    console.log(`I like ${pizza} pizza.`);
}

console.log();

console.log("I really love pizza!");
