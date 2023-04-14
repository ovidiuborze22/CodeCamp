// Match Characters that Occur Zero or More Times

let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
// Only change code below this line
let chewieRegex = /Aa*/; // Change this line
// Only change code above this line
let result = chewieQuote.match(chewieRegex);
console.log(result);


chewieQuote = "He made a fair move. Screaming about it can't help you.";
result = chewieQuote.match(chewieRegex);
console.log(result);

chewieQuote = "Let him have it. It's not wise to upset a Wookiee.";
result = chewieQuote.match(chewieRegex);
console.log(result);