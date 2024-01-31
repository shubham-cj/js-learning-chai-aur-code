// Getter and Setters modern sytax:
class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
    get email() {
        return this._email.toUpperCase();
    }
    set email(value) {
        this._email = value;
    }
    get password() {
        return this._password.toUpperCase();
    }
    set password(value) {
        this._password = value;
    }
}

const shubham = new User("shubham@cj.com", "abc")
console.log(shubham.password);
console.log(shubham.email);


// Getter and Setters old syntax:
// Here getter and setter are defined using property.
function user(email, password) {
    this._email = email;
    this._password = password;

    Object.defineProperty(this, "email", {
        get: function() {
            return this._email.toUpperCase();
        },
        set: function(value) {
            this._email = value;
        }
    })
}

const shubhamcj = new user("shubham@cjs.org", "Satara@123")
console.log(shubham.email);


// Getter and Setters older syntax:
// Here getter and Setter are used in object.
const User = {
    _email: "shubham@cj.com",
    _password: "Satara@123",
    get email() {
        return this._email.toUpperCase()
    },
    set email(value) {
        this._email = value
    }
}
const Shubham = Object.create(User)
console.log(Shubham.email);