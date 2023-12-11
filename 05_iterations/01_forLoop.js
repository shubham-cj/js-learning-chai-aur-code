/*
for (let index = 0; index < array.length; index++) {
    const element = array[index];
}

> This is basic syntax of FOR loop.
*/


for (let index = 0; index < 10; index++) {
    const element = index;
    // console.log(element);
}

// A for loop repeats until a specified condition evaluates to false.



for (let i = 0; i < 10; i++) {
    const element = i;
    if (element == 5){
        // console.log("5 is best number");
    } else {
        // console.log(element);
    }
    
}
// if-else statements in a for loop



for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop value: ${i}`);

    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loop value: ${j} in ${i} outer loop`);
        
    }
    
}
// Nested loop



//> 2 to 10 tabels using for loop:
for (let i = 2; i <= 10; i++) {
    // console.log(`Tabel of ${i}:`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`${i} x ${j} = ${i * j}`);
    }
}



let myArray = ["flash", "batman", "superman"]
// console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}
// for loop using array



//> break and continue:

for (let i = 1; i <= 20; i++) {
    console.log(`iteration value is ${i}`);
    if (i == 5) {
        console.log(`${i} is detected`);
        break;
    }   
}
// break immediately exit the loop.


for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log(`${i} is detected`);
        continue;
    }   
    console.log(`iteration value is ${i}`);
}
// continue skip the remaining loop statements and go to next iteration.


