//Hoisting examples
console.log(a);

var a = 10;
//Gives undefined as output

console.log(b);
const b = 20;
//Gives ReferenceError as output

console.log(c);
let c = 20;
//Gives ReferenceError as output

name1 = "ABC";
console.log(name1);
var name1;
//returns ABC

//Function declaration can be hoisted whereas, function expression are not hoisted.
//Example
addNoDeclaration();

function addNoDeclaration() {
    console.log("From function declaration");
}
//Gives From function declaration as output

//Example
addNoExpression();

let addNoExpression = function() {
    console.log("From function expression");
}
//Gives ReferenceError