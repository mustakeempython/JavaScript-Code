const user = {
    username: "Muhd",
    price: 2000,
    welMassage: function() {
        console.log(`${this.username}, welcome to website`)
        console.log(this)
    }

}
// user.welMassage()
// user.username = "Kassar"
// user.welMassage()

// console.log(this)

// function bird(){
//     let username = "Muhd"
//     console.log(this.username)
// }
// bird()

// const chai = function(){
//     let username = "Muhd"
//     console.log(this.username)
// }
// chai()

//------------+++++++++++++-------->>>ARROW FUNCTION<<<<---------++++++++++++----------

const chai = () => {
    let username = "Muhd"
    console.log(this.username)
}
// chai()

const chai2 = () => {
    let username = "Muhd"
    console.log(this)
}
// chai2()

const addOne = (num1, num2) => {
    return num1 + num2
}
// console.log(addOne(4, 6))

const addTwo = (num3, num4) => num3 + num4
// console.log(addTwo(4, 6))

const addThree = (num5, num6) => (num5 + num6)
// console.log(addThree(7, 6))

const addFour = (num7, num8) => ({username: "Mustakeem"})
console.log(addFour(6, 9))