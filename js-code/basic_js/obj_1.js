// Object

const mysym = Symbol("Winter")

const myObj = {
    name: "Muhd",
    [mysym]: "System",
    "full name": "Muhd Mustakeem",
    age: 26,
    email: "muhd@gmail.com"

}
// console.log(myObj.email)
// console.log(myObj["email"])
// console.log(myObj["full name"])
// console.log(myObj[mysym])

myObj.email = "kassar@gamil.com"
// Object.freeze(myObj)
myObj.email = "raju@gamil.com"
// console.log(myObj)

myObj.greeting = function(){
     console.log("Hello Greetings")
}

myObj.greetingTwo = function(){
    console.log(`Hello my second greetings, ${this.age}`)
}

console.log(myObj.greeting())
console.log(myObj.greetingTwo())
