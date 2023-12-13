//> for...of loop:

/*
The for...of statement executes a loop that operates on a sequence of values sourced from an iterable object. Iterable objects include instances of built-ins such as Array, String, TypedArray, Map, Set, NodeList (and other DOM collections), as well as the arguments object, generators produced by generator functions, and user-defined iterables.
*/

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9]
for (const nums of number) {
    // console.log(nums);
}
// Console logged every value of an array to each line.


// You can use the for...of statement to string values also:
const greeting = "Hello world!"
for (const greet of greeting) {
    if (greet == " ") {
        // console.log("each character is space");
        continue
    }
    // console.log(`each character is ${greet}`);
}



