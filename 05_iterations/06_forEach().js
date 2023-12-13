//> forEach loop:

// forEach is a built-in function in arrays.


const coding = ["js", "css", "java", "ruby", "python", "cpp"]

coding.forEach( function (items){
    // console.log(items);
})
// This will print all the elements of array.

// We can use arrow functions too,
coding.forEach( (items) => {
    // console.log(items);
})
// This will print all the elements of array.


// We can pass already existing function in forEach function,
function printMe(items){
    console.log(items);
}

// coding.forEach( printMe );    // This will print all the elements of array.
// Notice here we are giving only references of >>> printMe <<< function, not executing the function >>> printMe() <<<.


coding.forEach((item, index, arr)=> {
    // console.log(item, index, arr);
})
// You can have access to the items in the array and also index of the items in the array and total array also.



// iterating through array with objects as it's values:
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js",
    },
    {
        languageName: "c++",
        languageFileName: "cpp",
    },
    {
        languageName: "ruby",
        languageFileName: "rb",
    },
    {
        languageName: "python",
        languageFileName: "py",
    }
]

myCoding.forEach((item)=> {
    console.log(item.languageName);
})