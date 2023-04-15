// Reuse Patterns Using Capture Groups

let repeatNum = "42 42 42";
let reRegex = /^(\d+) \1 \1$/; // Change this line
let result = reRegex.test(repeatNum);
console.log(result);

repeatNum = "100 100 100";
result = reRegex.test(repeatNum);
console.log(result);

repeatNum = "42 42 42 42";
result = reRegex.test(repeatNum);
console.log(result);

repeatNum = "42 42";
result = reRegex.test(repeatNum);
console.log(result);

repeatNum = "101 102 103";
result = reRegex.test(repeatNum);
console.log(result);

repeatNum = "1 2 3";
result = reRegex.test(repeatNum);
console.log(result);

repeatNum = "10 10 10";
result = reRegex.test(repeatNum);
console.log(result);

repeatNum = "42\t42\t42";
result = reRegex.test(repeatNum);
console.log(result);

repeatNum = "42 42 42";
result = reRegex.test(repeatNum);
console.log(result);