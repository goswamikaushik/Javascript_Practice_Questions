// Write a JavaScript function that returns a passed string with letters in
// alphabetical order.
//     Example string : 'webmaster'
// Expected Output : 'abeemrstw'
// Note: Assume punctuation and numbers symbols are not included in the passed
// string..

let str = "webmaster";
console.log(typeof str.split("").sort().join(""))