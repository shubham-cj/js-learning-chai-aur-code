"use strict";    // treat all JS code as newer version

// alert(3 + 3)   // we are using node.js, not browser
// alert function will work in browser.

// Data Types 

// number => 2 to the power of 53
console.log(2 ** 53);   // 9007199254740992
// bigint 
// string => " ... "
// boolean => true/false
// null => stand alone value and also data type
// undefined => stand alone value and data type
// symbol => unique symbol
// object => { ... }

console.log(typeof null);  // object
console.log(typeof "Shubham");  // string
console.log(typeof undefined);  // undefined

console.log(undefined);   // undefined
console.log(null);    // null


const obj = {}    // an empty object
const arr = []    // an empty array
const date = new Date()    // a date object
console.log(date);    // 2023-12-10T04:34:37.509Z

console.log(typeof obj);   // object
console.log(typeof arr);   // object
console.log(typeof date);  // object
