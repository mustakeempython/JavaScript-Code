
// class User{
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password
//     }
//     encriptPassword(){
//         return `${this.password}@321`
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const value = new User("Muhd", "muhd@gmail.com", "kassar")
// console.log(value.encriptPassword());
// console.log(value.changeUsername());

// -----+++++----- Behind the scene -----+++++-----


function User(username, email, password){
     this.username = username;
     this.email = email;
     this.password = password
}
 User.prototype.encriptPassword = function(){
     return `${this.password}@321`
 }
 User.prototype.changeUsername = function(){
     return `${this.username.toUpperCase()}`
 }

const value = new User("Muhd", "muhd@gmail.com", "kassar")
console.log(value.encriptPassword());
console.log(value.changeUsername());

