// /* Write a JavaScript program to sort an array of JavaScript objects.
//     Sample Object :
//
//     var library = [
//         {
//             title:  'The Road Ahead',
//             author: 'Bill Gates',
//             libraryID: 1254
//         },
//         {
//             title: 'Walter Isaacson',
//             author: 'Steve Jobs',
//             libraryID: 4264
//         },
//         {
//             title: 'Mockingjay: The Final Book of The Hunger Games',
//             author: 'Suzanne Collins',
//             libraryID: 3245
//         }];
// Expected Output:
//
//     [[object Object] {
//         author: "Walter Isaacson",
//         libraryID: 4264,
//         title: "Steve Jobs"
//     }, [object Object] {
//         author: "Suzanne Collins",
//         libraryID: 3245,
//         title: "Mockingjay: The Final Book of The Hunger Games"
//     }, [object Object] {
//         author: "The Road Ahead",
//         libraryID: 1254,
//         title: "Bill Gates"
//     }]
//
//  * /

const library = [
    {
        title: 'The Road Ahead',
        author: 'Bill Gates',
        libraryID: 1254
    },
    {
        title: 'Walter Isaacson',
        author: 'Steve Jobs',
        libraryID: 4264
    },
    {
        title: 'The Final Games',
        author: 'Collins',
        libraryID: 3245
    }];

const arr = library.sort((a,b) => {
   return   a.libraryID - b.libraryID
})
console.log(arr);


const arr1 = [1,2,3,4,0,10,5,9,6,7,8];
console.log(arr1.sort((a ,b) => a - b));



