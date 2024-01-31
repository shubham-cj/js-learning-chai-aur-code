class user {
    constructor(username) {
        this.username = username;
    }
    logMe() {
        console.log(`Username: ${this.username}`);
    }
    static createId() {
        return `123`
    }
}
const shubham = new user("shubham");
// console.log(shubham.createId());
console.log(user.createId());

class Teacher extends user {
    constructor(username, email) {
        super(username)
        this.email = email;
    }
}

const motorola = new Teacher("motorola", "motorola@phone.com");
// console.log(motorola.createId());
