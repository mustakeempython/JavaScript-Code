 class User {
    constructor(email, password){
        this.email = email,
        this.password = password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }
    get password(){
        return `${this._password}#!%`
    }
    set password(value){
        this._password = value
    }
 }

 const val1 = new User("muhd@gmail.com", "Kassar@321")
//  console.log(val1.email);
console.log(val1.password)