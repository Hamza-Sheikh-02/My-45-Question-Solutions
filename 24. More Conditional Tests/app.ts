// Tests for equality and inequality with strings :
let str1 = 'hello';
let str2 = 'world';

console.log("Is str1 == 'hello'? I predict True.");
console.log(str1 == 'hello');

console.log("Is str1 != str2? I predict True.");
console.log(str1 != str2);

// Tests using the lower case function :
let str = 'Hello';

console.log("Is str.toLowerCase() == 'hello'? I predict True.");
console.log(str.toLowerCase() == 'hello');

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to:
let a = 5;
let b = 10;

console.log("Is a > b? I predict False.");
console.log(a > b);

console.log("Is a < b? I predict True.");
console.log(a < b);

console.log("Is a >= 5? I predict True.");
console.log(a >= 5);

console.log("Is b <= 10? I predict True.");
console.log(b <= 10);

// Tests using "and" and "or" operators:
let x = 5;
let y = 10;

console.log("Is x > 3 and y < 15? I predict True.");
console.log(x > 3 && y < 15);

console.log("Is x < 3 or y > 15? I predict False.");
console.log(x < 3 || y > 15);

// Test whether an item is in an array:
let numbers = [1, 2, 3, 4, 5];

console.log("Is 3 in numbers? I predict True.");
console.log(numbers.includes(3));

// Test whether an item is not in an array:
let fruits = ['apple', 'banana', 'orange'];

console.log("Is 'grape' not in fruits? I predict True.");
console.log(!fruits.includes('grape'));
