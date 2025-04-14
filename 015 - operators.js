// Arithmetic Operators
// + - * / % ++ --

// Declaring variables
var a = 11;
var b = 6;
var c = 7;

// Using the modulus operator to find the remainder of 11 divided by 6
console.log(a % b); // Output: 5

// Pre-increment: increments 'a' by 1 and then returns the value
console.log(++a); // Output: 12

// Post-increment: returns the value of 'b' and then increments it
console.log(b++); // Output: 6
console.log(b);   // Output: 7 (after increment)

// Pre-decrement: decrements 'c' by 1 and then returns the value
console.log(--c); // Output: 6

// Post-decrement: returns the value of 'c' and then decrements it
console.log(c--); // Output: 6
console.log(c);   // Output: 5 (after decrement)

// Compound Assignment Operators
// += -= *= /= %=
// Using compound assignment operators to perform arithmetic operations and assign the result

var d = 10;
var e = 5;

d += e; // d = d + e
console.log(d); // Output: 15 (10 + 5)
d -= e; // d = d - e
console.log(d); // Output: 10 (15 - 5)
d *= e; // d = d * e
console.log(d); // Output: 50 (10 * 5)
d /= e; // d = d / e
console.log(d); // Output: 10 (50 / 5)
d %= e; // d = d % e
console.log(d); // Output: 0 (10 % 5)

// Comparison Operators
// == === != !== > < >= <=
// Using comparison operators to compare values

var x = 10;
var y = 20;
var z = 20;

console.log(x == y); // Output: false (10 is not equal to 20)
console.log(x === y); // Output: false (10 is not strictly equal to 20)
console.log(y == z); // Output: true (20 is equal to 20)
console.log(y === z); // Output: true (20 is strictly equal to 20)
console.log(x != y); // Output: true (10 is not equal to 20)
console.log(x !== y); // Output: true (10 is not strictly equal to 20)
console.log(x > y); // Output: false (10 is not greater than 20)
console.log(x < y); // Output: true (10 is less than 20)
console.log(x >= y); // Output: false (10 is not greater than or equal to 20)
console.log(x <= y); // Output: true (10 is less than or equal to 20)


var f = '50';
var g = 50;

// Loose equality (==) checks value only, not type
console.log(f == g); // Output: true (loose equality, value is the same)

// Strict equality (===) checks both value and type
console.log(f === g); // Output: false (strict equality, types are different)

// Loose inequality (!=) checks value only, not type
console.log(f != g); // Output: false (loose inequality, value is the same)

// Strict inequality (!==) checks both value and type
console.log(f !== g); // Output: true (strict inequality, types are different)

// Logical Operators
// && (AND): returns true if both conditions are true
// || (OR): returns true if at least one condition is true
// ! (NOT): inverts the boolean value

// Bitwise Operators
// & (AND): performs bitwise AND
// | (OR): performs bitwise OR
// ^ (XOR): performs bitwise XOR
// ~ (NOT): inverts all bits
// << (Left Shift): shifts bits to the left
// >> (Right Shift): shifts bits to the right
// >>> (Zero-fill Right Shift): shifts bits to the right with zero-fill

// typeof operator
// Determines the type of a variable or value
console.log(typeof 'String'); // Output: string
console.log(typeof 123); // Output: number