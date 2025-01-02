const user = {
    username: "Muhd",
    emailId: "muhd@gmail.com",
    loggedIn: true,
    getUserDetails: function(){
        // console.log("Got user detail from database")
        // console.log(`Username: ${this.username}`);
        console.log(this)
    }
}
// console.log(user.username);
// console.log(user.getUserDetails());



function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn
    
    this.greeting = function(){
        console.log(`Welcome: ${this.username}`);
    }
    return this
}

const userOne = new User("Mustakeem", 15, true)
const userTwo = new User("Kassar", 20, false)
console.log(userOne.constructor);
// console.log(userTwo);