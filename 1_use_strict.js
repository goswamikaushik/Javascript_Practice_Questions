"use strict";

// In JavaScript, "use strict"; is a directive that enables a stricter mode of interpretation by the browser or JavaScript engine. When you include "use strict"; at the beginning of a script or a function, it instructs the browser to execute the code in a strict operating context, enforcing more stringent rules and generating errors for common mistakes that would otherwise be ignored or would produce unpredictable behavior.

// 1 - Catches Common Coding Mistakes
// 2 - Improves Performance
// 3 - Discourages Dangerous Features
// etc ...

console.log("helllo kasuhii"); 
console.log("hello");

console.log(1
    + 3
    +4 )

let x = "message";
console.log(x);
x = 5;
console.log(x);

const y = "hello";
console.log(y);
// this is not valid with the const y = 4;
console.log(y);

{
    var a = 0;
    let b = 1;
    const c = 8;
    console.log(b);
    console.log(c)
}

console.log(a);

// its not access here beacuse of "let" and "const" has block scope it available for the that block where they declared and assigned.
// console.log(b);
// console.log(c);