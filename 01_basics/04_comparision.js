//Basic comparisons:

console.log(2 > 1);   //true
console.log(2 < 1);   //false
console.log(2 == 1);   //false
console.log(2 >= 1);   //true
console.log(2 <= 1);   //false

//complicated comparisons:

console.log("2" > 1);   //true
console.log("02" > "1");   //false
console.log("02" > 1);   //true


//comparison with null:

console.log(null > 1);   //false
console.log(null < 1);   //true
console.log(null == 1);   //false
console.log(null >= 1);   //false
console.log(null <= 1);   //true
//JavaScript interpreter automatically converted null to 0 (zero).

console.log(null > 0);   //false
console.log(null < 0);   //false
console.log(null == 0);   //false >>> converted null to NaN.
console.log(null >= 0);   //true
console.log(null <= 0);   //true
//and in remaining examples it converts null to 0 (zero).
//Here camparing with null value is not be predictable, sometimes it converts in 0(zero) or sometimes in NaN. So always do not deal with null values while comparing.

//comparison with undefined:

console.log(undefined > 0);   //false
console.log(undefined < 0);   //false
console.log(undefined == 0);   //false
console.log(undefined <= 0);   //false
console.log(undefined >= 0);   //false
//comparing with undefined always gives false.

/*
So Final and most important tip of comparison is
Do not use complicated comparison and null too.
Always use basic comparison.
Easy and reliable code is priority.
*/