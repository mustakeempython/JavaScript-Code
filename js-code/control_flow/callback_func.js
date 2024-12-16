const company = ["Airtel", "BSNL", "Jio", "Relince", "Vi"]
// company.forEach( (item) => {
//     console.log(item)
// } )

function printMe(item){
    // console.log(item)
}
// company.forEach(printMe)

company.forEach( (item, index, arr) => {
    // console.log(item, index, arr);
} )

const myArr = [
    {
        companyName : "Swiggy",
        firstOder : "125"
    },
    {
        companyName : "KFC",
        firstOder : "99"
    },
    {
        companyName : "Zomato",
        firstOder : "145"
    }
]

myArr.forEach( (item) => {
    console.log(item.companyName);
} )