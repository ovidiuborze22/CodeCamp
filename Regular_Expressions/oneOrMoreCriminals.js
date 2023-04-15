// Find One or More Criminals in a Hunt

let criminals = "z zzzzzz ABCzzzz zzzzABC abczzzzzzzzzzzzzzzzzzzzzabc  ABC abcabc";
let reCriminals = /C+/g; // Change this line
let result = criminals.match(reCriminals);
console.log(result);

criminals = "P1P2P3P4P5CCCCCCCCCCCCCCCCCCCCCCCCP5CCCCCCCCCCCCCCCCCCCCCCCCCCP4P5P68P9P9";
result = criminals.match(reCriminals);
console.log(result);

