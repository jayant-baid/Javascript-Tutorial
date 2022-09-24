/*
Synchronous is when something's going on but we don't want to wait until that thing is done to continue your program we want to continue while it's happening

Asynchronous is where something happens & we wait until it's completely finished until we move on to the next. 
It is very relevant to JS because we're often making requests to servers elsewhere it can take a couple seconds to get your data back for instance & we might not want your program to stall & wait for that data to come back we want to keep going & keep doing something. So this is where CALLBACKS come in & CALLBACKS were used for a long time until es6 was released, where promises introduced
PROMISES give you a more elegant way to handle Asynchronous Data.
LATER
AWAIT introduced which is till dealing with promises just in a different way we're dealing with the response in a way that's a little more elegant and it looks more like synchronous programming rather than using dot
*/

const posts = [
    { title: "Post One", body: "This is post one" },
    { title: "Post Two", body: "This is post two" }
];

function getPosts() {
    // setTimeout: it takes in a callback function
    setTimeout(() => {
        let output = "";

        posts.forEach((post) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPosts(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}

// getPosts();
//: abh isse callback banana h taki callback func call hote hi directly getposts pr chla jae, 2sec ka khel khtm(not waitng for 2sec for the entire function)

/*
createPosts({ title: "Post Three", body: "THis is Post Three" });

timeout is 1sec for getPosts whereas timeout is 2sec for createPosts.
MTLB getpost pehle run ho jaega uske baad createposts se woh show nhi hoga. 
At this situation, Asynchronous programming comes in, callbacks come in which is one way to handle this.
*/
createPosts({ title: "Post Three", body: "THis is Post Three" }, getPosts);
// 2sec baad sb show ho rha h