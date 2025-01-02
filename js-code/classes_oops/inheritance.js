
class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username is: ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }
    addMe(){
        console.log(`A new course added by ${this.username}`)
    }
}

const value = new Teacher("Muhd", "muhd@gmail.com", "muhd@123")
value.addMe()
const value1 = new User("Kassar")
value1.logMe()