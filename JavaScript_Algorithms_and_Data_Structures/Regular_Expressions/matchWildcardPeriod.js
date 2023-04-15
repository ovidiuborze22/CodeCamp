// Match Anything with Wildcard Period

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /run.|sun.|fun.|pun.|nun.|bun./; // Change this line
let result = unRegex.test(exampleStr);
console.log(result);

exampleStr = "Let us go on a run.";
result = unRegex.test(exampleStr);
console.log(result);

exampleStr = "The sun is out today.";
result = unRegex.test(exampleStr);
console.log(result);

exampleStr = "Coding is a lot of fun.";
result = unRegex.test(exampleStr);
console.log(result);

exampleStr = "Seven days without a pun makes one weak.";
result = unRegex.test(exampleStr);
console.log(result);

exampleStr = "One takes a vow to be a nun.";
result = unRegex.test(exampleStr);
console.log(result);

exampleStr = "She got fired from the hot dog stand for putting her hair in a bun.";
result = unRegex.test(exampleStr);
console.log(result);

exampleStr = "There is a bug in my code.";
result = unRegex.test(exampleStr);
console.log(result);

exampleStr = "Catch me if you can.";
result = unRegex.test(exampleStr);
console.log(result);