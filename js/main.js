/**
 * Load a single post into HTML
 */
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

/**
 * Static post data
 */
let usernames = ["Friendly_Flower", "lily205", "l.ipsum", "dolorduvec", "FreshRose"]
let timeStamps = ["3 hours ago", "1 day ago", "2 days ago", "1 week ago", "3 months ago"]
let comments = ["These are nice ducks.",
    "Hi! hope everyone is doing well.",
    "Look at these nice flowers!",
    "HCI is the coolest class.",
    "Happy spring, everyone!"]


// const testData = {
//     id: 1,
//     username: "Friendly_Flower",
//     pfImage: "pfp-1",
//     timeStamp: "1 day ago",
//     image: "image-1",
//     //likeButtonState: false,
//     comment: "These are nice ducks.",
// }

// loadPost(testData);

for(let i = 0; i < usernames.length; i++){
    var pfp = "pfp-" + i;
    var img = "image-" + i;

    console.log(pfp);
    console.log(img);

    var postData = {
        id: i,
        username: usernames[i],
        pfImage: pfp,
        timeStamp: timeStamps[i],
        image: img,
        comment: comments[i],
    }

    loadPost(postData);
}