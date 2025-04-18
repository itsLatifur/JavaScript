var a = 'I am'
var b = 'Latifur Rahman'

// Combining strings using concat() and adding a space between them
var c = a.concat(' ', b)
console.log(c) // Output: I am Latifur Rahman

// Using substr() to extract a substring starting at index 0 with a length of 4
var d = c.substr(0, 4)
console.log(d) // Output: I am
// Using substr() to extract a substring starting at index 5 to the end of the string
var e = c.substr(5)
console.log(e) // Output: Latifur Rahman

// Using substring() to extract a section of the string between index 5 (inclusive) and 13 (exclusive)
var f = c.substring(5, 13)
console.log(f) // Output: Latifur

// Using charAt() to get the character at specific indices
console.log(c.charAt(0)) // Output: I
console.log(c.charAt(1)) // Output: a

// Using startsWith() to check if the string begins with 'I am'
console.log(c.startsWith('I am')) // Output: true
// Using endsWith() to check if the string ends with 'Rahman'
console.log(c.endsWith('Rahman')) // Output: true
// Using includes() to check if the string contains 'am'
console.log(c.includes('am')) // Output: true
// Using indexOf() to find the first occurrence index of 'am'
console.log(c.indexOf('am')) // Output: 2
// Using lastIndexOf() to find the last occurrence index of 'am'
console.log(c.lastIndexOf('am')) // Output: 5

// Using toUpperCase() to convert the entire string to uppercase
console.log(c.toUpperCase()) // Output: I AM LATIFUR RAHMAN
// Using toLowerCase() to convert the entire string to lowercase
console.log(c.toLowerCase()) // Output: i am latifur rahman

// Using trim() to remove whitespace from both ends of a string
console.log('         uhuujuju  '.trim()) // Output: uhuujuju

// Using split() to break the string into an array of substrings using space as the delimiter
console.log(c.split(' ')) // Output: [ 'I', 'am', 'Latifur', 'Rahman' ]

// Using replace() to replace the first occurrence of 'am' with 'are'
console.log(c.replace('am', 'are')) // Output: I are Latifur Rahman
// Using replace() with a global regex to replace all occurrences of 'am' with 'are'
console.log(c.replace(/am/g, 'are')) // Output: I are Latifur Rahman

// Using slice() to extract a section of the string from the beginning to index 4 (exclusive)
console.log(c.slice(0, 4)) // Output: I am
// Using slice() to extract a section of the string from index 5 to the end
console.log(c.slice(5)) // Output: Latifur Rahman

// Using repeat() to duplicate the entire string 5 times
console.log(c.repeat(5)) // Output: I am Latifur RahmanI am Latifur RahmanI am Latifur RahmanI am Latifur RahmanI am Latifur Rahman