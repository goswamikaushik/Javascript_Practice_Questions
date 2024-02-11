/* Write a JavaScript function to get the first element of an array. Passing the parameter 'n' will return the first 'n' elements of the array.
    Test Data :
    console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));
Expected Output :
    7
        []
        [7, 9, 0]
        [7, 9, 0, -2]
        [] */


const first = ((arr, number) => {
    return arr.slice(0, number);
})

console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));

console.log("*******************************************")
/* Write a JavaScript function to get the last element of an array. Passing the parameter 'n' will return the last 'n' elements of the array.
    Test Data :
    console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2],3));
console.log(last([7, 9, 0, -2],6));
Expected Output :
    -2
        [9, 0, -2]
        [7, 9, 0, -2] */


const last = ((arr, number) => {
    return arr.slice(-(number));
})

console.log(last([7, 9, 0, -2],1));
console.log(last([7, 9, 0, -2],3));
console.log(last([7, 9, 0, -2],6));
