// Do While Loop

var isRunning = false

while (isRunning) {
    console.log('I am running')
}
// The above code will not run because the condition is false

do {
    console.log('I am running')
} while (isRunning)
// The above code will run at least once because the condition is checked after the first iteration
// The do while loop will always run at least once, even if the condition is false
// The do while loop is useful when you want to execute a block of code at least once, regardless of the condition