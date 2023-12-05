const name = "Shubham"
const repoCount = 10

// console.log(name + repoCount + " repositories");
// This syntax of string concatenation is old don't use this syntax.

// Instead you should use new syntax called "string interpolation" (`string content`).
// console.log(`${name} ${repoCount} repositories`);

const instaId = new String("shubham_cj")
// This syntax is new style to assign string in variables.
// This will gives so many properties with it.
// Let's use the properties one by one
console.log(instaId.toString());


// lengthOf()
console.log(instaId.length)   // 10


// at()
// The at() method of Array instances takes an integer value and returns the item at that index, allowing for positive and negative integers. Negative integers count back from the last item in the array.
const array1 = [5, 12, 8, 130, 44];
let index = 2;
console.log(`An index of ${index} returns ${array1.at(index)}`);
// "An index of 2 returns 8"
index = -2;
console.log(`An index of ${index} returns ${array1.at(index)}`);
// "An index of -2 returns 130"


// charAt()
//The charAt() method of String values returns a new string consisting of the single character at the given index.
const sentence = 'The quick brown fox jumps over the lazy dog.';
const index1 = 4;
console.log(`The character at index ${index1} is ${sentence.charAt(index1)}`);
// The character at index 4 is q


// charCodeAt()
// The charCodeAt() method of String values returns an integer between 0 and 65535 representing the UTF-16 (16 bit Unicode Transformation Format) code unit at the given index.
const sentence1 = 'The quick brown fox jumps over the lazy dog.';
const index2 = 4;
console.log(`Character code ${sentence1.charCodeAt(index2)} is equal to ${sentence1.charAt(index2)}`);
// Character code 113 is equal to q


// codePointAt()
// The codePointAt() method of String values returns a non-negative integer that is the Unicode code point value of the character starting at the given index. Note that the index is still based on UTF-16 code units.
console.log(`Character code ${sentence1.codePointAt(index2)} is equal to ${sentence1.charAt(index2)}`);
// Character code 113 is equal to q

// Difference Between charCodeAt() and codePointAt()
// charCodeAt() returns a number between 0 and 65535. Both methods return an integer representing the UTF-16 code of a character, but only codePointAt() can return the full value of a Unicode value greather 0xFFFF (65535).


// concat()
// The concat() method of Array instances is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
const array0 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array0.concat(array2);
console.log(array3);   // ["a", "b", "c", "d", "e", "f"]


// endsWith()
// The endsWith() method of String values determines whether a string ends with the characters of this string, returning true or false as appropriate.
const str1 = 'Cats are the best!';
console.log(str1.endsWith('best!'));   // true
// we can specify end position as follows:
console.log(str1.endsWith('best', 17));   // true


// startsWith()
// The startsWith() method of String values determines whether a string starts with the characters of this string, returning true or false as appropriate.
const str3 = 'Cats are the best!';
console.log(str3.startsWith('Cats'));   // true
// we can specify start position as follows:
console.log(str3.startsWith('Cats', 5));   // false


// includes()
// The includes() method of Array instances determines whether an array includes a certain value among its entries, returning true or false as appropriate.
const pets = ['cat', 'dog', 'bat'];
console.log(pets.includes('cat'));   // true
console.log(pets.includes('at'));   // false


// indexOf()
// The indexOf() method of Array instances returns the first index at which a given element can be found in the array, or -1 if it is not present.
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log(beasts.indexOf('bison'));    // 1
// Start from index 2
console.log(beasts.indexOf('bison', 2));    // 4
console.log(beasts.indexOf('giraffe'));    // -1


