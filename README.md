![Js Logo](https://res.cloudinary.com/diwtxg4ou/image/upload/v1701707489/samples/hxi56trywjosexcl6rah.png "JS Logo")
#JavaScript Learning - Chai Aur Code 
This is a JavaScript programming language Notes
___
##JavaScript Variables
#####Variables are Containers for Storing Data
JavaScript Variables can be declared in 4 ways:

Automatically
Using `var`
Using `let`
Using `const`

_example_
``` javascript
x = 2
y = 3
z = x + y
console.log(z) // 5
```

>In this example, x, y, and z are undeclared variables.
They are automatically declared when first used.

_example using `let`_
``` javascript
let x = 2
let y = 3
let z = x + y
console.log(z) // 5
```
_example using `var`_
``` javascript
var x = 2
var y = 3
var z = x + y
console.log(z) // 5
```
_example using `const`_
``` javascript
const x = 2
const y = 3
const z = x + y
console.log(z) // 5
```
_Mixed example_
``` javascript
const price1 = 2
const price2 = 3
let total = price1 + price2
console.log(z) // 5
```
>In this example
The two variables `price1` and `price2` are declared with the `const` keyword.
These are constant values and cannot be changed.
The variable total is declared with the `let` keyword.
The value `total` can be changed.

<div style="background-color:#FFFDAF">
Note

 1. The `var` keyword was used in all JavaScript code from 1995 to 2015.
 2. The `let` and `const` keywords were added to JavaScript in 2015.
 3. The `var` keyword should only be used in code written for older browsers..
 4. Prefer not to use `var` because of issues with block scope and functional scope. Instead always prefer to use `let`.
</div>

___
##JavaScript Data Types
####JavaScript has 8 Datatypes
1. `String`
2. `Number`
3. `Bigint`
4. `Boolean`
5. `Undefined`
6. `Null`
7. `Symbol`
8. `Object`

####The Object Datatype
######The object data type can contain:

1. An `object`
2. An `array`
3. A `date`

``` javascript
// Numbers:
let length = 16;
let weight = 7.5;

// Strings:
let color = "Yellow";
let lastName = "Johnson";

// Booleans
let x = true;
let y = false;

// Object:
const person = {firstName:"John", lastName:"Doe"};

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
const date = new Date("2022-03-25");
```
>JavaScript `BigInt` variables are used to store big integer values that are too big to be represented by a normal JavaScript `Number`.

```javascript
let a
console.log(a) // undefined

//here if we don't specify value to a variable it will be `undefined`

let a = null
console.log(a) // null
//here if we don't want any value to variable and don't want it as undefined we can just assign `null` to the value.
```
___
##Type Convresion 
######JavaScript type conversion can be done by the use of a JavaScript function

`Number()` is used to convert into a number data type
`String()` is used to convert into a string data type
`Boolean()` is used to convert into a boolean data type

``` javascript
//Conversion to "string"

let value = 12345  //useing number type
let valueToString = String(value) 
console.log(valueToString)  //12345
console.log(typeof valueToString)  //string

value = true  //useing boolean type
valueToString = String(value) 
console.log(valueToString)   //true
console.log(typeof valueToString)   //string

value = null  //useing null type
valueToString = String(value) 
console.log(valueToString)   //null
console.log(typeof valueToString)   //string

value = undefined  //useing undefined type
valueToString = String(value) 
console.log(valueToString)   //undefined
console.log(typeof valueToString)   //string

value = {a: true}  //useing undefined type
valueToString = String(value) 
console.log(valueToString)   //[object Object]
console.log(typeof valueToString)   //string

//Conversion to number

let value1 = "1"   //using number string type
let value1ToNumber = Number(value1)
console.log(value1ToNumber)   //1
console.log(typeof value1ToNumber)   //number

value1 = "1abc"   //using number and string type
value1ToNumber = Number(value1)
console.log(value1ToNumber)   //NaN
console.log(typeof value1ToNumber)   //number

value1 = "abc"   //using string type
value1ToNumber = Number(value1)
console.log(value1ToNumber)   //NaN
console.log(typeof value1ToNumber)   //number

value1 = true   //using boolean type
value1ToNumber = Number(value1)
console.log(value1ToNumber)   //1
console.log(typeof value1ToNumber)   //number

value1 = false   //using boolean type
value1ToNumber = Number(value1)
console.log(value1ToNumber)   //0
console.log(typeof value1ToNumber)   //number

value1 = undefined   //using undefined type
value1ToNumber = Number(value1)
console.log(value1ToNumber)   //NaN
console.log(typeof value1ToNumber)   //number

value1 = null   //using null type
value1ToNumber = Number(value1)
console.log(value1ToNumber)   //0
console.log(typeof value1ToNumber)   //number

value1 = ""   //using empty string type
value1ToNumber = Number(value1)
console.log(value1ToNumber)   //0
console.log(typeof value1ToNumber)   //number

//Conversion to Boolean

let value2 = "true"  //using true string type
let value2ToBoolean = Boolean(value2)
console.log(value2ToBoolean)   //true
console.log(typeof value2ToBoolean)   //boolean

value2 = "false"  //using false string type
value2ToBoolean = Boolean(value2)
console.log(value2ToBoolean)   //true
console.log(typeof value2ToBoolean)   //boolean

value2 = "abc"  //using any string type
value2ToBoolean = Boolean(value2)
console.log(value2ToBoolean)   //true
console.log(typeof value2ToBoolean)   //boolean

value2 = ""  //using empty string type
value2ToBoolean = Boolean(value2)
console.log(value2ToBoolean)   //false
console.log(typeof value2ToBoolean)   //boolean

value2 = 1  //using 1 number type
value2ToBoolean = Boolean(value2)
console.log(value2ToBoolean)   //true
console.log(typeof value2ToBoolean)   //boolean

value2 = 0  //using 0 number type
value2ToBoolean = Boolean(value2)
console.log(value2ToBoolean)   //false
console.log(typeof value2ToBoolean)   //boolean

value2 = 24  //using any number type
value2ToBoolean = Boolean(value2)
console.log(value2ToBoolean)   //true
console.log(typeof value2ToBoolean)   //boolean

value2 = null  //using null type
value2ToBoolean = Boolean(value2)
console.log(value2ToBoolean)   //false
console.log(typeof value2ToBoolean)   //boolean

value2 = undefined  //using undefined type
value2ToBoolean = Boolean(value2)
console.log(value2ToBoolean)   //false
console.log(typeof value2ToBoolean)   //boolean

//Conversion to undefined

// let value3 = "undefined"  //using undefined string type
// let value3ToUndefined = undefined(value3)
// console.log(value3ToUndefined)   //TypeError: undefined is not a function

// Conversion to null

// let value4 = "null"  //using null string type
// let value4ToNull = null(value4)
// console.log(value4ToNull)   //TypeError: null is not a function
```
>You can not do conversions to undefined & null, because `undefined()` and `null()` respectively are not a function.
___
##Javascript Operators
######Operators are used to assign values, compare values, perform arithmetic operations, and more.

There are different types of JavaScript operators:

    Assignment Operators
    Comparison Operators
    Arithmetic Operators
    Bitwise operators
    Logical Operators
    Conditional Operators
**Assignment Operators**
|Name |Shorthand operator |Meaning |
| ---|---|---|
|Assignment	|`x = f()`	|`x = f()`|
|Addition assignment	|`x += f()`	|`x = x + f()`|
|Subtraction assignment	|`x -= f()`	|`x = x - f()`|
|Multiplication assignment	|`x *= f()`	|`x = x * f()`|
|Division assignment	|`x /= f()`	|`x = x / f()`|
|Remainder assignment	|`x %= f()	`|`x = x % f()`|
|Exponentiation assignment	|`x **= f()	`|`x = x ** f()`|
|Left shift assignment	|`x <<= f()`|`x = x << f()`|
|Right shift assignment	|`x >>= f()`	|`x = x >> f()`|
|Unsigned right shift assignment	|`x >>>= f()`	|`x = x >>> f()`|
|Bitwise AND assignment	|`x &= f()`	|`x = x & f()`|
|Bitwise XOR assignment	|`x ^= f()`	|`x = x ^ f()`|
|Bitwise OR assignment	|`x l= f()`	|`x = x l f()`|
|Logical AND assignment	|`x &&= f()`	|`x && (x = f())`|
|Logical OR assignment	|`x ll= f()`	|`x ll (x = f())`|
|Nullish coalescing assignment	|`x ??= f()`	|`x ?? (x = f())`|

>Here in the table '`l`'(small l) = '|' (pipe character)

**Comparison Operators**
|Operator	|Description	|Examples returning true |
|--- |--- |--- |
|Equal `(==)`	|Returns true if the operands are equal.	|3 == var1<br>"3" == var1<br>3 == '3' |
|Not equal `(!=)`	|Returns true if the operands are not equal.	|`var1 != 4`<br>`var2 != "3"` |
|Strict equal `(===)`	|Returns true if the operands are equal and of the same type. See also Object. is and sameness in JS.	|3 === var1|
|Strict not equal `(!==)`	|Returns true if the operands are of the same type but not equal, or are of different type.	|`var1 !== "3"` <br> `3 !== '3'`|
|Greater than `(>)`	|Returns true if the left operand is greater than the right operand.	|var2 > var1<br>"12" > 2 |
|Greater than or equal `(>=)`	|Returns true if the left operand is greater than or equal to the right operand.	|`var2 >= var1` <br>`var1 >= 3` |
|Less than `(<)`	|Returns true if the left operand is less than the right operand.	|var1 < var2 <br>"2" < 12 |
|Less than or equal `(<=)`	|Returns true if the left operand is less than or equal to the right operand.	|`var1 <= var2` <br>`var2 <= 5 `|

**Arithmetic Operators**
|Operator	|Description	|Example|
| ---| ---| ---|
|Remainder `(%)`	|Binary operator. Returns the integer remainder of dividing the two operands.	|12 % 5 returns 2.|
|Increment `(++)`	|Unary operator. Adds one to its operand. If used as a prefix operator `(++x)`, returns the value of its operand after adding one; if used as a postfix operator `(x++)`, returns the value of its operand before adding one.	|If `x` is 3, then `++x` sets `x` to 4 and returns 4, whereas `x++` returns 3 and, only then, sets `x` to 4.|
|Decrement `(--)`	|Unary operator. Subtracts one from its operand. The return value is analogous to that for the increment operator.	|If `x` is 3, then -`-x` sets `x` to 2 and returns 2, whereas `x--` returns 3 and, only then, sets `x` to 2.|
|Unary negation `(-)`	|Unary operator. Returns the negation of its operand.	|If `x` is 3, then `-x` returns -3.
|Unary plus `(+)`	|Unary operator. Attempts to convert the operand to a number, if it is not already.	|`+"3"` returns `3`. <br> `+true` returns `1`.|
|Exponentiation operator `(**)`	|Calculates the `base` to the `exponent` power, that is, `base^exponent`	|`2 ** 3 `returns `8`. <br> `10 ** -1 `returns `0.1`.|

**Bitwise operators**
|Operator	|Usage	|Description |
|--- |--- |--- |
|Bitwise AND	|`a & b`	|Returns a one in each bit position for which the corresponding bits of both operands are ones.|
Bitwise OR	|`a l b`	|Returns a zero in each bit position for which the corresponding bits of both operands are zeros.|
|Bitwise XOR	|`a ^ b`	|Returns a zero in each bit position for which the corresponding bits are the same. [Returns a one in each bit position for which the corresponding bits are different.]|
|Bitwise NOT	|`~ a`	|Inverts the bits of its operand.|
|Left shift	|`a<<b`|Shifts `a` in binary representation `b` bits to the left, shifting in zeros from the right.|
|Sign-propagating right shift	|`a>>b`	|Shifts `a` in binary representation `b` bits to the right, discarding bits shifted off.|
|Zero-fill right shift	|`a>>>b`	|Shifts `a` in binary representation `b` bits to the right, discarding bits shifted off, and shifting in zeros from the left.|

**Logical Operators**
|Operator	|Usage	|Description |
|--- |--- |--- |
|Logical AND `(&&)`	|`expr1 && expr2`	|Returns expr1 if it can be converted to `false`; otherwise, returns `expr2`. Thus, when used with Boolean values, `&&` returns `true` if both operands are `true`; otherwise, returns `false`. |
Logical OR `(ll)`	|`expr1 ll expr2`	|Returns `expr1` if it can be converted to `true`; otherwise, returns `expr2`. Thus, when used with Boolean values, `ll` returns `true` if either operand is `true`; if both are `false`, returns `false`. |
Logical NOT `(!)`	|`!expr`	|Returns `false` if its single operand that can be converted to `true`; otherwise, returns `true`. |

**Conditional Operators**
The conditional operator is the only JavaScript operator that takes three operands. The operator can have one of two values based on a condition.
The syntax is:
``` javascript
condition ? val1 : val2
```
If condition is `true`, the operator has the value of `val1`. Otherwise it has the value of `val2`. You can use the conditional operator anywhere you would use a standard operator.

For example,
``` javascript
const status = age >= 18 ? "adult" : "minor";
```
This statement assigns the value "**adult**" to the variable `status` if `age` is eighteen or more. Otherwise, it assigns the value "**minor**" to `status`.
____
##Postfix and Prefix Operators
####Postfix and Prefix Increment Operator
``` javascript
let x = 3;
const y = x++;
// x is 4 and y is 3

let x = 3;
const y = ++x;
// x is 4 and y is 4
```
####Postfix and Prefix Decrement Operator
``` javascript
let x = 3;
const y = x--;
// x is 2; y is 3

let x = 3;
const y = --x;
// x is 2; y is 2
```
##Some Question-Answer about data types
    Que: Is javascript dinamically typed or statically?
    Ans: Dinamically typed, because while assigning variables we don't need to mention
        data type.

    Que: what is the difference between Primitive and Non-primitive?
    Ans: Non-primitive data types are called reference types because they refer to objects.
        The main difference between primitive and non-primitive data types are: Primitive
        types are predefined (already defined) in JavaScript. Non-primitive types are
        created by the programmer and is not defined by Java (except for String ).

##Memory Storage in JavaScript
######JavaScript uses two types of memory to store data: the stack and the heap.

**The stack**
is a LIFO (last-in-first-out) data structure that stores primitive data types (numbers, strings, booleans, null, and undefined), local variables, and function arguments. The stack is managed automatically by the JavaScript engine, and you don't need to worry about allocating or freeing memory on the stack.

**The heap**
is a free-form data structure that stores complex data types, such as objects, arrays, and functions. The heap is managed by the garbage collector, which automatically reclaims memory that is no longer being used.

    stack(for primitive types) >> it gives the copy of data
    heap(for non-primitive types) >> it gives the reference of data

##Strings
#####String concatenation
```javascript
const name = "Shubham"
const repoCount = 10

console.log(name + repoCount + " repositories")  // Shubham10 repositories
//This syntax of string concatenation is old don't use this syntax.

// Instead you should use new syntax called "string interpolation" (`string content`).
console.log(`${name} ${repoCount} repositories`); // Shubham 10 repositories
```
#####Assignings string to a variable
``` javascript
const instaId = new String("shubham_cj")
```
This syntax is new style to assign string in variables.
This will gives so many properties with it.
Properties are as follows:
__String Methods__:
* `length()`
* `charAt()`
* `charCodeAt()`
* `codePointAt()`
* `endsWith()`
* `startsWith()`
* `iswellFormed()`
* `lastIndexOf()`
* `locaelCompare()`
* `match()`
* `matchAll()`
* `normalize()`
* `padEnd()`
* `padStart()`
* `repeat()`
* `replace()`
* `replaceAll()`
* `slice()`
* `split()`
* `search()`
* `substring()`
* `toLocaleLowerCase()`
* `toLocaleUpperCase()`
* `toLowerCase()`
* `toUpperCase()`
* `toString()`
* `toWellFormed()`
* `trim()` 
* `trimStart()`
* `trimEnd()`
* `ValueOf()`

__Array Methods__:
* `length()`
* `at()`
* `concat()`
* `includes()`
* `indexOf()`

