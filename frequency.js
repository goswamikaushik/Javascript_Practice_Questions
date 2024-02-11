/* Write a JavaScript program to find the most frequent item in an array.
    Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
Sample Output : a ( 5 times ) */

const arr1 =[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
let maxCount = 0, frequentItem;
console.log(arr1.forEach((item,index1) => {
    let count = 0;
        arr1.forEach((item,index2) => {
            if(arr1[index2] ===arr1[index1]){
                count++;
            }
        })
    if(count > maxCount){
        maxCount = count
        frequentItem = arr1[index1];

    }

}));
console.log(`${frequentItem} ( ${maxCount} times )`);

