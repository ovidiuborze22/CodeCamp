// Introducing Else Statements

function testElse(val) {
    let result = "";
    // Only change code below this line
  
    if (val > 5) {
      result = "Bigger than 5";
    }
  
     else {
      result = "5 or Smaller";
    }
  
    // Only change code above this line
    return result;
  }
  
console.log(testElse(4));
console.log(testElse(5));
console.log(testElse(6));
console.log(testElse(10));