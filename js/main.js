/**
 * Like button toggle
 */
function clickLikeButton(btn) {
    if (btn.getAttribute("class") !== "btn-liked fa fa-heart") {
        btn.setAttribute("class", "btn-liked fa fa-heart");
    } else {
        btn.setAttribute("class", "btn fa fa-heart");
    }
}

/**
 * Load a single post into HTML
 */
function loadPost(postData) {
    // post container
    var post = document.createElement("div");
    post.setAttribute("id", postData.id);
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

    // Image
    var img = document.createElement("img");
    img.setAttribute("src", "assets/" + postData.image + ".jpg");
    img.setAttribute("class", "blog-image");

    // Like button
    var btn = document.createElement("btn");
    btn.setAttribute("onclick", "clickLikeButton(this)");
    btn.setAttribute("class", "btn fa fa-heart");

    // Caption
    var caption = document.createElement("p");
    caption.setAttribute("class", "blog-post-text");
    caption.appendChild(document.createTextNode(postData.comment));

    // Write HTML
    var postItems = [pfp, username, timeStamp, img, btn, caption];
    postItems.forEach(element => {
        meta.appendChild(element);
    });
    post.appendChild(meta);
    document.getElementById("post-body").appendChild(post);

}

/**
 * Static post data
 */
let pageCounter = 0; // minimum id of currently displayed post

let usernames = ["Friendly_Flower", "lily205", "l.ipsum", "dolorduvec", "FreshRose", "harryPotterGF_001", "maj3rSick", "lil_$ean8arker", "NormanHacker02", "notLauraT"]
let timeStamps = ["3 hours ago", "1 day ago", "2 days ago", "1 week ago", "3 months ago", "1 hours ago", "3 hour ago", "2 days ago", "1 months ago", "3 months ago"]
let comments = ["These are nice ducks.",
    "Hi! hope everyone is doing well.",
    "Look at these nice flowers!",
    "HCI is the coolest class.",
    "Happy spring, everyone!",
    "my patronus is soo cute ;))",
    "Good day on my mind #sun",
    "#wouldRatherBeCoding",
    "Keeping my prinicples.",
    "Maine sunset."]



function loadPostList() {
    for (var i = 0; i < 5; i++) {
        var counter = pageCounter + i;
        var pfp = "pfp-" + counter;
        var img = "image-" + counter;

        var postData = {
            id: "post-" + counter,
            username: usernames[counter],
            pfImage: pfp,
            timeStamp: timeStamps[counter],
            image: img,
            comment: comments[counter],
        }

        loadPost(postData);
    }


}

/*
 * Removes the next 5 posts starting from the given index. 
 * @param {} startIndex 
 */
function clearPosts(startIndex){
    for(i = startIndex; i < startIndex + 5; i++){
        var oldPost = document.getElementById("post-" + i);
        oldPost.remove();
    }
}

/*
 * Reloads the posts starting at the given index. 
 * @param {*} int 
 */
function getPageCounter(startIndex) {    
    clearPosts(pageCounter);

    pageCounter = startIndex;

    loadPostList();
    window.location.replace("#");

}

loadPostList();