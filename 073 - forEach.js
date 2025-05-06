// Examples of forEach

var arr = [1, 2, 3, 4, 5]; // Initialize an array with 5 elements

// var sum = 0;
// arr.forEach(function (value, index, arr) {
//   //   console.log(value, index, arr);
//   sum += value;
// });

// console.log(sum);

// Custom implementation of forEach function
function forEach(arr, cb) {
  for (var i = 0; i < arr.length; i++) {
    cb(arr[i], i, arr); // Call the callback function with value, index, and array
  }
}

var sum = 0;
// Using the custom forEach to calculate the sum of array elements
forEach(arr, function (value, index, arr) {
  console.log(value, index, arr); // Log the current value, index, and array
  sum += value; // Add the current value to the sum
});

console.log(sum); // Output the total sum of the array elements

// Using the custom forEach to modify the array elements
forEach(arr, function (value, index, arr) {
  arr[index] = value + 5; // Add 5 to each element and update the array
});
console.log(arr); // Output the modified array
