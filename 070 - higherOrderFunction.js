// A higher-order function is a function that takes another function as an argument or returns a function as its result.

function add(a, b) {
  return a + b; 
}

function manipulate(a, b, func) {
  // Higher-order function that takes two numbers and a function as arguments
  var c = a + b; 
  var d = a - b; 

  function multiply() {
    // Inner function that uses the passed function (`func`)
    var m = func(a, b); // Call the passed function with a and b
    return c * d * m; // Multiply c, d, and the result of func(a, b)
  }

  return multiply; // Return the inner function
}

// Example 1: Passing the `add` function as a parameter to the `manipulate` function
var multiply = manipulate(5, 4, add); // `add` is passed as the third argument
console.log(multiply()); // 81 : c = 9, d = 1, m = 9; returns 81

// Example 2: Passing the `sub` function as a parameter to the `manipulate` function
var multiply = manipulate(5, 4, sub); // `sub` is passed as the third argument
console.log(multiply()); // 9 : c = 9, d = 1, m = 1; returns 9

function sub(a, b) {
  return a - b;
}
