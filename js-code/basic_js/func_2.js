// function myFunc(num1, num2){
//     console.log(num1 + num2)
// }
// myFunc(3, 5)

function myFunc(num1, num2){
    // let result = num1 + num2
    // return result
    return num1 + num2
}

const result = myFunc(5, 8)
// console.log("Result:", result)

function loginUser(username = "kassar"){
    if(!username){
        console.log("Please enter username")
    }
    return `${username} just logged in`
}
 
// console.log(loginUser("Muhd"))
// console.log(loginUser("muhd"))

function sys(...num4){
    return num4
}
// console.log(sys(200, 300, 400, 500, 100000))

const user = {
    userName: "Muhd",
    price: 250
}

function handleObj(anyObj){
    // console.log(`Username is ${anyObj.userName} and price is ${anyObj.price}`)
}
// handleObj(user)
handleObj({
    userName: "Kassar",
    price: 350
})

const myArray = [100, 300, 600, 900, 200]

function newFunc(getArray){
    return getArray[3]
}
// console.log(newFunc(myArray))
console.log(newFunc([231, 400, 500, 800, 700]))