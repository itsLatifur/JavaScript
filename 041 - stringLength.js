// Define a string variable
var str = "Some String";

// Log the character at specific positions in the string
console.log(str.charAt(0)); // S
console.log(str.charAt(3)); // e
console.log(str.charAt(12)); // '' empty string (out of bounds)

// Store the character at position 12 in a variable (empty string in this case)
var str2 = str.charAt(12); // '' empty string

// Initialize a variable to calculate the length of the string
var length = 0;

// Loop to determine the length of the string manually
while (true) {
  // Check if the character at the current position is an empty string
  if (str.charAt(length) == "") {
    break; // Exit the loop if the end of the string is reached
  } else {
    length++; // Increment the length counter
  }
}

// Log the calculated length of the string
console.log(length); // 11

console.log(str.length); // 11 (using the built-in length property)

console.log("uhfhduvhudfjuj".length); // 15 (using the built-in length property)
