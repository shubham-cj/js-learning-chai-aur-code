console.log(Math.PI);
const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descriptor);   // {value: 3.141592653589793, writable: false, enumerable: false, configurable: false}
// So, PI value cannot be changable.

const chai = {
    name: "ginger chai",
    price: 20,
    isAvailable: true,
    chaiIngridients: function (){
        chaiPatti = "1 tea spone"
        suger = "1 table spone"
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "price"));
Object.defineProperty(chai, "price", {
    writable: false,
    enumerable: false
})
console.log(Object.getOwnPropertyDescriptor(chai, "price"));

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== "function") {
        console.log(`${key}: ${value}`);
    }
}