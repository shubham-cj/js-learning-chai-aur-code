//> Array:

const marvalHeros = ["Ironman", "Thor", "Spiderman"]
const dcHeros = ["Superman", "Batman", "Flash"]

marvalHeros.push(dcHeros)

console.log(marvalHeros)   // [ "Ironman", "Thor", "Spiderman", [ "Superman", "Batman", "Flash" ] ]
// By the push() method the dcHeros object inserted into the marvalHeros array as its element, it will not be concat with the marvalHeros array.

console.log(marvalHeros[3][0]);   // Superman
marvalHeros.pop()
console.log(marvalHeros)   // [ "Ironman", "Thor", "Spiderman" ]

// If you want to concat the dcHeros with marvalHeros use concat() method:
const allHeros = marvalHeros.concat(dcHeros)
console.log(allHeros)   // [ "Ironman", "Thor", "Spiderman", "Superman", "Batman", "Flash" ]

const allNewHeros = [...marvalHeros, ...dcHeros]  // ... is called spread operator.
console.log(allNewHeros)   // [ "Ironman", "Thor", "Spiderman", "Superman", "Batman", "Flash" ]




// If you get arrays in arrays and arrays in arrays, you can handel it by flat() method:

const anotherArray = [0, 1, 2, [5, 6, 7, 8], [9, [10, 11, [12, 13]]]]
console.log(anotherArray);   // [ 0, 1, 2, [ 5, 6, 7, 8 ], [ 9, [ 10, 11, [ 12, 13 ] ] ] ]

// `flat()` method returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.

let usableAnotherArray = anotherArray.flat(1)
console.log(usableAnotherArray)   // [ 0, 1, 2, 5, 6, 7, 8 , 9, [ 10, 11, [ 12, 13 ] ] ] 
// Returns a new array containing level 1 arrays in one array.

usableAnotherArray = anotherArray.flat(2)
console.log(usableAnotherArray)   // [ 0, 1, 2, 5, 6, 7, 8 , 9, 10, 11, [ 12, 13 ] ] 
// Returns a new array containing level 2 arrays in one array.

usableAnotherArray = anotherArray.flat(Infinity)
console.log(usableAnotherArray)   // [ 0, 1, 2, 5, 6, 7, 8 , 9, 10, 11, 12, 13 ] 
// Returns a new array containing all arrays in one array.



// Array.isArray() method returns true if the given value is an array.
console.log(Array.isArray("Shubham"))   // false

// Array.from() method creates an array from an iterable object. Creates an array from an iterable object.
console.log(Array.from("Shubham"))    // [ 'S', 'h', 'u', 'b', 'h', 'a', 'm' ]
console.log(Array.from({name: "Shubham"}))   // []   // Important*


// Array.of() method creates an array with the given values. Returns a new array from a set of elements.
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3))   // [ 100, 200, 300 ]