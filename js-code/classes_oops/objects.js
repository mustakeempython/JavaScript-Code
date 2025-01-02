function multBy5(num){
    this.num = num
    return num*5
}
multBy5.power = 2

// console.log(multBy5(5));
// console.log(multBy5.power);
// console.log(multBy5.prototype);

function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment =  function(){
    score++
}

createUser.prototype.printMe = function(){
    console.log(`Price of coffee is: ${this.score}`)
}

const coffee = new createUser("coffee", 55)
const tea = createUser("tea", 25)

coffee.printMe()