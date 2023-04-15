// Match Whitespace

let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // Change this line
let result = sample.match(countWhiteSpace);
console.log(result);

sample = "Men are from Mars and women are from Venus.";
result = sample.match(countWhiteSpace);
console.log(result);

sample = "Space: the final frontier.";
result = sample.match(countWhiteSpace);
console.log(result);

sample = "MindYourPersonalSpace";
result = sample.match(countWhiteSpace);
console.log(result);