// var i = 0
// while (i < 5) {
//     console.log(i + ' - Latifur Rahman')
//     i++
// }

var isRunning = true

while (isRunning) {
    // Generate a random number between 1 and 10
    var rand = Math.floor(Math.random() * 10 + 1)
    
    // Check if the random number is 9
    if (rand == 9) {
        // Print a winning message and stop the loop
        console.log('Winner Winner Chicken Dinner')
        isRunning = false
    } else {
        // Print the rolled number and continue the loop
        console.log('You rolled a ' + rand)
    }
}