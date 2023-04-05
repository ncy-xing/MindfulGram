
const btn = document.querySelector('.btn');
let isRed = false; //like button starts (unliked) gray

btn.addEventListener('click', clickButton())

function clickButton(){
    if(!isRed){
        btn.classList.toggle('liked');
        isRed = true;
        
    } else {
        btn.classList.toggle('liked');
        isRed = false;
    }
}

