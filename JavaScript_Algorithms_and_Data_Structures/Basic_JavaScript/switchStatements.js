// Selecting from Many Options with Switch Statements

function caseInSwitch(val) {
    let answer = "";
    // Only change code below this line
    switch(val) {
      case 1:
        answer = "alpha";
        break;
      case 2:
        answer = "beta";
        break;
      case 3:
        answer = "gamma";
        break;
      case 4:
        answer = "delta"
        break;
      }
  
  
    // Only change code above this line
    return answer;
  }

// change value to see different cases output
console.log(caseInSwitch(1));