var a = 'abc'
var b = 'bcd'

console.log(a == b) // false
console.log(a > b) // false
console.log(a < b) // true

console.log('a' > 'Z') // true
// in Javascript, 'a' is greater than 'Z' because the character codes for lowercase letters are greater than those for uppercase letters.

var c = 'aaaaaaZ'
var d = 'aaaaaaz'

console.log(c > d) // false because 'Z' is less than 'z' in character code
console.log(c < d) // true because 'Z' (90) is less than 'z' (122) in character code order

console.log('001' == 1) // true because '001' the string is converted to the number 1

console.log('001' === 1) // false because strict equality (===) does not perform type conversion; '001' remains a string