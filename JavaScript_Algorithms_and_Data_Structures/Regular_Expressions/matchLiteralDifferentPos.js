// Match a Literal String with Different Possibilities

let petString = "James has a pet dog.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let result = petRegex.test(petString);
console.log(result);

petString = "Emma has a pet rock.";
result = petRegex.test(petString);
console.log(result);

petString = "Emma has a pet bird.";
result = petRegex.test(petString);
console.log(result);

petString = "Liz has a pet cat.";
result = petRegex.test(petString);
console.log(result);

petString = "Kara has a pet dolphin.";
result = petRegex.test(petString);
console.log(result);

petString = "Alice has a pet fish.";
result = petRegex.test(petString);
console.log(result);

petString = "Jimmy has a pet computer.";
result = petRegex.test(petString);
console.log(result);