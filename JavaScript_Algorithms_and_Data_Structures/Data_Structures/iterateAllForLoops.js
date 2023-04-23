// Iterate Through All an Array's Items Using For Loops

function filteredArray(arr, elem) {
    let newArr = [];
    // Only change code below this line
     for (let i = 0; i < arr.length; i++) {
      if (arr[i].indexOf(elem) == -1) {
        //Checks every parameter for the element and if is NOT there continues the code
        newArr.push(arr[i]); //Inserts the element of the array in the new filtered array
      }
    }
    // Only change code above this line
    return newArr;
}

console.log(filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18));
console.log(filteredArray([["trumpets", 2], ["flutes", 4], ["saxophones", 2]], 2));
console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
