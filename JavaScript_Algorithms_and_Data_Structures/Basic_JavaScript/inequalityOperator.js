// Comparison with the Inequality Operator

// Setup
function testNotEqual(val) {
    if (val != 99) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  
console.log(testNotEqual(10));
console.log(testNotEqual(5000));
console.log(testNotEqual(0));
console.log(testNotEqual(99));