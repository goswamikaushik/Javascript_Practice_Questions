
// Write a JavaScript conditional statement to find the sign of product of three numbers. Display an alert box
// with the specified sign.
//     Sample numbers : 3, -7, 2
// Output : The sign is -
function sign(num1, num2, num3){
   if ((Math.sign(num1, num2, num3)) == 1){
       console.log("+");
   };
   if ((Math.sign(num1, num2, num3)) == -1){
       console.log("+");
   };
};

sign(1,1,-0)