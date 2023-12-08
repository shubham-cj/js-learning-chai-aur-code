const marvalHeros = ["Ironman", "Thor", "Spiderman"]
const dcHeros = ["Superman", "Batman", "Flash"]

marvalHeros.push(dcHeros)

console.log(marvalHeros)   // [ "Ironman", "Thor", "Spiderman", [ "Superman", "Batman", "Flash" ] ]
console.log(marvalHeros[3][0]);   // Superman
marvalHeros.pop()
console.log(marvalHeros)   // [ "Ironman", "Thor", "Spiderman" ]

const allHeros = marvalHeros.concat(dcHeros)
console.log(allHeros)   // [ "Ironman", "Thor", "Spiderman", "Superman", "Batman", "Flash" ]

const allNewHeros = [...marvalHeros, ...dcHeros]  // ... is called spread operator.
console.log(allNewHeros)   // [ "Ironman", "Thor", "Spiderman", "Superman", "Batman", "Flash" ]


const anotherArray = [0, 1, 2, [5, 6, 7, 8], [9, [10, 11, [12, 13]]]]
console.log(anotherArray);   // [ 0, 1, 2, [ 5, 6, 7, 8 ], [ 9, [ 10, 11, [ 12, 13 ] ] ] ]

let usableAnotherArray = anotherArray.flat(1)
console.log(usableAnotherArray)   // [ 0, 1, 2, 5, 6, 7, 8 , 9, [ 10, 11, [ 12, 13 ] ] ] 

usableAnotherArray = anotherArray.flat(2)
console.log(usableAnotherArray)   // [ 0, 1, 2, 5, 6, 7, 8 , 9, 10, 11, [ 12, 13 ] ] 

usableAnotherArray = anotherArray.flat(Infinity)
console.log(usableAnotherArray)   // [ 0, 1, 2, 5, 6, 7, 8 , 9, 10, 11, 12, 13 ] 


// Array.isArray() method returns true if the given value is an array.
console.log(Array.isArray("Shubham"))   // false

// Array.from() method creates an array from an iterable object.
console.log(Array.from("Shubham"))    // [ 'S', 'h', 'u', 'b', 'h', 'a', 'm' ]
console.log(Array.from({name: "Shubham"}))   // []   // Important*


// Array.of() method creates an array with the given values.
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3))   // [ 100, 200, 300 ]