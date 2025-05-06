// A closure is a function that retains access to its outer scope, even after the outer function has finished executing.

function outerFunction(outerVariable) {
  // Outer function with a variable in its scope
  return function innerFunction(innerVariable) {
    // Inner function forms a closure and can access the outerVariable
    console.log(`Outer Variable: ${outerVariable}`);
    console.log(`Inner Variable: ${innerVariable}`);
  };
}

// Create a closure by calling the outer function
const closureExample = outerFunction("outside");

// Call the inner function with its own variable
closureExample("inside");
// Output:
// Outer Variable: outside
// Inner Variable: inside
