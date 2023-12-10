function sayMyName() {
    console.log("S");
    console.log("h");
    console.log("u");
    console.log("b");
    console.log("h");
    console.log("a");
    console.log("m");
    
}
// sayMyName();   // calling function



function addTwoNumbers(num1, num2) {      // num1 and num2 are 'arguments'
    // console.log(num1 + num2);
}
addTwoNumbers()   // NaN
addTwoNumbers(2, 3)   // 5                // 2 and 3 are 'parameters'
addTwoNumbers(2, "3")   // 23
addTwoNumbers(2, null)   // 2


function addNumbers(num1, num2){
    return num1 + num2;
}
addNumbers(2, 3)    // nothing will be logged in console
// console.log(addNumbers(2, 3));    // 5


function loginUserMsg(username = "user"){
    if (!username){
        return "Please enter a username"
    }
    return `${username} just logged in.`
}
// console.log(loginUserMsg("Shubham"));    // Shubham just logged in.
// console.log(loginUserMsg(""));    // just logged in.
// console.log(loginUserMsg());    // user just logged in.




function calculateCartPrice(...num){        // this ... operator is called as rest operator.
    return num
}
// console.log(calculateCartPrice(200, 400, 500, 2000));    // [ 200, 400, 500, 2000 ]

function calculateCartPrice(val1, val2,...num){
    return num
}
// console.log(calculateCartPrice(200, 400, 500, 2000));    // [ 500, 2000 ]



const user = {
    username: "shubham",
    age: 24
} 
function handeleobject(obj){
    console.log(`User is ${obj.username} and age is ${obj.age}`);
}
// handeleobject(user);   // User is shubham and age is 24
handeleobject({
    username: "shubham",
    age: 24
});   // User is shubham and age is 24



const myNewArray = [200, 3000, 400]
function returnSecondVAlue(array) {
    return array[1]
}
// console.log(returnSecondVAlue(myNewArray));   // 3000
console.log(returnSecondVAlue([100, 3000, 400]));   // 3000
