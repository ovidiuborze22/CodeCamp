// Restrict Possible Usernames

// First Solution
/*
    1.^ - start of input
    2.[a-z] - first character is a letter
    3.[a-z]+ - following characters are letters
    4.\d*$ - input ends with 0 or more digits
    5.| - or
    6.^[a-z] - first character is a letter
    7.\d\d+ - following characters are 2 or more digits
    8.$ - end of input
*/

let username = "JackOfAllTrades";
let userCheck =  /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i; // Change this line
let result = userCheck.test(username);
console.log(result);

username = "Oceans11";
result = userCheck.test(username);
console.log(result);

username = "RegexGuru";
result = userCheck.test(username);
console.log(result);

username = "007";
result = userCheck.test(username);
console.log(result);

username = "9";
result = userCheck.test(username);
console.log(result);

username = "A1";
result = userCheck.test(username);
console.log(result);

username = "BadUs3rnam3";
result = userCheck.test(username);
console.log(result);

username = "Z97";
result = userCheck.test(username);
console.log(result);

username = "c57bT3";
result = userCheck.test(username);
console.log(result);

username = "AB1";
result = userCheck.test(username);
console.log(result);

username = "J%4";
result = userCheck.test(username);
console.log(result);

// Second Solution

/*
    1.^ - start of input
    2.[a-z] - first character is a letter
    3.[0-9]{2,} - ends with two or more numbers
    4.| - or
    5.[a-z]+ - has one or more letters next
    6.\d* - and ends with zero or more numbers
    7.$ - end of input
    8.i - ignore case of input
 */
let username2 = "JackOfAllTrades";
const userCheck2 = /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i;
let result2 = userCheck2.test(username2);
console.log(result2);