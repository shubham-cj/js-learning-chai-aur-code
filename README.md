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

