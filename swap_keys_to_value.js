// Write a JavaScript function to get a copy of the object where the keys become the values and the values are the keys.
const user = {
    name : "kaushik",
    age : 21,
    div : "A",
    total_marks: 360,
    212 : 'cool',
}

let keys = Object.keys(user)
let values = Object.values(user)
const swap_keys_value = (keys,values) => {
    const stu = {}
    values.forEach((item,index) => {
        stu[item] = keys[index];
    });
    console.log(stu)
}
swap_keys_value(keys,values);

