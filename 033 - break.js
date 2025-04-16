// Break Statement

while (true) {
  // Generate a random number between 1 and 10
  var rand = Math.floor(Math.random() * 10 + 1);

  // Check if the random number is 9
  if (rand == 9) {
    // Print a winning message and stop the loop
    console.log("Winner Winner Chicken Dinner");
    break; // Exit the loop using break
  } else {
    // Print the rolled number and continue the loop
    console.log("You rolled a " + rand);
  }
}


for (var i = 1; i < 10; i++) {
    if (i%5 == 0){
        break
    } else {
        console.log(i)
    }
}