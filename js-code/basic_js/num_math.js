const scor = 120
console.log(scor)

const num = new Number(125)
console.log(num)

console.log(num.toString())
console.log(num.toFixed(2))

const onum = 656.7643
console.log(onum.toPrecision(5))

const mnum = 2000000000
console.log(mnum.toLocaleString('en-IN'))

console.log(Math.abs(-7))
console.log(Math.round(5.6))
console.log(Math.ceil(5.7))
console.log(Math.floor(7,9))
console.log(Math.max(3, 8, 9, 7))
console.log(Math.min(7, 8, 4 ,2))

console.log(Math.random())
console.log((Math.random()*10) +1)
console.log(Math.floor(Math.random()*10) +1)

const min = 15
const max = 25

console.log(Math.floor(Math.random() * (max - min + 1)) +min)