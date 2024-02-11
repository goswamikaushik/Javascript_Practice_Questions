// Write a JavaScript function that accepts a string as a parameter and converts the
// first letter of each word of the string in upper case.
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox '

const upper = ((str) => {
    console.log(str.split(" ").map((item) => {
        return item.charAt(0).toUpperCase() + item.slice(1);
    }).join(" "));
});

let x = "the quick brown fox";
upper(x);
