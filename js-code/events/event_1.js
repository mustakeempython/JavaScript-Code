// document.getElementById('beach').onclick = function(){
//     alert("beach clicked")
// }

     // attachEvent()
    // jQuery - on

    // type, timestamp, defaultPrevented
    // target, toElement, srcElement, currentTarget,
    // clientX, clientY, screenX, screenY
    // altkey, ctrlkey, shiftkey, keyCode


// document.getElementById('beach').addEventListener('click', function(e){
//     alert("beach clicked again")
//     console.log(e)
// })

// document.getElementById('images').addEventListener('click', function(e){
//     console.log("Click inside the ul");
// }, false)

// document.getElementById('beach').addEventListener('click', function(e){
//     console.log("beach Clicked");
//     e.stopPropagation()
// }, false)

// document.getElementById('google').addEventListener('click', function(e){
//     e.preventDefault();
//     e.stopPropagation();
//     console.log("google clicked")
// })

document.querySelector('#images').addEventListener('click', function(e){
    console.log(e.target.tagName);
    if(e.target.tagName === 'IMG'){
        console.log(e.target.id);
        let removeIt = e.target.parentNode
        removeIt.remove()
    }
    // removeIt.parentNode.removeChild(removeIt)
})