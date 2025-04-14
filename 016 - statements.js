// Examples of statements

 console.log('Hello World'); // Output: Hello World

// Variable declarations
var str = 'string'; // A string variable
var number = 10 + (30 / 5) * 5; // Arithmetic operation resulting in 40

// Comparison statement
var a = 10;
var b = 20;
var c = a <= b; // Result: true (10 is less than or equal to 20)

// Conditional statement
if (c) {
    console.log('a is less than or equal to b'); // Output: a is less than or equal to b
} else {
    console.log('a is greater than b');
}

// Loop statement
for (var i = 0; i < 5; i++) {
    console.log('Iteration:', i); // Output: Iteration: 0, 1, 2, 3, 4
}

// Function declaration and invocation
function greet(name) {
    return 'Hello, ' + name + '!';
}
console.log(greet('Alice')); // Output: Hello, Alice!