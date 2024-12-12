let myDate = new Date()

console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())
// console.log(typeof myDate)

// let newDate  = new Date(2024, 11, 15)
// console.log(newDate.toDateString()
// let newDate  = new Date(2024, 11, 9, 17, 40)

// let newDate  = new Date("2024-11-30")
let newDate  = new Date("04-15-2024")
// console.log(newDate.toLocaleString())

let myTs  = Date.now()
// console.log(myTs)
// console.log(newDate.getTime())
// console.log(Math.floor(Date.now()/1000))

let nDate = new Date()
// console.log(nDate)
console.log(nDate.getMonth())
console.log(nDate.getDay())

console.log(nDate.toLocaleString('default', {
    weekday: "short"
}))