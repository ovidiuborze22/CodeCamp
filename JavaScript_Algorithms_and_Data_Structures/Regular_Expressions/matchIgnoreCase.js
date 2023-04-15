// Ignore Case While Matching

let myString = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i; // Change this line
let result = fccRegex.test(myString);
console.log(result);

myString = "FreeCodeCamp";
result = fccRegex.test(myString);
console.log(result);

myString = "FReeCodeCAmp";
result = fccRegex.test(myString);
console.log(result);

myString = "FrEeCoDeCamp";
result = fccRegex.test(myString);
console.log(result);