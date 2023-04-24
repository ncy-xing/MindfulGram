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
let usernames = ["harryPotterGF_001", "maj3rSick", "lil_$ean8arker", "NormanHacker02", "notLauraT"]
let timeStamps = ["1 hours ago", "3 hour ago", "2 days ago", "1 months ago", "3 months ago",]
let comments = ["my patronus is soo cute ;))",
    "Good day on my mind #sun",
    "#wouldRatherBeCoding",
    "Keeping my prinicples.",
    "Maine sunset."]


for(let i = 0; i < usernames.length; i++){
    var pfp = "pfp-" + (i+ 5);
    var img = "image-" + (i+5);

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