// A function that takes two numbers and a callback function as arguments
function sample(a, b, cb) {
  var c = a + b; // Sum of a and b
  var d = a - b; // Difference of a and b
  var result = cb(c, d); // Pass c and d to the callback function and store the result
  return result; // Return the result of the callback
}

// A simple callback function that adds two numbers
function sum(a, b) {
  return a + b;
}

// Using the sample function with the sum callback
var result = sample(5, 8, sum); // c = 13, d = -3, result = sum(13, -3) = 10
console.log(result); // Output: 10

// Using the sample function with an inline callback that subtracts two numbers
var result2 = sample(5, 8, function (c, d) {
  return c - d; // Subtract d from c
});

console.log(result2); // Output: 16 (13 - (-3))

// Using the sample function with an inline callback that multiplies two numbers
var result3 = sample(5, 8, function (c, d) {
  return c * d; // Multiply c and d
});

console.log(result3); // Output: -39 (13 * -3)
