// Write a JavaScript program to find the sum of squares of a numerical vector.

const arr = [5,5];
let sum = 0;
console.log(arr.reduce((accumulator,currentValue) => accumulator += (currentValue * currentValue),0 ));