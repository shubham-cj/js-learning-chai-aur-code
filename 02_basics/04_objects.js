// const tinderUser = new Object()   // this is a singleton object.
const mySymbol = Symbol("key1")
const tinderUser = {[mySymbol]: "myKey1"}    // this is a non-singleton object.

tinderUser.id = "123abc"
tinderUser.name = "Shubham"
tinderUser.isLoggedIn = true

// console.log(tinderUser);



const regularUser = {
    email: "shubham@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Shubham",
            lastname: "Jagtap"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname) 



const object1 = {1: "a", 2: "b"}
const object2 = {3: "c", 4: "d"}

// const object3 = { object1, object2 }   
// console.log(object3);    // { object1: { '1': 'a', '2': 'b' }, object2: { '3': 'c', '4': 'd' } }

// Object.assign() method creates a new object with the given values.
// const object3 = Object.assign(object1, object2)
// console.log(object3);   // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
// console.log(object1 === object3);   // true

// const object3 = Object.assign({}, object1, object2)    // by mentaining empty object {} at start, it will work as target and assigns to new object
// console.log(object3);   // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
// console.log(object1 === object3);   // false

const object3 = {...object1,...object2 }   
// console.log(object3);    // { 1: 'a', 2: 'b', 3: 'c', 4: 'd' }
// console.log(object1 === object3);   // false



const user = [
    {
        name: "John",
    },
    {
        name: "Mary",
    },
    {
        name: "Peter",
    }
]

console.log(user[1]);   // { name: 'Mary' }
console.log(user[1].name);   // Mary


console.log(tinderUser);
console.log(Object.keys(tinderUser));    // [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser));    // [ '123abc', 'Shubham', true ]
console.log(Object.entries(tinderUser));    // [ [ 'id', '123abc' ], [ 'name', 'Shubham' ], [ 'isLoggedIn', true ] ]

console.log(tinderUser.hasOwnProperty("isLoggedIn"));    // true
console.log(tinderUser.hasOwnProperty("isLogged"));    // false

console.log(Object.getOwnPropertyNames(tinderUser));    // [ 'id', 'name', 'isLoggedIn' ]

console.log(Object.getOwnPropertySymbols(tinderUser));    // [ Symbol(key1) ]