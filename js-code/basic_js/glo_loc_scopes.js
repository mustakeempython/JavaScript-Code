// var c = 270
let b = 245

if (true){
    
    const a = 380
    let b = 460
    var c = 190
    // console.log("Inner: ", b)

}

// console.log(a)
// console.log(b)
// console.log(c)

function one(){
    const username = "Muhd"

    function two(){
        const website = "apeed.com"
        console.log(username)
    }
    two()
}
// one()

if (true){
    const username = "Kassar"
    if (username === "Kassar"){
        const website = " dwrko.com"
        // console.log(username + website)
    }
    // console.log(website)
}
// console.log(username)

console.log(one(5))
function one(num1){
    return num1 + 1

}
// console.log(one(5))


const  two = function(num2){

    console.log(num2)
    return num2
}
two(7)