// Specify Upper and Lower Number of Matches

let ohStr = "Ohh no";
let ohRegex = /Oh{3,6}\sno/; // Change this line
let result = ohRegex.test(ohStr);
console.log(result);

ohStr = "Ohhh no";
result = ohRegex.test(ohStr);
console.log(result);

ohStr = "Ohhhh no";
result = ohRegex.test(ohStr);
console.log(result);

ohStr = "Ohhhhh no";
result = ohRegex.test(ohStr);
console.log(result);

ohStr = "Ohhhhhh no";
result = ohRegex.test(ohStr);
console.log(result);

ohStr = "Ohhhhhhh no";
result = ohRegex.test(ohStr);
console.log(result);