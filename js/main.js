/**
 * Post's Attributes 
 */

const postData = {
    id: 1,
    username: "Friendly_Flower",
    pfImage: "pfp",
    timeStamp: "1 day ago",
    image: "image",
    //likeButtonState: false,
    comment: "These are nice ducks.",

}


function loadPost(postData){
    // post container
    var post = document.createElement("div"); 
    post.setAttribute("class", "blog-post");
    var meta = document.createElement("div");
    meta.setAttribute("class", "blog-post-meta"); 

    // Metadata
    var pfp = document.createElement("img");
    pfp.setAttribute("class", "profile-image");
    pfp.setAttribute("src", "assets/" + postData.pfImage + ".jpg");

    var username = document.createElement("span");
    username.setAttribute("class", "blog-post-username");
    username.appendChild(document.createTextNode(postData.username));

    var timeStamp = document.createElement("span");
    timeStamp.setAttribute("class", "blog-post-timestamp");
    timeStamp.appendChild(document.createTextNode(" · ".concat(postData.timeStamp)));

    // image and caption
    var img = document.createElement("img"); 
    img.setAttribute("src", "assets/" + postData.image + ".jpg");
    img.setAttribute("class", "blog-image");
    var caption = document.createElement("p");
    caption.setAttribute("class", "blog-post-text");
    caption.appendChild(document.createTextNode(postData.comment));

    // Write HTML
    var postItems = [pfp, username, timeStamp, img, caption];
    postItems.forEach(element => {
        meta.appendChild(element);
    });
    post.appendChild(meta);
    document.getElementById("post-body").appendChild(post);

}

loadPost(postData);