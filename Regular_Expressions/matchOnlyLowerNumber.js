// Specify Only the Lower Number of Matches

let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; // Change this line
let result = haRegex.test(haStr);
console.log(result);

haStr = "Hazzah";
result = haRegex.test(haStr);
console.log(result);

haStr = "Hazzzah";
result = haRegex.test(haStr);
console.log(result);

haStr = "Hazzzzah";
result = haRegex.test(haStr);
console.log(result);

haStr = "Hazzzzzzah";
result = haRegex.test(haStr);
console.log(result);

haStr = "Hazzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzah";
result = haRegex.test(haStr);
console.log(result);