// Array_2

const bolly_heros = ['Akshay', 'Ajay', 'Salman']

const south_heros = ['Allu', 'Mahesh', 'Parbhas']

// bolly_heros.push(south_heros)
// console.log(bolly_heros)

const all_heros = bolly_heros.concat(south_heros)
console.log(all_heros)

const allHeros = [...bolly_heros, ...south_heros]
console.log(allHeros)

const newArr = [2, 4, 5, 6, [4, 0, 9], 6, [5, 1, 0],5]
const another_Arr = newArr.flat(Infinity)
console.log(another_Arr)

console.log(Array.isArray("Muhd"))
console.log(Array.from("Muhd"))
console.log(Array.from({name: "Muhd"})) // Give an Empty Array

let num1 = 120
let num2 = 130
let num3 = 140

console.log(Array.of(num1, num2, num3))
