// && || !

// Logical AND (&&) truth table
// A && B
// true && true = true
// true && false = false
// false && true = false
// false && false = false

// Logical OR (||) truth table
// A || B
// true || true = true
// true || false = true
// false || true = true
// false || false = false

// Logical NOT (!) truth table
// !A
// !true = false
// !false = true

// Combined logical operations
// A && B || C
// true && false || true
// true && true || false
// false && true || true
// false && false || false

// Variable declarations
var a = 30; // First number
var b = 20; // Second number
var c = 40; // Third number
var d = 30; // Fourth number

// Check if both conditions are true using logical AND (&&)
if (a > b && c > d) {
  console.log("Both conditions are true"); // Executes if both conditions are true
} else {
  console.log("At least one condition is false"); // Executes if at least one condition is false
}

// Check if at least one condition is true using logical OR (||)
if (a > b || c > d) {
  console.log("At least one condition is true"); // Executes if at least one condition is true
} else {
  console.log("Both conditions are false"); // Executes if both conditions are false
}

// Logical NOT (!) operation
var check1 = !(a > b); // Negates the result of (a > b)
console.log(check1); // true because (a > b) is true, and !true is false

var check2 = !(a < b); // Negates the result of (a < b)
console.log(check2); // false because (a < b) is false, and !false is true