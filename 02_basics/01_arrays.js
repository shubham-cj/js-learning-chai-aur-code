//> Array:

const myArray = [1, 2, "dj", true, false, {key: "value"}]
const myAry = [0, 1, 2, 3, 4, 5]
// Arrays are declared in square brackets and the single value in it is called elements.

console.log(myArray[0]);   // 1
console.log(myArray[1]);   // 2

// Array methods

myAry.push(6)    // It adds element to the end of the array.
myAry.push(7)
myAry.pop()      // It removes element from the end of the array.
myAry.unshift(7) // It adds element to the start of the array.
myAry.shift()    // It removes element from the start of the array.

console.log(myAry.includes(9));   // false
console.log(myAry.indexOf(5));   // 5

const newArray = myAry.join("");   // Adds all the elements of an array into a string, separated by the specified separator string(In case of not specified string separator it takes comma(,) separator).

console.log(myAry)   // [ 0, 1, 2, 3, 4, 5, 6 ]
console.log(newArray)   // 0123456



// Slice and Splice methods:
console.log("A", myAry);   // A [ 0, 1, 2, 3, 4, 5, 6 ]

const myAry1 = myAry.slice(0, 3)
/*
> Slice method:
    Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array.
*/
console.log(myAry1)   // [ 0, 1, 2 ]
console.log("B", myAry);   // B [ 0, 1, 2, 3, 4, 5, 6 ]


const myAry2 = myAry.splice(0, 3)

/*
> Splice method:
    Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
*/
console.log(myAry2)   // [ 0, 1, 2 ]
console.log("C", myAry)   // C [ 3, 4, 5, 6]

// `Slice` method returns a copy of a section of an array.
// `Splice` method removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.