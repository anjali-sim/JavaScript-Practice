//object example
const student = { 
    name: 'John', 
    age: 20,
    marks: {
        science: 70,
        math: 75
    }
}
// accessing property of student object
console.log(student.marks); // {science: 70, math: 75}
// accessing property of marks object
console.log(student.marks.science); // 70


// accessing method and property
const person = {
    name: 'John',
    greet: function() { console.log('hello'); }
};
// accessing property
person.name; // John
// accessing method
person.greet(); // hello


//this keyword example
const person = {
    name: 'John',
    age: 30,
    greet: function() {
        let surname = 'Doe';
        console.log('The name is' + ' ' + this.name + ' ' + surname); }
};

person.greet();


// constructor function
function Person () {
    this.name = 'John',
    this.age = 23,

     this.greet = function () {
        console.log('hello');
    }
}
// create objects
const person1 = new Person();
const person2 = new Person();
// access properties
console.log(person1.name);  // John
console.log(person2.name);  // John


// using object literal
let person = {
    name: 'Sam'
}
console.log(person.name); // Sam
let student = person;
// changes the property of an object
student.name = 'John';
// changes the origins object property
console.log(person.name); // John