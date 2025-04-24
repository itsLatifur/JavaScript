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


function test(n) {
    function a() {
        return n % 3 == 0 // Check if n is divisible by 3
    }
    function b() {
        return n % 5 == 0 // Check if n is divisible by 5
    }

    if (a() && b()) { // Check if n is divisible by both 3 and 5
        console.log(n + ' : divisible by both') // Output if divisible by both
    } else {
        console.log(n + ' : not divisible by both') // Output if not divisible by both
    }
}

test(15) // Call test with 15 (divisible by both 3 and 5)
test(10) // Call test with 10 (not divisible by both 3 and 5)