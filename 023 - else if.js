/******* Examples of else if *******/

// Example 1: Comparing two variables
var a = 10;
var b = 20;

if (a > b) {
  console.log("a is greater than b"); // Executes if a is greater than b
} else if (a < b) {
  console.log("a is less than b"); // Executes if a is less than b
} else {
  console.log("a is equal to b"); // Executes if a is equal to b
}

// Example 2: Grading system based on score
var grade = 85;

if (grade >= 90) {
  console.log("Grade: A"); // Grade is A for scores 90 and above
} else if (grade >= 80) {
  console.log("Grade: B"); // Grade is B for scores between 80 and 89
} else if (grade >= 70) {
  console.log("Grade: C"); // Grade is C for scores between 70 and 79
} else if (grade >= 60) {
  console.log("Grade: D"); // Grade is D for scores between 60 and 69
} else if (grade >= 50) {
  console.log("Grade: E"); // Grade is E for scores between 50 and 59
} else {
  console.log("Grade: F"); // Grade is F for scores below 50
}


