// File purpose: Demonstrates various string definitions and escape sequences.

var str = 'This is a "String"'; // Using single quotes allows double quotes inside without escaping.
console.log(str); // Outputs: This is a "String"
var str2 = "This is a 'String'"; // Using double quotes allows single quotes inside without escaping.
console.log(str2); // Outputs: This is a 'String'

// Examples of Escape notation
var str3 = "This is a 'String'"; // Escaping single quote within single-quoted string.
console.log(str3); // Outputs: This is a 'String'

var str4 = "This is a \nString"; // \n represents a newline.
console.log(str4); // Outputs: This is a
//          String

var str5 = "This is a \tString"; // \t represents a tab.
console.log(str5); // Outputs: This is a     String

var str6 = "This is a \\String"; // \\ escapes the backslash character.
console.log(str6); // Outputs: This is a \String

var str7 = "This is a \bString"; // \b represents a backspace.
console.log(str7); // Outputs may vary depending on console (backspace effect)

var str8 = "This is a \fString"; // \f represents a form feed.
console.log(str8); // Outputs may include a form feed character

var str9 = "This is a \rString"; // \r represents a carriage return.
console.log(str9); // Outputs may include a carriage return effect

var str10 = "This is a \vString"; // \v represents a vertical tab.
console.log(str10); // Outputs may include a vertical tab effect

var str11 = "This is a \0String"; // \0 represents the null character.
console.log(str11); // Outputs: This is a  String (null character may be invisible)