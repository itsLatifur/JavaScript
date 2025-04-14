// Declare a variable 'a' and assign a string value to it
let a = "Hello, World!";
console.log(a); // Output: Hello, World!
// Declare a variable 'b' and assign a number value to it
let b = 42;
console.log(b); // Output: 42
// Declare a variable 'c' and assign a boolean value to it
let c = true;
console.log(c); // Output: true
// Declare a variable 'd' and assign an object value to it
let d = { name: "Alice", age: 25 };
console.log(d); // Output: { name: "Alice", age: 25 }
// Declare a variable 'e' and assign an array value to it
let e = [1, 2, 3, 4, 5];
console.log(e); // Output: [1, 2, 3, 4, 5]
// Declare a variable 'f' and assign a function value to it
let f = function() {
    console.log("This is a function");
};
f(); // Output: This is a function
// Declare a variable 'g' and assign a null value to it
let g = null;
console.log(g); // Output: null
// Declare a variable 'h' and assign an undefined value to it
let h = undefined;
console.log(h); // Output: undefined
// Declare a variable 'i' and assign a symbol value to it
let i = Symbol("unique");
console.log(i); // Output: Symbol(unique)
// Declare a variable 'j' and assign a BigInt value to it
let j = BigInt(12345678901234567890);
console.log(j); // Output: 12345678901234567890n
// Declare a variable 'k' and assign a regular expression value to it
let k = /[a-z]/;
console.log(k); // Output: /[a-z]/
// Declare a variable 'l' and assign a date value to it
let l = new Date();
console.log(l); // Output: Current date and time (e.g., 2023-03-15T12:00:00.000Z)
// Declare a variable 'm' and assign a map value to it
let m = new Map();
console.log(m); // Output: Map(0) {}
// Declare a variable 'n' and assign a set value to it
let n = new Set();
console.log(n); // Output: Set(0) {}
// Declare a variable 'o' and assign a weak map value to it
let o = new WeakMap();
console.log(o); // Output: WeakMap {}
// Declare a variable 'p' and assign a weak set value to it
let p = new WeakSet();
console.log(p); // Output: WeakSet {}
// Declare a variable 'q' and assign a promise value to it
let q = new Promise((resolve, reject) => {
    resolve("Promise resolved");
});
q.then(console.log); // Output: Promise resolved
// Declare a variable 'r' and assign a generator function value to it
function* r() {
    yield 1;
    yield 2;
    yield 3;
}
const gen = r();
console.log(gen.next().value); // Output: 1
console.log(gen.next().value); // Output: 2
console.log(gen.next().value); // Output: 3
// Declare a variable 's' and assign an async function value to it
async function s() {
    return "Async function resolved";
}
s().then(console.log); // Output: Async function resolved
// Declare a variable 't' and assign a class value to it
class t {
    constructor(name) {
        this.name = name;
    }
}
const instance = new t("Example");
console.log(instance.name); // Output: Example
// Declare a variable 'u' and assign a module value to it
// (Note: Modules cannot be assigned to variables in the same way as other types)

// Example of 'const' declaration
const pi = 3.14159; // 'pi' cannot be reassigned because it's a constant
console.log(`Value of pi: ${pi}`);
console.log(pi); // Output: 3.14159

// Example of 'var' declaration
var globalVar = "I am function-scoped";
console.log(globalVar); // Output: I am function-scoped
function testVarScope() {
    var localVar = "I am local to this function";
    console.log(localVar);
}
testVarScope();
// console.log(localVar); // Uncommenting this will throw an error

// Example of block scope with 'let' and 'const'
if (true) {
    let blockScopedLet = "I am block-scoped";
    const blockScopedConst = "I am also block-scoped";
    console.log(blockScopedLet);
    console.log(blockScopedConst);
}
// console.log(blockScopedLet); // Uncommenting this will throw an error

// Example of hoisting
console.log(hoistedVar); // Outputs: undefined (hoisted declaration, but not initialization)
// console.log(hoistedLet); // Uncommenting this will throw an error (not hoisted)
var hoistedVar = "I am hoisted";
console.log(hoistedVar); // Output: I am hoisted