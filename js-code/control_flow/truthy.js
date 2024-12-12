
const userEmail = "muhd@gamil.com"

if(userEmail){
    console.log("User has Email")

}else{
    console.log("User Hsn't Email")
}

//----++++---- Falsy Value ----++++-----

// false, 0, -0, bigint 0n, "", null, undefined, NaN

//----++++---- Truthy Value ----++++----

// 'false', "0", " ", [], {}, function(){}

const userEmailIs = []

if(userEmailIs.length === 0){
    console.log("User has Empty Array")

}

const myObj = {}

if(Object.keys(myObj).length === 0){
    console.log("My Object is Empty")
}

// --++-- Nullish Coalescing Operator (??): Null Undefind

let num;
let num2

// num = 20 ?? 30
// num = null ?? 40

num = undefined ?? 60
num2 = null ?? 20 ?? 50

console.log(num)
console.log(num2)

// ----++++---- Ternary Operator ----++++----
//  condition ? true : false

const   icePrice = 250
icePrice <= 300 ? console.log("More Than 250") : console.log("Less Than 250")
