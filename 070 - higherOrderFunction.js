function add(a, b) {
  return a + b;
}

function manipulate(a, b, func) {
  var c = a + b;
  var d = a - b;

  function multiply() {
    var m = func(a, b);
    return c * d * m;
  }

  return multiply;
}

// here, by manipulate function, we are passing add function as a parameter and then using it in the multiply function
var multiply = manipulate(5, 4, add);
console.log(multiply()); // 81 : c = 9, d = 1, m = 9; returns 81


// here, by manipulate function, we are passing sub function as a parameter and then using it in the multiply function
var multiply = manipulate(5, 4, sub);
console.log(multiply()); // 9 : c = 9, d = 1, m = 1; returns 9


function sub(a, b) {
  return a - b;
}
