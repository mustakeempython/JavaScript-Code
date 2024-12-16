const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 18, 10, 11, 12, 15]

// const newNum = myNum.filter( (num) => {
//     return num > 8 
// } )
// console.log(newNum)

const newNum = myNum.filter( (num) => num >9)
console.log(newNum)

const num1 = []
myNum.forEach( (num) => {
    if(num > 9){
        num1.push(num)
    }
} )
console.log(num1)