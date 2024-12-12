// Controll Flow

const isLoggedIn = true
const temperature = 50

if(temperature <= 45){
    console.log("Yes, Temperature is Greater Than 50")

} else{
    console.log("Oh No, Temperature is Less Than 50")

}

const score = 250

if(score > 200){
    const power = "Fly"
    console.log(`User poweer: ${power}`)
}
// console.log(`I'm not: ${power}`)

const balance = 2500

// ---++++----NOT WRITE CODE LIKE THIS----++++-----
// if(balance > 2000) console.log("test"), console.log("Not");

if(balance > 1000){
    console.log("Balance is lees than 2500")

} else if(balance > 1500){
    console.log("Balance is lees than 2500")

} else if(balance > 25000){
    console.log("Balance is lees than 2500")

} else {
    console.log("No balance is not lees than 2500")
}

const userLoggedIn = true
const userDebitCard = true

if(userLoggedIn && userDebitCard && 4===6){
    console.log("Purchase Course")

} else{
    console.log("You can't Buy")
}

const userLoggedInGoogle = false
const userLoggedInGmail = true

if(userLoggedInGmail || userLoggedInGoogle || 3==5){
    console.log("User Logged in")

}