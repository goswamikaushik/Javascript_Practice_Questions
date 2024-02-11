const abc = {
   stu : [
        {
            name: "kasuhik",
            age: 20
        },
        {
            name: "varun",
            age: 19
        },
        {
            name: "kasuhik",
            age: 16
        },
        {
            name: "mitali",
            age: 15
        }
    ]
}
console.log(abc.stu.filter((item) => item.age > 18).map((item) => item.name));

const arr = [1,2,3,4,5,6];
console.log(arr.map((item) => item * 2))

