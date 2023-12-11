// Control Flow or Logic Flow

//> by `if` statement

condition = true
if (condition){
    // code

} else {
    // code

}

//> condition operatora: <, >, <=, >=, ==, !=, ===, !== 

const score = 200
if (score > 100){
    let power = "Fly"
    // console.log(`User can have power to ${power}`);    // User can have power to Fly
}
// console.log(`User can have power to ${power}`);    // ReferenceError: power is not defined



//> shorthand notation:

let balance = 1000
// if (balance > 500) console.log(`You have ${balance} balance.`);    // You have 1000 balance.

/* 
Here, this type of syntax is called as implicit scope >>> scope {} is assumed to be implicitly defined.
And the semicolon ; is important to execute the if statement in single line.
*/

// Still you can have exicute multiple lines by using commas(,):
balance = 2000
// if (balance > 500) console.log(`Balance is more than 500`),    // Balance is more than 500
// console.log(`You have ${balance} balance.`);    // You have 2000 balance.
// But this syntax is not to be preffered.



//> else if():

if (balance < 500){
    console.log("less balance");

} else if (balance < 700){
    console.log("less than 700");

} else if (balance < 900){
    console.log("less than 900");

} else {
    // console.log("more than 900");

}


//> AND(&&) and OR(||):

const isUserLoggedIn = true;
const hasDebitCard = true;
const loggedInFromEmail = false;
const loggedInFromNumber = false;
const guestUser = true;

if (isUserLoggedIn && hasDebitCard){
    console.log(`Allow to Buy`);     // Allow to Buy
}
if (loggedInFromEmail || loggedInFromNumber || guestUser){
    console.log(`User logged in`);    // User logged in
}