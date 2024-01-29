// Objet literal =>
const user = {
    username: 'shubham',
    loginCount: 4,
    isSignedIn: true,

    getUserDetails: function() {
        console.log('got user details!');
        console.log(`UserName: ${this.username}`);
        console.log(this);
    }
}
// console.log(user.isSignedIn, user.loginCount);
// console.log(user.getUserDetails());
// console.log(this);


// Constructor function =>
// const promiseOne = new Promise();
// const date = new Date();


// Use of "this." =>
function User(username, loginCount, isSignedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isSignedIn = isSignedIn;
    this.greeting = () => console.log(`Welcome ${this.username}`);

    return this;   // defining return is not necessary, it is actually implicitly defined.
}
// Here whats happinning is that this.username is actually a variable and the second username is the value of argument which is passed by the username.
// So the "this." keyword is used to define the variable.


const userOne = new User("shubham", 10, true)
const userTow = new User("cj", 11, false)
console.log(userOne.greeting());
console.log(userTow.constructor);
/*
- When you use "new" keyword it will create new object.
- Constructor function is called when you create a new object.
- "this" keyword is used to define the variables and inject all arguments into it.
*/
