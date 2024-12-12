// Array_1

const myArr = [2, 3, 4, 5, 6]
// console.log(typeof myArr)
// myArr.push(0)
// myArr.pop()
// myArr.unshift(0)
// // myArr.shift()
// console.log(myArr.includes(5))
// console.log(myArr.indexOf(8))

// const newArr = myArr.join()
// console.log(typeof newArr)

console.log("A", myArr)
const newArr1 = myArr.slice(1, 3)

console.log(newArr1)
console.log("B", myArr)

const newArr2 = myArr.splice(1, 3)
console.log("C", myArr)
console.log(newArr2)

