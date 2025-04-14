// Constants in the Math object
console.log(Math.PI); // Output: 3.141592653589793 (Value of π)
console.log(Math.E); // Output: 2.718281828459045 (Euler's number)
console.log(Math.SQRT2); // Output: 1.4142135623730951 (Square root of 2)
console.log(Math.SQRT1_2); // Output: 0.7071067811865476 (Square root of 1/2)

// Rounding methods
console.log(Math.ceil(5.45)); // Output: 6 (Rounds up to the nearest integer)
console.log(Math.floor(5.45)); // Output: 5 (Rounds down to the nearest integer)
console.log(Math.round(5.51)); // Output: 6 (Rounds to the nearest integer)
console.log(Math.round(5.49)); // Output: 5 (Rounds to the nearest integer)

// Finding maximum and minimum values
console.log(Math.max(5, 10, 15)); // Output: 15 (Largest value in the list)
console.log(Math.min(5, 10, 15)); // Output: 5 (Smallest value in the list)

// Exponentiation and square root
console.log(Math.pow(2, 3)); // Output: 8 (2 raised to the power of 3)
console.log(Math.sqrt(25)); // Output: 5 (Square root of 25)

// Incorrect usage of Math.SQRT1_2 (fixing comment)
console.log(Math.SQRT1_2(9)); // Error: Math.SQRT1_2 is a constant, not a function

// Absolute value
console.log(Math.abs(-5)); // Output: 5 (Absolute value of -5)

// Generating random numbers
console.log(Math.random()); // Output: Random number between 0 (inclusive) and 1 (exclusive)
console.log(Math.random() * 100); // Output: Random number between 0 and 100
console.log(Math.random() * 50 + 1); // Output: Random number between 1 and 50
console.log(Math.floor(Math.random() * 50) + 1); // Output: Random integer between 1 and 50

