// Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity)

const arr = [1,"a", 7, "b", 3, "c", 2, "a", 3, "d",  4, 5, 2, "e", 3, 4];
const removeDuplicates = (arr) => {
    const array = [];
    arr.forEach((item) => {
        const lowerCaseItem = String(item).toLowerCase();
        if (! array.includes(lowerCaseItem)) {
            array.push(lowerCaseItem);
        }
    });
    return array;
};
console.log(removeDuplicates(arr));

let n = [...new Set(arr)]
console.log(n);

