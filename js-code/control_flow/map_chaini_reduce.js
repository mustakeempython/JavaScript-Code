const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 4]

// const val1 = myNum.map( (num) => num + 5 )
// console.log(val1)

// const val2 = myNum.map( (num) => {return num + 5} )
// console.log(val2)

// const newNum = myNum
//                 .map( (num) => num * 10 )
//                 .map( (num) => num + 9 )
//                 .filter( (num) => num >=49 )

// console.log(newNum)

// const totalNum = myNum.reduce(function( acc, curval){
//     console.log(`acc : ${acc} and curval : ${curval}`);
//     return acc + curval
// },0 )
// console.log(totalNum)

// const totalNum = myNum.reduce( (acc, curval) => acc + curval, 0 )
// console.log(totalNum);


const shopCard = [
    {
        itemName: 'paint shirt',
        price: 1540
    },
    {
        itemName: 'mobile phone',
        price: 25000
    },
    {
        itemName: 'super bike',
        price: 570000
    },
    {
        itemName: 'tractor traly',
        price: 1255000
    }
]

const totalShop = shopCard.reduce( (acc, item) => acc + item.price, 0)
// console.log(`acc: ${acc} and item value: ${item}`)
console.log(totalShop)