var date = new Date()
console.log(date.toDateString()) // Output: Current date in the format "Day Month Date Year"
console.log(date.toTimeString()) // Output: Current time in the format "Hour:Minute:Second GMT+Offset"

console.log(date.toLocaleString()) // Output: Current date and time in the format "MM/DD/YYYY, HH:MM:SS AM/PM" or "DD/MM/YYYY, HH:MM:SS AM/PM" based on locale

console.log(date.getFullYear()) // Output: Current year (4 digits)
console.log(date.getMonth()) // Output: Current month (0-11, where 0 is January and 11 is December)
console.log(date.getDate()) // Output: Current date (1-31)
console.log(date.getDay()) // Output: Current day of the week (0-6, where 0 is Sunday and 6 is Saturday)
console.log(date.getHours()) // Output: Current hour (0-23)
console.log(date.getMinutes()) // Output: Current minutes (0-59)
console.log(date.getSeconds()) // Output: Current seconds (0-59)
console.log(date.getMilliseconds()) // Output: Current milliseconds (0-999)