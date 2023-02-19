var Person = {
    "firstName" : "ABC",
    "lastName" : "XYZ",
    "getFirstName" : function() {
        return this.firstName;
    },
    "getLastName" : function() {
        return this.lastName;
    }
};


//Module Pattern - To make a property private
function createPerson() {
    firstName : "ABC";
    lastName : "XYZ";
    var returnObj = {  
        //All the four following properties are working on closure variables
        "getFirstName" : function() {
            return firstName;
        },
        "getLastName" : function() {
            return lastName;
        },
        "setFirstName" : function(name) {
            firstName = name;
        },
        "setLastName" : function(name) {
            lastName = name;
        }
    };
    return returnObj;
}

var Person = createPerson();

console.log(person.getFirstName());
person.setFirstName("Foo");
console.log(person.getFirstName());