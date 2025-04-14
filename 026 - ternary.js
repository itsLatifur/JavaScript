var n = 10
var str = ''

if (n % 2 == 0) {
  str = 'EVEN'
} else {
  str = 'ODD'
}

console.log(str)

// Can do it in one line using ternary operator
var result = (n % 2 == 0) ? 'EVEN' : 'ODD'
console.log(result)

// Ternary operator is a shorthand for if-else statements
// Syntax: condition ? expression1 : expression2
// condition ? true side : false side


// Example: Check if a number is positive or negative
var number = -5
var result = (number > 0) ? 'Positive' : 'Negative'
console.log(result) // Output: Negative

// Can use it directly without using a variable

console.log((number > 0) ? 'Positive' : 'Negative') // Output: Negative