// Nested Loop


// *
// * *
// * * *
// * * * *
// * * * * *

var n = 5;

for (var i = 1; i <= n; i++) {
  var star = "";
  for (var j = 1; j <= i; j++) {
    star += "* ";
  }
  console.log(star);
}


// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5


for (var i = 1; i <= n; i++){
    var result = "";
    for (var j = 1; j <= i; j++){
        result += j + " "
    }
    console.log(result)
}


// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *

for (var i = 1; i <= n; i++) {
  var star = "";
  for (var j = 1; j <= n; j++) {
    star += " * ";
  }
  console.log(star);
}