// Write a JavaScript function to check whether an `input` is an array or not.
//     Test Data :
//     console.log(is_array('w3resource'));
// console.log(is_array([1, 2, 4, 0]));
// false
// true

const is_array = ((item) => {
    console.log(Array.isArray(item));
})

is_array("w3resouse");
is_array([1,2,3,4]);
