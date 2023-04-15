// Match Non-Whitespace Characters

let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // Change this line
let result = sample.match(countNonWhiteSpace);
console.log(result);

sample = "Men are from Mars and women are from Venus.";
result = sample.match(countNonWhiteSpace);
console.log(result);

sample = "Space: the final frontier.";
result = sample.match(countNonWhiteSpace);
console.log(result);

sample = "MindYourPersonalSpace";
result = sample.match(countNonWhiteSpace);
console.log(result);