/*Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.

For instance:

// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

// after the call
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};
Please note that multiplyNumeric does not need to return anything. It should modify the object in-place.

*/


let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

const multiplyNumeric = (menu) => {
  for(let key in menu){
  if(typeof menu[key] ===  "number"){
      menu[key] *= 2
    }
  }
  console.log(menu);
};
multiplyNumeric(menu);