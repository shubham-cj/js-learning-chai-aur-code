// Immediately Invoked Function Expression (IIFE)

// iife is used to immediately run a function expression.

function chai(){
    console.log("DB CONNECTED");
}
// chai()   // DB CONNECTED
// This is one way to run a function expression

// To run a function expression with iife, we need to put the function definition in parentheses and again one parentheses. >>> (function definition)(); <<<

(function chai(){                 // if you use function name it will also called as named iife function.
    console.log("DB CONNECTED");
})();   // DB CONNECTED

// Here the semicolon is very important to stop iife from running. Otherwise you cant not run iife to another function expression after it and you will get an error >>> (intermediate value)(...) is not a function <<<

(() => {                          // this is normal iife function.
    console.log("DB CONNECTED");
})();   // DB CONNECTED

/* 
An Immediately-Invoked Function Expression (IIFE) is a JavaScript function that runs as soon as it is defined. It is also known as a self-executing function or a self-invoked function.

IIFEs are useful for a number of things, including:
 - Creating a private scope for variables and functions.
 - Avoiding polluting the global namespace.
 - Creating modules.
 - Implementing asynchronous code.
*/


// If we want to pass arguments, this can also be possible in iife functions:
( (name) => {
    console.log(`Hi ${name}, how are you?`);
})("Shubham");    // Hi Shubham, how are you?