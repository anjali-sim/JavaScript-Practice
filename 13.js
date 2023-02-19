// Difference between regular and arrow functions

var name = "Suprabha";
let newObject = {
    name : "supi",
    arrowFunc: () => {
        console.log(this.name);
        console.log(newObject.name); 
    },
    regularFunc() {
        console.log(this.name); 
    }   
}
newObject.arrowFunc(); // Suprabha
newObject.regularFunc(); // supi