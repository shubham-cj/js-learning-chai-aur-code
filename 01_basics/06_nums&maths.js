const value = new Number(100);
console.log(value.toString());    // 100
// Returns number value as a string data type.

console.log(value.valueOf());    // 100
// Returns number value as number data type.

console.log(value.toFixed(2));    // 100.00
// Returns a string representing a number in fixed-point notation.

const score = 128.748
console.log(score.toPrecision(4));    // 128.7
// Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.

const hundreds = 10000000
console.log(hundreds.toLocaleString())    // 1,00,00,000
// Converts a number to a string by using the current or specified locale. It convers number into a string which represents the number in localy used format.



//------------------------Math-------------------------

console.log(Math);   // Object [Math] {}
// Returns an intrinsic object that provides basic mathematics functionality and constants.

console.log(Math.abs(-1123));    // 1123
// Returns the absolute value of a number (the value without regard to whether it is positive or negative). For example, the absolute value of -5 is the same as the absolute value of 5.

console.log(Math.round(41.34));    // 41
// Returns a supplied numeric expression rounded to the nearest integer.

console.log(Math.ceil(41.34));    // 42
// Returns the smallest integer greater than or equal to its numeric argument.

console.log(Math.floor(41.34));    // 41
// Returns the greatest integer less than or equal to its numeric argument.

console.log(Math.min(2,0.6,3,6));    // 0.6
// Returns the smaller of a set of supplied numeric expressions.

console.log(Math.max(2,0.6,3,6));    // 6
// Returns the larger of a set of supplied numeric expressions.

console.log(Math.random());    // 0.4229116500720518
// Returns a pseudorandom number between 0 and 1.

console.log((Math.random()*10) + 1);    // 1.670074822405553
// By multiplying Math.random() with 10 and then add 1 to it, it returns random value from 1 to 10.

console.log(Math.floor((Math.random()*10) + 1));    // 8
// By flooring the value removes decimal number.



// Here's a trick to get random number from any number upto any number:
const min = 20    // min is the minimum number that we want to have in random number.
const max = 60    // max is the maximum number that we want to have in random number

console.log(Math.floor(Math.random()*(max - min + 1) + min));     // 35
// Above formula will return you a random number between min and max.
 
console.log(123 * Math.SQRT1_2);     // 86.97413408594535
// Math.SQRT_2 is the value of square root of 2.

/* Some values will get by the following formulas:

> Math.E          (2.718281828459045)
The mathematical constant e. This is Euler's number, the base of natural logarithms.

> Math.LN2        (0.6931471805599453)
The natural logarithm of 2.

> Math.LN10       (2.302585092994046)
The natural logarithm of 10.

> Math.LOG2       (1.4426950408889634)
The static method returns the base 2 logarithm of a number.

> Math.LOG10E     (0.4342944819032518)
The base-10 logarithm of e.

> Math.PI         (3.141592653589793)
Pi. This is the ratio of the circumference of a circle to its diameter.

> Math.SQRT1_2    (0.7071067811865476)
The square root of 0.5, or, equivalently, one divided by the square root of 2.

> Math.SQRT2      (1.4142135623730951)
The square root of 2.

*/
