//--------+++++++-------- Primitive -------++++++++--------

// Primitive
// 7 Types : String, Number, Boolean, Null, Undefined, Symbol, BigInt 

const score = 220
const value1 = 230.4
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

const bigNumber = 645978509864765482738n

//--------+++++++-------- Non Primitive -------++++++++--------
// Non Primitive
// 3 Types : Array, Object, Function

const heros = ["Salman", "Tiger", "John"];
let myObj = {
    name: "mustakeem",
    age: 26,
}

const myFunction = function(){
    console.log("My World");
} 
myFunction()

console.log(typeof outsideTemp)


// ------+++++------ Stack (Primitive)---++++--- Heap (Non Primitive) -----+++++------

//  Stack (Primitive) Memory
let myName = "muhdmustakeem"

let anotherName = myName
anotherName = "kassar"

console.log(myName)
console.log(anotherName)


//  Heap (Non Primitive) Memory
let firstUser = {
    name: "muhd",
    RollNum: 786,
    email: "muhd@gmail.com"
}

let secondUser = firstUser
secondUser.RollNum = 787

console.log(firstUser.RollNum);
console.log(secondUser.RollNum);
