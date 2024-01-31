// ES6

class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }
    encryptPassword() {
        return `${this.password}abc`
    }
    capitalizeUserName() {
        return `${this.username.toUpperCase()}`
    }
}

const user = new User("shubham", "shubham@gmail.com", "123");
console.log(user.encryptPassword());
console.log(user.capitalizeUserName());

/*
// Behind the scence of this code:

// function createUser(username, email, password) {
//     this.username = username;
//     this.email = email;
//     this.password = password;
// }
// createUser.prototype.encryptPassword = function() {
//     return `${this.password}abc`
// }
// createUser.prototype.capitalizeUserName = function() {
//     return `${this.username.toUpperCase()}`
// }


// const user2 = new createUser("shubham_cj", "shubham_cj@gmail.com", "123");
// console.log(user2.encryptPassword());
// console.log(user2.capitalizeUserName());

*/
