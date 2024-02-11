// Write a JavaScript function to check whether an object contains a given property.
const user = {
    name : "kasuhik",
    age : 21,
    div : "A",
}

let property = Object.keys(user);
console.log(property.includes("nam"));
console.log(property.includes("name"));