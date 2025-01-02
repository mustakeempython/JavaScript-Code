function SetUsername(username){
    this.username = username
}

function createUser(username, email, password){
    SetUsername.call(this, username)
    this.email = email,
    this.password = password
}

const val = new createUser("muhd", "muhd@gmail.com", "2222")
console.log(val)