// Write a JavaScript function that accepts a string as a parameter and counts the
// number of vowels within the string.
//     Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do
//     not count 'y' as vowel here.
//     Sample Data and output:
//     Example string : 'The quick brown fox'
// Expected Output : 5


const vowels_count = ((str) => {
    let count = 0;
    for (let letter of str.split("")) {
        // if (
        //     (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") ||
        //     (letter === "A" || letter === "E" || letter === "I" || letter === "O" || letter === "U")
        // ) {
        //     count++;
        //  }
        if( (((Array.from("aeiou").includes(letter)) || (Array.from("AEIOU").includes(letter))) == true)) {
            //using array method
            count++;
        }
    }
    console.log(count);
});
let x = "The quick brown foxAi";
vowels_count(x);

