// Comparisons with the Logical And Operator

function testLogicalAnd(val) {
    // Only change code below this line
  
    if (val <= 50 && val >= 25) {
        return "Yes";
      }
  
    // Only change code above this line
    return "No";
  }
  
console.log(testLogicalAnd(0));
console.log(testLogicalAnd(24));
console.log(testLogicalAnd(25));
console.log(testLogicalAnd(30));
console.log(testLogicalAnd(50));
console.log(testLogicalAnd(51));
console.log(testLogicalAnd(75));
console.log(testLogicalAnd(80));