const sayMe = function(){
    console.log('Muhd');
}

const changeText = function(){
    document.querySelector('h1').innerHTML = "MUHD is best name in the world"
}

const stop = setTimeout(changeText, 5000)

document.querySelector('#stop').addEventListener('click', function(){
    clearTimeout(stop);
    console.log("Stopped")
})