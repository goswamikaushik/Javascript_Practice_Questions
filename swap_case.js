/* Write a JavaScript program that accepts a string as input and swaps the case of each character.
    For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.*/

let str1 = 'The Quick Brown Fox';
let arr = [];
console.log(str1.split("").map((item) => {
    if(item.toUpperCase() === item){
          return item.toLowerCase();
    }else
    {
        return item.toUpperCase();
    }

}).join(""));
