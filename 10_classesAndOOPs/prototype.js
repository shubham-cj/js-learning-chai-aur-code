// let myName = "Shubham     ";

// console.log(myName.trim().length);

let myHeros = ["thor", "spiderman"]
let heroPower = {
    thor: "hammer",
    spiderman: "sling",
    getSpiderPower: function() {
        console.log(`Spidy power is ${this.spiderman}`);
    }
}
let myName = "Shubham"
Object.prototype.shubham = function() {
    console.log(`Shubham is present in this objects.`);
}
Array.prototype.heyShubham = function() {
    console.log(`Shubham is present in only array objects.`);
}

myHeros.shubham();   // Shubham is present in this objects.
heroPower.shubham();   // Shubham is present in this objects.
myName.shubham();   // Shubham is present in this objects.

myHeros.heyShubham();   // Shubham is present in only array objects.
// heroPower.heyShubham();   // TypeError: heroPower.heyShubham is not a function
// myName.heyShubham();   // TypeError: myName.heyShubham is not a function


// inheritance:
const user = {
    username: 'chai',
    email: 'chai@google.com'
}
const teacher = {
    makeVideo: true
}
const teachingSupport = {
    isAvailable: false
}
const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: teachingSupport
}

teacher.__proto__ = user
console.log(teacher.email);
// This above syntax is older

// Modern syntax for inhertance:
Object.setPrototypeOf(TASupport, user);    // now "TASupport" can access properties of "user", but "user" cannot access "TASupport"'s properties.

console.log(TASupport.username);   // chai
console.log(user.makeAssignment);   // undefined

let anotherUserName = "ChaiAurCode      "
String.prototype.trueLength = function() {
    console.log(`${this}`);
    console.log(`true lenght is: ${this.trim().length}`);
}
anotherUserName.trueLength();
console.log(anotherUserName.length);
"shubham".trueLength();
"iceTea     ".trueLength();