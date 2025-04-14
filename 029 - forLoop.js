// The code below will print the numbers 0, 100, 200, ..., 900 in the console

for (var i = 0; i < 1000; i+=100) {
    console.log(i + ' Latifur Rahman');
}
// The loop starts at 0 and increments by 100 each time until it reaches 1000


for ( var i =1; i <= 10; i++) {
    if (i % 2 == 1) {
        console.log(i +' is odd');
    }
}

var sum = 0;
for (var i = 1; i <= 10; i++) {
    console.log(sum + ' + ' + i + ' = ' + (sum + i));
    sum += i;
}
console.log('Sum of 1 to 10 = ' + sum);
// The above code will print the sum of numbers from 1 to 10


var her = "wifey";
for (var i = 0; i < Infinity; i++) {
  console.log(i + 1 + " - I love you " + her);
}
// The above code will print "I love you wifey" infinitely
