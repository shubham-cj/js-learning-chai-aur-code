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
