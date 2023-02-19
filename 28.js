const nameIdentity = (function() {
    const name = "ABC XYZ";
    const secretIdentity = "Superman";
    const introduce = function() {
        return `Hi, my name is ${name}`;
    };
    const issuesReport = function() {
        return `${secretIdentity} saves the day`;
    };
    return {introduce, issuesReport, name};
})();

console.log(nameIdentity.introduce()); 
//Hi, my name is ABC XYZ
console.log(nameIdentity.issuesReport());
//Superman saves the day
console.log(nameIdentity.secretIdentity);
//undefined --> as we have not returned