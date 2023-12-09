/*
The scope is the current context of execution in which values and expressions are "visible" or can be referenced. If a variable or expression is not in the current scope, it will not be available for use. Scopes can also be layered in a hierarchy, so that child scopes have access to parent scopes, but not vice versa.
*/

console.log(addOne(4))   // 5
function addOne(num){
    return num + 1;
}

// console.log(addTwo(5));    // Cannot access 'addTwo' before initialization
const addTwo = function(num){
    return num + 2;
}

console.log(addTwo(5));   // 7
