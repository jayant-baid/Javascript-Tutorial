// Grab the welcome-el paragraph and store it in a variable called welcomeEl

let welcomeEl = document.getElementById("welcome-el")

// Create two variables (name & greeting) that contains your name
// and the greeting we want to render on the page

let name = "Jayant Baid", greeting = "Welcome Back, "

// Render the welcome message using welcomeEl.innerText

welcomeEl.innerText = (greeting + name)

// Add an emoji to the end! 👋
// WRITE YOUR CODE BELOW HERE (NOT TO CHANGE ABOVE CODES )
// HINT: count = count + 1

welcomeEl.innerText += "👋"