//> reduce():
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
}, initialValue);

// console.log(sumWithInitial);     // 10
// This is basic reduce() method



const myNums = [1, 2, 3]

const totalValue = myNums.reduce((acc, curr) => {
    // console.log(`acc: ${acc}, curr: ${curr}`);
    return acc + curr
}, 0)
// console.log(totalValue);



// Example:

const cources = [
    {
        courceName: "javascript", 
        courcePrice: 999
    },
    {
        courceName: "Python", 
        courcePrice: 1299
    },
    {
        courceName: "ML", 
        courcePrice: 1599
    },
    {
        courceName: "AI", 
        courcePrice: 2099
    }
]

const TotalAmount = cources.reduce((accumulator, currentValue) => (accumulator + currentValue.courcePrice), 0)
console.log(`Total Amount of all Cources: rs. ${TotalAmount} /-`);