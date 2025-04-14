// ******** NUMBERS ********

// Declare a variable 'n' and assign an integer value to it
var n = 1451; // Represents an integer number

// Declare a variable 'f' and assign a floating-point value to it
var f = 3.14; // Represents a floating-point number

// Convert a string to a number using the Number constructor
var nn = Number('45.45'); // Converts the string '45.45' to the number 45.45
console.log(nn); // Output: 45.45

// Parse the number as a floating-point value
console.log(Number.parseFloat(nn)); // Output: 45.45 (already a number, so no change)

// Parse the number as an integer
console.log(Number.parseInt(nn)); // Output: 45 (extracts the integer part)

// Log the maximum numeric value that JavaScript can represent
console.log(Number.MAX_VALUE); // Output: 1.7976931348623157e+308

// Log the minimum safe integer value in JavaScript
console.log(Number.MIN_SAFE_INTEGER); // Output: -9007199254740991

// Log the result of dividing 1 by 0 (infinity in JavaScript)
console.log(1 / 0); // Output: Infinity

// Log the result of an invalid mathematical operation
console.log('abc' * 2); // Output: NaN (Not a Number)