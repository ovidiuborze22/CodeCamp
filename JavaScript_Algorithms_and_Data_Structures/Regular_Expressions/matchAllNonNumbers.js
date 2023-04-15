// Match All Non-Numbers

let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Change this line
let result = movieName.match(noNumRegex).length;
console.log(result);

movieName = "Catch 22";
result = movieName.match(noNumRegex).length;
console.log(result);

movieName = "101 Dalmatians";
result = movieName.match(noNumRegex).length;
console.log(result);

movieName = "One, Two, Three";
result = movieName.match(noNumRegex).length;
console.log(result);

movieName = "21 Jump Street";
result = movieName.match(noNumRegex).length;
console.log(result);

movieName = "2001: A Space Odyssey";
result = movieName.match(noNumRegex).length;
console.log(result);
