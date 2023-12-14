// DATES: 
// JavaScript Date objects represent a single moment in time in a platform-independent format. Date objects encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970, UTC (the epoch).


let myDate = new Date()
console.log(typeof myDate)    // object
// Data type of Date object is a object.

console.log(typeof myDate.valueOf())    // number

console.log(myDate.valueOf())    // 1702539401214
// Returns the stored time value in milliseconds since midnight, January 1, 1970 UTC.

console.log(myDate.toString());    // Thu Dec 14 2023 13:06:41 GMT+0530 (India Standard Time)
// Returns a string representation of a date. The format of the string depends on the locale.

console.log(myDate.toDateString());    // Thu Dec 14 2023
// Returns a date as a string value.

console.log(myDate.toTimeString());    // 13:06:41 GMT+0530 (India Standard Time)
// Returns a time as a string value.

console.log(myDate.toLocaleString());    // 14/12/2023, 1:06:41 pm
// Converts a date and time to a string by using the current or specified locale.

console.log(myDate.toLocaleDateString());    // 14/12/2023
// Converts a date to a string by using the current or specified locale.

console.log(myDate.toLocaleTimeString());    // 1:06:41 pm
// Converts a time to a string by using the current or specified locale.



// We can specify any date and time:

// To specify own date put parameters in the Date() object as, 
// (year: number, monthIndex: number, date?: number | undefined, hours?: number | undefined, minutes?: number | undefined, seconds?: number | undefined, ms?: number | undefined)

let myCreationDate = new Date(2023, 0, 23)   
console.log(myCreationDate.toDateString());    // Mon Jan 23 2023

myCreationDate = new Date(2023, 1)
console.log(myCreationDate.toLocaleDateString());    // 1/2/2023

myCreationDate = new Date(2023, 1, 23, 5, 3, 24)
console.log(myCreationDate.toLocaleString());    // 23/2/2023, 5:03:24 am

myCreationDate = new Date("2023-01-19")
console.log(myCreationDate.toLocaleString());    // 19/1/2023, 5:30:00 am

myCreationDate = new Date("12-01-2023")
console.log(myCreationDate.toLocaleString());    // 1/12/2023, 12:00:00 am



// To get time stamp you need to use Date.now(), Returns the number of milliseconds elapsed since midnight, January 1, 1970 Universal Coordinated Time (UTC).

let myTimeStamp = Date.now();
console.log(myTimeStamp);    // 1702539401298

// To get time value in milliseconds to your specified date, use getTime():
console.log(myCreationDate.getTime());    // 1701369000000
// `getTime()` Returns the stored time value in milliseconds since midnight, January 1, 1970 UTC.

// Conversion of time from milliseconds to seconds:
console.log(Math.floor(Date.now()/1000));  // 1702539401
// to get time in seconds



// You can get specific value from the Date object as follows:
let newDate = new Date()

console.log(newDate);   // 2023-12-14T07:36:41.298Z
console.log(newDate.getDate());   // 14
console.log(newDate.getMonth() + 1);   // 12
console.log(newDate.getDay());   // 4
console.log(newDate.getFullYear());   // 2023
console.log(newDate.getHours());   // 13

console.log(`Today's date is ${newDate.getDate()} of month ${newDate.getMonth() + 1} and Time is ${newDate.toLocaleTimeString()}`);   // Today's date is 6 of month 12 and Time is 6:57:30 pm



// The bellow method is very simple to use and get date values:
// The "default" sets which internalizations you want, where default is for India.
console.log(newDate.toLocaleString("default", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
}))  
// Wednesday, 6 December, 2023
