const sayDate = function(str){
    console.log(str, Date.now());
}
let intervalId;

document.querySelector('#start').addEventListener('click', function(){
    intervalId = setInterval(sayDate, 2000, "Start");
    // console.log(start);
})

document.querySelector('#stop').addEventListener('click', function(){
    clearInterval(intervalId);
    console.log("Stopped");
})
