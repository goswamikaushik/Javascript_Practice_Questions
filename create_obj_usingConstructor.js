//creat object using constructor

//let's make constructor function
let User = function (name,age,div,totalMarks)  {
    this.name = name;
    this.age = age;
    this.div = div;
    this.totalMarks = totalMarks;
    this.SayHi = () => {
        console.log(`hello my name is ${this.name}`);
    };
};
const stu1 = new User("kaushik", 22, "A", 350);
console.log(stu1);


// constructor with return statement
let user = new function() {
    //if we use return with object than , whole function return that {Object}
    this.name = "John";
    return {
        name : "kaushik",
        age : 22,
        div : "A",
        marks : 345,
    }
};
console.log("->",user);


//also we can use like that
const stu2 = new User;
console.log(stu2)


//also we can omit the methods ino the constructor function
const stu3 = new User("kaushik")

stu3.SayHi();