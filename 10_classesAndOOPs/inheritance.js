class User {
    constructor(username) {
        this.username = username;
    }
    logMe() {
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password) {
        super(username)
        this.email = email;
        this.password = password;
    }

    addCourse() {
        console.log(`New Course is ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@gmail.com", "0123");
chai.logMe()

const tea = new User("masala tea");
tea.logMe();

console.log(chai instanceof Teacher);
console.log(chai instanceof User);