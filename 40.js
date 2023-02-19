// let a, b, rest;
// [a, b] = [10, 20];
// console.log(a);
// console.log(b);
// [a,b,...rest] = [10,20,30,40,50];
// console.log(rest);

var scope = "global scope";
function check() 
{
    var scope = "local scope"; 
    function f() 
    {  
        console.log(scope);
        return scope; 
    }
    f();
}
check();