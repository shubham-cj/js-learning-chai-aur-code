const value = new Number(100);
console.log(value.toString);
console.log(value.valueOf());
console.log(value.toFixed(2));

const score = 128.748
console.log(score.toPrecision(4));

const hundreds = 10000000
console.log(hundreds.toLocaleString())

//------------------------Math-------------------------

console.log(Math);
console.log(Math.abs(-1123));
console.log(Math.round(29.9));
console.log(Math.ceil(41.34));
console.log(Math.floor(41.34));
console.log(Math.min(2,0.6,3,6));
console.log(Math.max(2,0.6,3,6));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor((Math.random()*10) + 1));

const min = 20
const max = 60

console.log(Math.floor(Math.random()*(max - min + 1) + min));

console.log(123 * Math.SQRT1_2);