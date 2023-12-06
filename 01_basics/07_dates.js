let myDate = new Date()
console.log(typeof myDate)
console.log(typeof myDate.valueOf())
console.log(myDate.valueOf())
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toTimeString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());

let myCreationDate = new Date(2023, 0, 23)
console.log(myCreationDate.toDateString());

myCreationDate = new Date(2023, 1)
console.log(myCreationDate.toLocaleDateString());

myCreationDate = new Date(2023, 1, 23, 5, 3, 24)
console.log(myCreationDate.toLocaleString());

myCreationDate = new Date("2023-01-19")
console.log(myCreationDate.toLocaleString());

myCreationDate = new Date("12-01-2023")
console.log(myCreationDate.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreationDate.getTime());

console.log(Math.floor(Date.now()/1000));  // to get time in seconds

let newDate = new Date()
console.log(newDate);   // 2023-12-06T13:28:00.633Z
console.log(newDate.getDate());   // 6
console.log(newDate.getMonth() + 1);   // 12
console.log(newDate.getDay());   // 3
console.log(newDate.getFullYear());   // 2023
console.log(newDate.getHours());   // 18

console.log(`Today's date is ${newDate.getDate()} of month ${newDate.getMonth() + 1} and Time is ${newDate.toLocaleTimeString()}`);   // Today's date is 6 of month 12 and Time is 6:57:30 pm

console.log(newDate.toLocaleString("default", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
}))  
// Wednesday, 6 December, 2023
