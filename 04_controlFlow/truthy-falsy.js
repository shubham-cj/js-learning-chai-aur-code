const useremail = "shubham@mgang.com";

if (useremail) {
    // console.log("Got your email address");
} else {
    console.log("No email address");
}
// Got your email address

// Here in above example you can see that the condition for if statement is not any conditional statement it's just a variable having string value. 
// Because of the useremail has a value in it, the if statement considered as TRUE value.
// This TRUE value is called as TRUTHY value.

/*
Here are the values which are considered as truthy and falsy values

> Falsy values:
false, 0, -0, 0n (BigInt), "", null, undefined, NaN

> Truthy values:
"0", "false", " ", true, 1, 1n (BigInt), "any string", {}, [], function(){}

*/

//> How to check emptyArray:
const emptyArray = []

if (emptyArray.length === 0) {
    // console.log("Array is empty");
}

//> How to check emptyArray:
const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    // console.log("Object is empty");
}

// Some general knowledge 
console.log(false == 0);  // true
console.log(false == "");  // true
console.log(0 == "");  // true


//****************************************************************
//> Nullish Colescing Operators (??): 

// The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.

let value;
value = 5 ?? 10
console.log(value);  // 5

value = null ?? 10
console.log(value);  // 10

value = undefined ?? 10
console.log(value);  // 10

value = null ?? 5 ?? 10
console.log(value);  // 5


//****************************************************************
//> Conditional (ternary) operator:

// The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute if the condition is falsy. This operator is frequently used as an alternative to an if...else statement.

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("greater than 80");    // greater than 80
