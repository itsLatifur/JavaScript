var date = new Date()

// 0 - Sunday, 1 - Monday, ..., 6 - Saturday
var today = date.getDay()

// Using switch to handle multiple conditions based on the value of 'today'
switch (today) {
    case 0:
        console.log("Today is Sunday") // Executes if today is 0 (Sunday)
        break // Exits the switch block after executing this case
    case 1:
        console.log("Today is Monday") // Executes if today is 1 (Monday)
        break
    case 2:
        console.log("Today is Tuesday") // Executes if today is 2 (Tuesday)
        break
    case 3:
        console.log("Today is Wednesday") // Executes if today is 3 (Wednesday)
        break
    case 4:
        console.log("Today is Thursday") // Executes if today is 4 (Thursday)
        break
    case 5:
        console.log("Today is Friday") // Executes if today is 5 (Friday)
        break
    case 6:
        console.log("Today is Saturday") // Executes if today is 6 (Saturday)
        break
    default:
        console.log("Invalid day") // Executes if none of the cases match
        break
}