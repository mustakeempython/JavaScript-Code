const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(descriptor);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const val1 = {
    name: "muhd",
    email: "muhd@gmail.com",
    isAvailable: true,

    newFunc: function(){
        console.log("Not Alowed")
    }
}
console.log(Object.getOwnPropertyDescriptor(val1, "name"));

Object.defineProperty(val1, 'name', {
    // writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(val1, "name"));

for(let [key, value] of Object.entries(val1)){
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`);
    }
}