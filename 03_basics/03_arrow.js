const user = {
    username: "shubham",
    age: 24,
    welcomeMessage: function(){
        console.log(`${this.username} Welcome`)
    }
}

// user.welcomeMessage();   // shubham Welcome
user.username = "Balya"
// user.welcomeMessage();   // Balya Welcome

// console.log(this);   // {}

// function chai(){
//     let name = "shubham";
//     console.log(this.name);
// }

// chai();   // undefined



// const chai = function(){
//     let name = "shubham";
//     console.log(this.name);
// }

// chai();   // undefined


const chai = () => {
    let name = "shubham";
    console.log(this.name);
}

// chai();   // undefined



// Arrow functions:

// const add = (num1, num2) => {       // // this technique is called explicit return.
//     return num1 + num2;
// }

// console.log(add(1, 2));    // 3

// const add = (num1, num2) =>  num1 + num2
// console.log(add(1, 2));    // 3

// const add = (num1, num2) =>  ( num1 + num2 )       // this technique is called implicit return.
// console.log(add(1, 2));    // 3

const add = (num1, num2) =>  ( {username: "Shubham"} )      
console.log(add(1, 2));    // { username: 'Shubham' }




