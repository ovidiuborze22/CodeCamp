// Stand in Line

function nextInLine(arr, item) {
    // Only change code below this line
  
    // Add the item to the end of the array
    arr.push(item);
  
    // Remove the first element of the array 
    item = arr.shift();
  
    return item;
    // Only change code above this line
  }
  
  // Setup
  let testArr = [1, 2, 3, 4, 5];
  
  // Display code
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));