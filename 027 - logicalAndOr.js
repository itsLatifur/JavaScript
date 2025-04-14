var name = ''

var fullname = ''

// Using logical OR (||) to assign a default value if 'name' is empty
var fullname = name || 'Latifur Rahman'
console.log(fullname)

// Using logical AND (&&) as a shortcut for conditional execution
var isOk = true
isOk && console.log('Everything is OK')

// Demonstrating the behavior when 'isOk' is false
var isOk = false
isOk && console.log('Everything is Not OK') // This will not execute because 'isOk' is false
