// Declare a string variable 'str' and a number variable 'n'
str = '1000';
n = 10;

// Demonstrate string concatenation
console.log(str + n); // Output: 100010 (string concatenation)

// Demonstrate subtraction with type conversion
console.log(str - n); // Output: 990 (string converted to number)

// Convert string to number using Number constructor
console.log(Number(str)); // Output: 1000 (string converted to number)

// Convert string to integer using parseInt
console.log(Number.parseInt(str)); // Output: 1000 (string converted to integer)

// Convert number to string using toString method
console.log(n.toString()); // Output: '10' (number converted to string)

// Demonstrate that Infinity is a number
console.log(Number(Infinity)); // Output: Infinity (Infinity is a number)

// Convert Infinity to string
console.log(String(Infinity)); // Output: 'Infinity' (Infinity is converted to string)

// Demonstrate truthy behavior of Infinity
console.log(Boolean(Infinity)); // Output: true (Infinity is truthy)
console.log(Boolean(-Infinity)); // Output: true (-Infinity is truthy)

// Demonstrate falsy values in JavaScript
console.log(Boolean('')); // Output: false (empty string is falsy)
console.log(Boolean(0)); // Output: false (0 is falsy)
console.log(Boolean(null)); // Output: false (null is falsy)
console.log(Boolean(undefined)); // Output: false (undefined is falsy)
console.log(Boolean(NaN)); // Output: false (NaN is falsy)
console.log(Boolean(false)); // Output: false (false is falsy)

// Demonstrate truthy values in JavaScript
console.log(Boolean('0')); // Output: true (non-empty string is truthy)
console.log(Boolean('false')); // Output: true (non-empty string is truthy)
console.log(Boolean('ujuxjiji')); // Output: true (non-empty string is truthy)
console.log(Boolean(41)); // Output: true (non-zero number is truthy)
console.log(Boolean(-1)); // Output: true (non-zero number is truthy)