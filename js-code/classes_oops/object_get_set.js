const User = {
    _email: "muhd@gmail.com",
    _password: "kassar@123",

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    },
    get password(){
        return this._password.toUpperCase()
    },
    set password(value){
        this._password = value
    }
}
const val1 = Object.create(User)
// console.log(val1.email)
console.log(val1.password)