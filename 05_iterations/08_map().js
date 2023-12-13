const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

let newNums = myNumbers.map( (num) => (num + 10))
// console.log(newNums);

// The map() method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array.



// You can use map() method on a existing map(),
newNums = myNumbers.map( (num) => (num * 10)).map( (num) => (num + 1))

// Again with this two map() you can use filter() method on it too,
newNums = myNumbers
                    .map( (num) => (num * 10))
                    .map( (num) => (num + 1))
                    .filter( (num) => (num >= 40))

console.log(newNums);
