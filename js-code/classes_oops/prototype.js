// let myName = "Muhd   "
// let myLname = "m=Mustakeem  "

// console.log(myName.trueLength)

let myHeros = ["salman", "john"]

let heroPower = {
    salman: "love",
    john: "body",

    johnPower: function(){
        console.log(`Johns power is ${this.john}`);
    }
}

Object.prototype.muhd = function(){
    console.log(`muhd is present in all object`);
}

Array.prototype.heyMuhd = function(){
    console.log(`Muhd Say Hello`);
}

// heroPower.muhd()
// myHeros.muhd()
// heroPower.heyMuhd()
// myHeros.heyMuhd()

// ------+++++----- Inheritance -----+++++--------

const User = {
    name: "Muhd",
    email: "muhd@gmail.com"
}
const Teacher = {
    makeVideo: true
}
const TeachingSupport = {
    isAvailable: false
}
const TASupport = {
    makeAssighnment: "Python Assighnment",
    fullTime: true,
    __proto__: TeachingSupport
}
Teacher.__proto__ = User

// --++-- Modern Syntax --++--

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "Kassar   "

String.prototype.trueLength = function() {
    console.log(`${this}`);
    console.log(`True length is ${this.trim().length}`);
}

anotherUsername.trueLength()
"muhd".trueLength()
"mustakeem".trueLength()