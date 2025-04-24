// First class function

function add(a, b){
    return a+b
}

// 1. function can be stored in a variable
var sum = add
console.log(sum(5, 10))
console.log('This is a ' + typeof sum)

// 2. can be stored in an object
var obj = {
    sum: add
}
console.log(obj)
console.log(obj.sum(7, 7))

// 3. can be stored in an array
var arr = []
arr.push(add)
console.log(arr)
console.log(arr[0](5, 3))

// 4. can create as Need
setTimeout(function (){
    console.log('I have created...')
}, 100)