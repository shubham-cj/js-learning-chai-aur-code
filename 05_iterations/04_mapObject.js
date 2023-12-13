//> Maps
/*
The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.

Map objects are collections of key-value pairs. A key in the Map may only occur once; it is unique in the Map's collection.

Objects vs. Maps >>

1. > A Map does not contain any keys by default. It only contains what is explicitly put into it.
   > An Object has a prototype, so it contains default keys that could collide with your own keys if you're not careful.
   
2. > A Map's keys can be any value (including functions, objects, or any primitive).
   > The keys of an Object must be either a String or a Symbol.

3. > The number of items in a Map is easily retrieved from its size property.	
   > Determining the number of items in an Object is more roundabout and less efficient. A common way to do it is through the length of the array returned from Object.keys().

4. > A Map is an iterable, so it can be directly iterated.	
   > Object does not implement an iteration protocol, and so objects are not directly iterable using the JavaScript for...of statement (by default).

*/

const map = new Map();

map.set(1, "one");
map.set(2, "two");
map.set(3, "three");
map.set(1, "one");

// console.log(map);   // Map(3) { 1 => 'one', 2 => 'two', 3 => 'three' }

// Applying loop on map
for (const key of map) {
    // console.log(key);    
}
// All key values are logged in console as array
// [ 1, 'one' ]
// [ 2, 'two' ]
// [ 3, 'three' ]

// To get key and value from map separately, using array destructuring
for (const [key, value] of map) {
    // console.log(`${key} => ${value}`);    
}
// Here's how we can access key and value separately.


// But you can not use this technique of iteration over objects, it will give errors:
const myObject = {
    key1: "value1",
    key2: "value2",
    key3: "value3"
}
// for (const [key, value] of myObject) {
//     console.log(`${key} => ${value}`);    
// }
// TypeError: myObject is not iterable


