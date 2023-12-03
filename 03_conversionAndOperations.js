//Conversion to "string"

let value = 12345  //useing number type
let valueToString = String(value) 
console.log(valueToString)  //12345
console.log(typeof valueToString)  //string

value = true  //useing boolean type
valueToString = String(value) 
console.log(valueToString)   //true
console.log(typeof valueToString)   //string

value = null  //useing null type
valueToString = String(value) 
console.log(valueToString)   //null
console.log(typeof valueToString)   //string

value = undefined  //useing undefined type
valueToString = String(value) 
console.log(valueToString)   //undefined
console.log(typeof valueToString)   //string

value = {a: true}  //useing undefined type
valueToString = String(value) 
console.log(valueToString)   //[object Object]
console.log(typeof valueToString)   //string

//Conversion to number

let value1 = "1"   //using number string type
let value1ToNumber = Number(value1)
console.log(value1ToNumber)   //1
console.log(typeof value1ToNumber)   //number

value1 = "1abc"   //using number and string type
value1ToNumber = Number(value1)
console.log(value1ToNumber)   //NaN
console.log(typeof value1ToNumber)   //number

value1 = "abc"   //using string type
value1ToNumber = Number(value1)
console.log(value1ToNumber)   //NaN
console.log(typeof value1ToNumber)   //number

value1 = true   //using boolean type
value1ToNumber = Number(value1)
console.log(value1ToNumber)   //1
console.log(typeof value1ToNumber)   //number

value1 = false   //using boolean type
value1ToNumber = Number(value1)
console.log(value1ToNumber)   //0
console.log(typeof value1ToNumber)   //number

value1 = undefined   //using undefined type
value1ToNumber = Number(value1)
console.log(value1ToNumber)   //NaN
console.log(typeof value1ToNumber)   //number

value1 = null   //using null type
value1ToNumber = Number(value1)
console.log(value1ToNumber)   //0
console.log(typeof value1ToNumber)   //number

value1 = ""   //using empty string type
value1ToNumber = Number(value1)
console.log(value1ToNumber)   //0
console.log(typeof value1ToNumber)   //number

//Conversion to Boolean

let value2 = "true"  //using true string type
let value2ToBoolean = Boolean(value2)
console.log(value2ToBoolean)   //true
console.log(typeof value2ToBoolean)   //boolean

value2 = "false"  //using false string type
value2ToBoolean = Boolean(value2)
console.log(value2ToBoolean)   //true
console.log(typeof value2ToBoolean)   //boolean

value2 = "abc"  //using any string type
value2ToBoolean = Boolean(value2)
console.log(value2ToBoolean)   //true
console.log(typeof value2ToBoolean)   //boolean

value2 = ""  //using empty string type
value2ToBoolean = Boolean(value2)
console.log(value2ToBoolean)   //false
console.log(typeof value2ToBoolean)   //boolean

value2 = 1  //using 1 number type
value2ToBoolean = Boolean(value2)
console.log(value2ToBoolean)   //true
console.log(typeof value2ToBoolean)   //boolean

value2 = 0  //using 0 number type
value2ToBoolean = Boolean(value2)
console.log(value2ToBoolean)   //false
console.log(typeof value2ToBoolean)   //boolean

value2 = 24  //using any number type
value2ToBoolean = Boolean(value2)
console.log(value2ToBoolean)   //true
console.log(typeof value2ToBoolean)   //boolean

value2 = null  //using null type
value2ToBoolean = Boolean(value2)
console.log(value2ToBoolean)   //false
console.log(typeof value2ToBoolean)   //boolean

value2 = undefined  //using undefined type
value2ToBoolean = Boolean(value2)
console.log(value2ToBoolean)   //false
console.log(typeof value2ToBoolean)   //boolean

//Conversion to undefined

// let value3 = "undefined"  //using undefined string type
// let value3ToUndefined = undefined(value3)
// console.log(value3ToUndefined)   //TypeError: undefined is not a function

// You can not do conversions to undefined, because undefined is not a function

// Conversion to null

// let value4 = "null"  //using null string type
// let value4ToNull = null(value4)
// console.log(value4ToNull)   //TypeError: null is not a function

// You can not do conversions to null, because null is not a function