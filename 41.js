//spread operator
let arr1 = [1, 2, 3, 4];
let arr2 = [5, 6, 7];
 
let arr = [...arr1, ...arr2];
console.log(arr); //[1, 2, 3, 4, 5, 6, 7]

//rest parameter
function display(a, b, c, ...arr){
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(arr);
  }
  display(1, 2, 3, 4, 5, 6, 7, 8);
// 1
// 2
// 3
// [4, 5, 6, 7, 8]