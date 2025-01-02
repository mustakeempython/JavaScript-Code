// Generate a Random Color

const randoColor = function(){
    const hex = '0123456789ABCDEF';
    let color = '#';
     for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random() * 16)];
     }
     return color;
}
let intervalId;

const startChangeColor = function(){
    if(!intervalId){
        intervalId = setInterval(changeBgColor, 1000);
    }
    function changeBgColor(){
        document.body.style.backgroundColor = randoColor();
    }
    console.log("Start change BgColor")
};

document.querySelector('#start').addEventListener('click', startChangeColor);

const stopChangeColor = function(){
    clearInterval(intervalId);
    intervalId = null;
    console.log("Stop change BgColor");
};

document.querySelector('#stop').addEventListener('click', stopChangeColor);