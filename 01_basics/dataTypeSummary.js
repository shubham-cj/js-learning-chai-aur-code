/*
> Is javascript dinamically typed or statically?
    JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them.

> what is the difference between Primitive and Non-primitive?
    Non-primitive data types are called reference types because they refer to objects. The main difference between primitive and non-primitive data types are: Primitive types are predefined (already defined) in JavaScript. Non-primitive types are created by the programmer and is not defined by JavaScript (except for String ).

┌────────────────┬──────────────────────┬──────────────────────────┐
│ Characteristic │ Primitive Data Types │ Non-Primitive Data Types |
├────────────────┼──────────────────────┼──────────────────────────┤
│ Mutability     │ Immutable            │ Mutable                  |
├────────────────┼──────────────────────┼──────────────────────────┤
│ Passing        │ Passed by value      │ Passed by reference      |
│ mechanism      │                      │                          |
├────────────────┼──────────────────────┼──────────────────────────┤
│ Examples       │ String, Number,      | Object, Array, Function  |
|                │ Boolean, Null,       |                          |
|                | Undefined, BigInt,   |                          |
|                | Symbol               |                          |
└────────────────┴──────────────────────┴──────────────────────────┘
*/

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


//JavaScript uses two types of memory to store data: the stack and the heap.

//The stack
//is a LIFO (last-in-first-out) data structure that stores primitive data types (numbers, strings, booleans, null, and undefined), local variables, and function arguments. The stack is managed automatically by the JavaScript engine, and you don't need to worry about allocating or freeing memory on the stack.

//The heap
//is a free-form data structure that stores complex data types, such as objects, arrays, and functions. The heap is managed by the garbage collector, which automatically reclaims memory that is no longer being used.

//stack(for primitive types) >> it gives the copy of data
//heap(for non-primitive types) >> it gives the reference of data
