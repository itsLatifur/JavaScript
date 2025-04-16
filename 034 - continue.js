// continue statement example: Iterates numbers 0 to 9 and skips printing when the number is 3 or 7

for (var i = 0; i < 10; i++){
    // If the number is 3 or 7, skip the iteration
    if (i == 3 || i == 7){
        continue
    } else {
        // Otherwise, print the current number
        console.log(i)
    }
}

// Use it id you want to skip a specific iteration in a loop
// The continue statement is used to skip the current iteration of a loop and move to the next iteration.