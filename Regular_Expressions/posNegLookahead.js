// Positive and Negative Lookahead

let sampleWord = "astronaut";
let pwRegex = /(?=\w{6})(?=\w*\d{2})/; // Change this line
let result = pwRegex.test(sampleWord);
console.log(result);

sampleWord = "banan1";
result = pwRegex.test(sampleWord);
console.log(result);

sampleWord = "banan12";
result = pwRegex.test(sampleWord);
console.log(result);

sampleWord = "abc123";
result = pwRegex.test(sampleWord);
console.log(result);

sampleWord = "12345";
result = pwRegex.test(sampleWord);
console.log(result);

sampleWord = "8pass99";
result = pwRegex.test(sampleWord);
console.log(result);

sampleWord = "1a2bcde";
result = pwRegex.test(sampleWord);
console.log(result);

sampleWord = "astr1on11aut";
result = pwRegex.test(sampleWord);
console.log(result);