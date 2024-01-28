const promisOne = new Promise((resolve, reject) => {
    // Do an async task
    // Do calls, Cryptography, network
    setTimeout(() =>{
        console.log('Async task completed');
        resolve()
    }, 2000)
});

promisOne.then(() => {
    console.log('Promise consumed');
})

new Promise((resolve, reject) => {
    setTimeout(() =>{
        console.log("Async completed");
        resolve()
    }, 1000)
}).then(() => {
    console.log("Async 2 consumed");
})

const promisThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({username: 'chai', email: 'chai@example.com'})
    }, 1000);
})
promisThree.then((user) => {
    console.log(user);
})

const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({username: 'chai', password: 'chai@123'})
        } else {
            reject('ERROR')
        }
    }, 1000)
})

promiseFour.then((user) => {
    console.log(user.username);
    return user.username
}).then((username) => {
    console.log(username);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log('Everything is good');
})

const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({username: 'JavaScript', password: 'js@123'})
        } else {
            reject('ERROR: JS went wrong');
        }
    }, 1000)
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive();

async function getAllUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

// getAllUsers();

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json();
})
.then((response) => {
    console.log(response);
})
.catch((error) => console.log("ERROR"));