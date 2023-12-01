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

