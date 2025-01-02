class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username is: ${this.username}`);
    }
    static createId(){
        return `1234`
    }
}
const val = new User("Muhd")
// console.log(val.createId())
// console.log(val.logMe())

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
} 

const value = new Teacher("Kassar", "muhd@gmail.com")
// console.log(value.createId())
value.logMe();