// Traverse an Array

var arr = [4, 5, 6, 7, 45]

// for (var i = 0; i < arr.length; i++){
//     console.log(arr[i])
// }

// for (var i = 0; i < arr.length; i++) {
//     arr[i] = arr[i] + 2
//     console.log(arr[i])
// }

// var sum = 0
// for (var i = 0; i < arr.length; i++) {
//     sum += arr[i]
// }
// console.log("Sum of array : "+ sum)

for (var i = 0; i < arr.length; i++){
    if (arr[i] % 2 == 0){
        console.log(arr[i] + " is even num")
    } else if (arr[i] % 2 == 1){
        console.log(arr[i] + " is odd num")
    } else {
        console.log(arr[i] + " is not a number")
    }
}