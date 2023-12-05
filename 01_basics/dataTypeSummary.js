// Is javascript dinamically typed or statically?
//Ans: Dinamically typed, because while assigning variables we don't need to mention data type.

// what is the difference between Primitive and Non-primitive?
// Ans: Non-primitive data types are called reference types because they refer to objects. The main difference between primitive and non-primitive data types are: Primitive types are predefined (already defined) in JavaScript. Non-primitive types are created by the programmer and is not defined by Java (except for String ).

// There are mainly two data types:

// 1. Primitive: String, Number, Boolean, null, undefined, BigInt

console.log(typeof "Shubham");    // string

console.log(typeof 10);    // number

console.log(typeof 11.5);   // number

console.log(typeof true);   // boolean

console.log(typeof null);   // null

console.log(typeof anyVariable);    // undefined

console.log(typeof Symbol("anyValue"));    // symbol

const bigNumber = 82609684230973n
console.log(typeof bigNumber)    // bigint


// 2. Reference (Non-primitive): Array, Object, Function

const myArray = ["string", "number", "boolean", "null", "undefined", "bigint"]
console.log(typeof myArray)    // object

const myObject = {
    name: "Shubham",
    age: 25,
    isMarried: false
}
console.log(typeof myObject)    // object

const myFunction = function(){
    console.log("Hello World")
}
console.log(typeof myFunction)    // function