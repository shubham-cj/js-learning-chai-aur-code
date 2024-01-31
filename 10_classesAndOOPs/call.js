function setUserName(username) {
    // complex DB calls
    this.username = username;
}

function creatUser(username, email, password) {
    setUserName.call(this, username);

    this.email = email;
    this.password = password;
}

const shubham_cj = new creatUser('shubham', 'shubhamcj@gmail.com', 'Satara@123')

console.log(shubham_cj);
