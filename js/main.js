const btn = document.querySelector('.btn');
let isRed = false; //like button starts (unliked) gray

function clickButton(){
    btn.classList.toggle('liked');
      
}
btn.addEventListener('click', clickButton)

// function likeButton(){
//     if(!isRed){
//         btn.style.color = "red";
//         isRed = true;
//     }
//     else{ 
//         btn.style.color = "lightgray";
//         isRed = false;
//     }
// }

// function clickButton(){
//     var element = document.getElementById(btn);

//     if (count == 0) {
//         element.style.color = "red"
//         clickCounter = 1;        
//     }
//     else {
//         element.style.color = "lightgray"
//         clickCounter = 0;
//     }
   
// }

// function likeButton(){
//     btn.classList.toggle("liked")
// }

