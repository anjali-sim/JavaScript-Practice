//Prototype Example
function Person() {
    this.name = 'John'
}

// adding property 
Person.prototype.name = 'Peter';
Person.prototype.age = 23

const person1 = new Person();

console.log(person1);
console.log(person1.name); // John
console.log(person1.age); // 23