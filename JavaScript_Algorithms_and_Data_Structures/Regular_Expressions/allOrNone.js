// Check for All or None

let favWord = "favorite";
let favRegex = /favou?rite/; // Change this line
let result = favRegex.test(favWord);
console.log(result);

favWord = "favourite";
result = favRegex.test(favWord);
console.log(result);

favWord = "fav";
result = favRegex.test(favWord);
console.log(result);