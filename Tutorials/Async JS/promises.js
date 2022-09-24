const posts = [
    { title: "Post One", body: "This is post one" },
    { title: "Post Two", body: "This is post two" }
];

function getPosts() {
    setTimeout(() => {
        let output = "";

        posts.forEach((post) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPosts(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            // const error = true;
            const error = false;

            if (!error) {
                resolve(); //: Once it get resolve, it'll call getposts
            }
            else {
                reject("Error: Something Went Wrong!");
            }
        }, 2000);
    });
}

/*
createPosts({ title: "Post Three", body: "THis is Post Three" })
    .then(getPosts); //:

//   When it get rejected, it will show Uncaught (in promise) , show to fix that, we use catch()

createPosts({ title: "Post Three", body: "THis is Post Three" })
    .then(getPosts)
    .catch(err => console.log(err));

//   This will show clean nice error in consol rather than just an uncaught promise
*/

// || ASYNC / AWAIT  : It waits for an asynchronous process or action to complete --- CLEARER + NEATER
async function init() {
    await createPosts({ title: "Post Three", body: "THis is Post Three" });

    getPosts();
    // We are waiting for createPosts to be done until we move on & call getPosts
}

init();

// ASYNC / AWAIT + FETCH
async function fetchUsers() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");

    const data = await res.json();
    console.log(data);
}

fetchUsers();

// PROMISE.ALL

const promise1 = Promise.resolve("Hello World");
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 2000, "GOODBYE"));

// FETCH
const promise4 = fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json()
);
// Fetch is little weird, first we have to convert it to JSON, then proceed further.

//           ARRAY
Promise.all([promise1, promise2, promise3, promise4]).then(values => console.log(values));