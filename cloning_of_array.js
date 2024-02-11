// Write a JavaScript function to clone an array.
//     Test Data :
//     console.log(array_Clone([1, 2, 4, 0]));
// console.log(array_Clone([1, 2, [4, 0]]));
// [1, 2, 4, 0]
// [1, 2, [4, 0]]

const arr = [1,2,3,4,5];

let arr1 = arr.slice(0);
console.log('2',arr1);

let arr2 = arr.splice(0);//splice not create new array but its muted original array
console.log('3',arr2);

// let arr3 = [...arr] it is print [empty] array because splice muted original araray we are giv the arr2 for muted array
let arr3 = [...arr2];
console.log('4',arr3);

let arr4 = arr1.map((item) => item);
console.log("5",arr4);

let arr5 = Array.from(arr1);
console.log('6',arr5);

let arr6 = [].concat(arr1);
console.log('7',arr6);

let arr7 = Array.of(...arr1);
console.log('8',arr7)

// Using the Array.from() method with a map function
let arr8 = Array.from( arr1,  item => item);
console.log('9',arr8);

let arr9 = Object.assign([], arr1);
console.log('10',arr9);

// Using the JSON.parse() and JSON.stringify() Methods
let arr10 = JSON.parse(arr1);
console.log("11", arr10);

