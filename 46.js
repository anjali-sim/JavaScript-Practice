function Person(name,age){
    this.name = name;
    this.age = age;
}

Person.prototype.department="CE";

const person1 = new Person("a",10);
console.log(person1.department);