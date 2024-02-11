/*

We have the following arrays :
    color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
        o = ["th","st","nd","rd"]
Write a JavaScript program to display the colors in the following way :
    "1st choice is Blue ."
    "2nd choice is Green."
    "3rd choice is Red."

*/
 const color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
 const ord = ["th","st","nd","rd"];

 const color_set = (color, ord) => {
     const result = color.map((value, index, color) =>{
         if(index % 10 == 1 && index % 100 !== 11){
             return index + ord[1] + " choice is " + color[index]
         }
         if(index % 10 == 2 && index % 100 !== 12){
             return index + ord[2] + " choice is " +  color[index]
         }
         if(index % 10 == 3 && index % 100 !== 13) {
             return index + ord[3] + " choice is " + color[index]
         }
         return index + ord[0] + " choice is " + color[index]
     });
    return result;
}

let s = color_set(color, ord).forEach((item) =>{
    console.log(item);
});




// const colors = (color, ord) => {
//     color.forEach((value, index) => {
//         if (index % 10 == 1 && index % 100 !== 11) {
//             console.log(index + ord[1] + " choice is " + color[index]);
//         }
//         if (index % 10 == 2 && index % 100 !== 12) {
//             console.log(index + ord[2] + " choice is " + color[index]);
//         }
//         if (index % 10 == 3 && index % 100 !== 13) {
//             console.log(index + ord[3] + " choice is " + color[index]);
//         }
//         console.log(index + ord[0] + " choice is " + color[index]);
//     });
// }
//
// colors(color, ord);


























// ordinal number


// const getOrdinal = (n) => {
//     let ord = 'th';
//
//     if (n % 10 == 1 && n % 100 != 11)
//     {
//         ord = 'st';
//     }
//     else if (n % 10 == 2 && n % 100 != 12)
//     {
//         ord = 'nd';
//     }
//     else if (n % 10 == 3 && n % 100 != 13)
//     {
//         ord = 'rd';
//     }
//
//     return ord;
// }
//
// console.log(getOrdinal(123))
