//> While Loop:

let index = 0;
while (index <= 10) {
    // console.log(`Value of Index: ${index}`);
    index += 2
}
// this is how while loop works


let myArray = ["Shaktiman", "Krish", "Jadoo"]
let i = 0
while (i < myArray.length) {
    // console.log(`Hero is ${myArray[i]}.`);
    i++;
}
// while loop using an array.

// ****************************************************************

//> Do-while Loop

// Do-while Loop, first do execution of code and then check the condition.

let score = 0

do {
    // console.log(`Score: ${score}`);
    score++;
} while (score <= 10);
// here first score is logged to console and then condition is checked.


let scoreNo = 11

do {
    console.log(`Score: ${scoreNo}`);
    scoreNo++;
} while (scoreNo <= 10);    // Score: 11

// here do-while loop first logged the score to console and then because of condition value is false it exists the loop.

