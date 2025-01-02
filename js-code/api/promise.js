const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async Task One");
        resolve()
    }, 3000)
})
promiseOne.then(function(){
    console.log("Async Resolve");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async Task Two");
        resolve()
    }, 2000)
}).then(function(){
    console.log("Async Resolve Two");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({name: "muhd", email: "muhd@gmail.com"})
    }, 2000)
})
promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "Muhd", password: "1234"})
        } else{
            reject("ERROR: Something went rong")
        }
    }, 2000)
})
promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))

const promiseFive = new Promise(function(promise, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "Mustakeem", password: "1234"})
        } else{
            reject("ERROR: JS went rong")
        }
    }, 2000)
})
async function consumePromiseFive() {
    try{
        const response = await promiseFive
        console.log(response)
    } catch(error){
        console.log(error)
    }
}
consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E:", error);
//     }
    
// }
// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data)
})
.catch((error) => console.log(error))
