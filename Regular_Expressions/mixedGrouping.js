// Check For Mixed Grouping of Characters

let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin|Eleanor) (([A-Z]\.?|[A-Z][a-z]+) )?Roosevelt/; // Change this line
let result = myRegex.test(myString); // Change this line
// After passing the challenge experiment with myString and see how the grouping works
console.log(result);

myString = "Franklin D. Roosevelt";
result = myRegex.test(myString);
console.log(result);

myString = "Eleanor Roosevelt";
result = myRegex.test(myString);
console.log(result);

myString = "Franklin Rosevelt";
result = myRegex.test(myString);
console.log(result);

myString = "Frank Roosevelt";
result = myRegex.test(myString);
console.log(result);

myString = "FranklinRoosevelt";
result = myRegex.test(myString);
console.log(result);

myString = "EleanorRoosevelt";
result = myRegex.test(myString);
console.log(result);