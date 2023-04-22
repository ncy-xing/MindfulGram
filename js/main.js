
// const btn = document.querySelector('.btn');
// let isRed = false; //like button starts (unliked) gray

// btn.addEventListener('click', clickButton())

// function clickButton(){
//     if(!isRed){
//         btn.classList.toggle('liked');
//         isRed = true;
        
//     } else {
//         btn.classList.toggle('liked');
//         isRed = false;
//     }
// }

// var img = new Image();
// var div = document.getElementById('test');
// img.src = 'assets/image.jpg';

// img.onload = function() {
//   div.appendChild(img);
// };

let data = ["image", "image-2"];
data.forEach(loadPost);

function loadPost(value){
    console.log(value);
    var div = document.createElement("img"); 
    div.setAttribute("src", "assets/" + value + ".jpg");
    div.setAttribute("class", "blog-image");
    document.body.appendChild(div);
}

/**
 * Post's Attributes 
 */

const instaPost = {
    id: 1,
    pfName: "",
    pfImage: "",
    postTimeStamp: 0,
    postImage: "",
    //likeButtonState: false,
    postComment: "",

}