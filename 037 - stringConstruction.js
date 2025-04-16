// File purpose: Demonstrates different methods to create strings and convert numbers to strings.

// Use of String constructor

// Use a string literal for a primitive string.
var str = 'Something' // simple string literal, no object wrapping

// Use String() function to perform type conversion to string.
var str2 = String('Something') // converts input to string

// Use new String() to create a String object.
var str3 = new String('Something') // creates an object, not a primitive string

console.log(str) // Outputs: Something (primitive string)
console.log(str2) // Outputs: Something (converted string)
console.log(str3) // Outputs: [object String] (string object)

// Explanation: String('') is used for conversion, new String('') creates an object.

var n = 10 // numeric value

// Direct assignment does not convert, remains a number.
var str4 = n; // assignment without conversion
console.log(str4) // Outputs: 10 (number)

// Convert number to string using String() conversion.
var str5 = String(n); // conversion to string

// Alternative conversion using toString() method.
var str6 = n.toString(); // string conversion via method
console.log(str5) // Outputs: "10" (string)

// Create a String object from a number.
var str7 = new String(n); // creates a string object from number
console.log(str6) // Outputs: "10"; string from toString()