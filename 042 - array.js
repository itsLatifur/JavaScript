// ****** ARRAY ******

// Arrays are data structures that can hold multiple values in a single variable.

// They store items at contiguous memory locations.

// In JavaScript, arrays can contain numbers, strings, objects, other arrays, etc.

var arr = [1, 2, 3, 4, 5]; // Declare an array with 5 elements
console.log(arr);

// Accessing elements in an array using their index
// Here, the first element (1) is at index 0
console.log(arr[0]); // Output: 1

// The last element (5) is at index 4
console.log(arr[4]); // Output: 5

arr[5] =  // Adding a value at index 5 (currently incomplete, needs a value)
arr[10] = 11; // Adding a value (11) at index 10, leaving gaps in the array
console.log(arr); // Print the array, showing undefined for the gaps

console.log(arr[5]); // Accessing index 5, will output the value assigned or undefined if incomplete
console.log(arr[7]); // Accessing index 7, will output undefined as no value is assigned

console.log(arr.length); // Output the length of the array, which includes the last defined index + 1

arr[2] = 22; // Updating the value at index 2 to 22
console.log(arr); // Print the updated array

var arr2 = Array(1, 2, 3); // Creating a new array using the Array constructor
console.log(arr2); // Print the new array
