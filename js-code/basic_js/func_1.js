// let result = myf(65);
// function myf(f){
//     return (34/67)*(f+31);
// }

// let text = "The function is" + myf(77) +"ok";
// console.log(text);

// console.log("Outside function: " + typeof(text));

// function myFunction(){
//     let text = "Volvo";
//     console.log("Inside function " + typeof(text));
// }
// myFunction();


let text = "Volvo";
console.log("Outside function: " + typeof(text) + " type ", text);

function myFunction(){
    console.log("Inside function: " + typeof(text) + " type ", text);
}
myFunction();

console.log(text);

