var variable="global";
let obj={
    variable:"local",
    arrowFunction:() =>{
        console.log(this.variable);
    },
    regularFunction() {
        console.log(this.variable);
    }
};

obj.arrowFunction(); //global
obj.regularFunction(); //local


function example(){
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
}
example(1,2,3);

let example1 = {
    printArguments : () => {
        console.log(arguments);
    }
}
example1.printArguments(1,2,3);

let example2 = {
    printArguments : (...args) => {
        console.log(...args);
    }
}
example2.printArguments(1,2,3);