// Array

const myArray = [1, 2, "dj", true, false, {key: "value"}]
const myAry = [0, 1, 2, 3, 4, 5]
// Arrays are declared in square brackets and the single value in it is called elements.

console.log(myArray[0]);   // 1
console.log(myArray[1]);   // 2

// Array methods

myAry.push(6)
myAry.push(7)
myAry.pop()
myAry.unshift(7)
myAry.shift()

console.log(myAry.includes(9));   // false
console.log(myAry.indexOf(5));   // 5

const newArray = myAry.join();

console.log(myAry)   // [ 0, 1, 2, 3, 4, 5, 6 ]
console.log(newArray)   // 0,1,2,3,4,5,6

console.log("A", myAry);   // A [ 0, 1, 2, 3, 4, 5, 6 ]

const myAry1 = myAry.slice(0, 3)
console.log(myAry1)   // [ 0, 1, 2 ]

console.log("B", myAry);   // B [ 0, 1, 2, 3, 4, 5, 6 ]

const myAry2 = myAry.splice(0, 3)
console.log(myAry2)   // [ 0, 1, 2 ]

console.log("C", myAry)   // C [ 3, 4, 5, 6]

// `Slice` method returns a copy of a section of an array.
// `Splice` method removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.