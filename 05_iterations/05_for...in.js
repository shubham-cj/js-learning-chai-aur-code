//> for...in loop:

const myObject = {
    js: "javascript",
    cpp: "c++",
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    // console.log(`Here's key of object is "${key}" and value is "${myObject[key]}".`);
}
// So this is how we can iterate over the objects.



// if we use for...in to array, 
myArray = ["js", "cpp", "rb", "swift", "java"]

for (const key in myArray) {
    // console.log(key);
}
// by this method we will get the index of array elements as key, but these numbers are actually keys of array elements.
// And we can easily get values of it,
for (const key in myArray) {
    // console.log(myArray[key]);
}


// Now can we use for...in to map object,
const myMap = new Map();

myMap.set("js", "javascript");
myMap.set("cpp", "c++");
myMap.set("rb", "ruby");
myMap.set("swift", "swift by apple");

for (const key in myMap) {
    console.log(key);
}
// This will not return anything because map is not iterable.

