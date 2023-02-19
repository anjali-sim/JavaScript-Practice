function student() {
    this.name = "John";
}

student.prototype.department = "CE";

const student1 = new student();

console.log(student1);
console.log(student1.department);