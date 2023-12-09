// There are two types to declare objects: constructor and literal

// Singleton - when we make object by constructor it will be a singleton object.

// Object literal

const mySymbol = Symbol("key1")
const greeting = function(){
    console.log("Hello jsUser");
}

const jsUser = {
    name: "Shubham",
    "full name": "Shubham Jagtap",
    [mySymbol]: "myKey1",
    greet1: greeting,
    age: 24,
    city: "Satara",
    email: "shubham@ccbp.com",
    isLoggedIn: false,
    lastLoginDays: ["Sun", "Mon", "Tue"]
}

// accessing object values:
console.log(jsUser.name);
console.log(jsUser["name"]);
console.log(jsUser["full name"]);
// accessing symbols:
console.log(jsUser[mySymbol]);

jsUser.email = "shubham@nxtwave.com";   // email value changed.
// Object.freeze(jsUser);   // freeze the object to change anything from it, from this line.
jsUser.email = "shubham@ccbp.com";    // email value will not be changed, after freeze function.

console.log(jsUser);

jsUser.greetingTwo = function(){
    console.log(`Hello jsUser, ${this.name}`);
}

console.log(jsUser.greet1());
console.log(jsUser.greetingTwo());