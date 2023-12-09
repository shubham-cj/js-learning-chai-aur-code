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



function addTwoNumbers(num1, num2) {      // num1 and num2 are 'parameters'
    // console.log(num1 + num2);
}

addTwoNumbers()   // NaN
addTwoNumbers(2, 3)   // 5                // 2 and 3 are 'aruments'
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
console.log(loginUserMsg());    // user just logged in.



