// Specify Exact Number of Matches

let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // Change this line
let result = timRegex.test(timStr);
console.log(result);

timStr = "Timber";
result = timRegex.test(timStr);
console.log(result);

timStr = "Timmber";
result = timRegex.test(timStr);
console.log(result);

timStr = "Timmmber";
result = timRegex.test(timStr);
console.log(result);

timStr = "Timmmmber";
result = timRegex.test(timStr);
console.log(result);

timStr = "Timmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmber";
result = timRegex.test(timStr);
console.log(result);