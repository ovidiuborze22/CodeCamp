// Comparison with the Strict Inequality Operator

// Setup
function testStrictNotEqual(val) {
    if (val !==17) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  
console.log(testStrictNotEqual(10));
console.log(testStrictNotEqual(17));