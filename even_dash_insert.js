/* Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number.
For example if you accept 025468 the output should be 0-254-6-8.*/

let number = 12121212;
const even = number.toString().split("")
let num = "";
even.map((item,index) =>
{
    if(number[index] % 2 == 0 && number[index + 1] % 2 == 0) {
        num = num + even[index] + "-";
    }
    else {
        num = num + even[index];
    }
});
console.log(num);

