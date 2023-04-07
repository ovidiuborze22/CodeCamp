// Access Multi-Dimensional Arrays With Indexes

/*
const subarray = myArray[3];
const nestedSubarray = myArray[3][0];
const element = myArray[3][0][1]; 
*/
const myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
  ];
  
const myData = myArray[2][1];

console.log(myData)