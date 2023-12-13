const coding = ["js", "css", "java", "ruby", "python", "cpp"]

// coding.forEach( (item) => {
//     // console.log(item);
// })
// // You can use this function to iterate over array but if you want to store array values in any variable, this can not be done by forEach function

// const values = coding.forEach( (item) => {
//     return item
// })
// console.log(values);   // undefined

// SO, to overcome with this problem we have other methods:

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

let newNums = myNums.filter( (num) => (num > 4))
// console.log(newNums);    // [ 5, 6, 7, 8, 9, 10 ]
// Here notice one thing we used implicit return technique to arrow function, because we want to return values implicitly.

// Still we can use explicit return technique,
newNums = myNums.filter( (num) => {
    if (num > 4){
        return num
    }
})
// console.log(newNums);    // [ 5, 6, 7, 8, 9, 10 ]
// By this method you will get same exact result, but just you have build more logic more than implicit return technique to do things.


// Real database like example:

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
] 

let userBooks = books.filter( (book) => (book.genre === "History"))
userBooks = books.filter( (book) => (book.genre === "History" && book.edition > 1999))
userBooks = books.filter( (book) => (book.publish >= 1999 && book.genre === "Science"))


console.log(userBooks);