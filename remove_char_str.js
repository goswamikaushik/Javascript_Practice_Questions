// Write a JavaScript function to remove specified number of characters from a
// string.
//     Test Data :
//     document.write(truncate_string("Robin Singh",4));
// "Robi"

const remove = ((str, number) =>
{
   let arr = str.split("").slice(number).join("");
   console.log(arr);

   let arr1 = str.split("").splice(number).join("");
   console.log(arr1);


});

remove("kaushik goswami", 4);
