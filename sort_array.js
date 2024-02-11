// Write a JavaScript program to sort the items of an array.
//     Sample array : var arr1 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];
// Sample Output : -4,-3,1,2,3,5,6,7,8


// direct using method
const arr = [3, 8, -5, 7, 6, 5, -4, 3, 2, 1];
arr.sort((a, b) => a - b);
console.log(arr);

















// const sortedArray = arr.map((_, index, array) => {
//     for (let j = 0; j < array.length - 1 - index; j++) {
//         if (array[j] > array[j + 1]) {
//             // Swap elements if they are in the wrong order
//             [array[j], array[j + 1]] = [array[j + 1], array[j]];
//         }
//     }
//     return array[index];
// });
//
// console.log(sortedArray);
