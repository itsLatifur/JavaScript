// Function Scoping examples in JavaScript

var a = 'abc' // Global scope variable

function x() {
    var a = 20 // Local scope variable inside function x
    function y() {
        var a = 10 // Local scope variable inside function y
        console.log(a) // Output: 10 (y's local variable takes precedence)
    }
    console.log(a) // Output: 20 (x's local variable takes precedence over the global variable)
    y() // Call function y
}

x() // Call function x