
// let firstbatch = 5
// let secondbatch = 7
// let count = firstbatch + secondbatch
// console.log(count)

// EXCERCISE
// 1. Create two variables, myAge and humanDogRatio
// 2. Multiply the two together and store the result in myDogAge
// 3. Log myDogAge to the console
/*
let myAge = 19
let humanDogRatio = 1 / 7
let myDogAge = myAge * humanDogRatio
console.log(myDogAge)
*/

// EXCERCISE
// Create a variable bonusPoints. Initialize it as 50. Increase it to 100.
// Decrease it down to 25, and then finally increase it to 70
/*
let bonusPoints = 50
bonusPoints += 100
console.log(bonusPoints)
bonusPoints -= 25
console.log(bonusPoints)
bonusPoints += 70
console.log(bonusPoints)
*/

// FUNCTIONS

function countDown() {
    // consol.log() is like cout
    console.log(5)
    console.log(4)
    console.log(3)
    console.log(2)
    console.log(1)
}

// Setting up the the race 🏎 🏎 🏎

countDown()
// GO! 🏁
// Players are running the race 🏎 💨
// Race is finished! 🍾

// Get ready for a new race 🏎 🏎 🏎
countDown()

// EXCERCISE
// let is like auto datatype
let lap1 = 34
let lap2 = 33
let lap3 = 36

// Create a function that logs out the sum of all the lap times

function sum() {
    console.log(lap1 + lap2 + lap3)
}

sum()

// FOR LOOP
for (let i = 0; i < 3; i++) {

}

/* DOM (DOCUMENT OBJECT MODEL)
 aka how you use JAVASCRIPT to modify a website
 DOCUMENT: HTML Document
 OBJECT: document in JS is of the datatype object meaning they've taken the HTML DOC and shoved it into JS object.
 MODEL: a representation or modelation
 */

// STRINGS
// we can use single quote also
let username = "Jayant"
console.log(username)

// CONCATENATION
let message = "You have new notifications"
console.log(username + ", " + message + "!")

// STRINGS VS NUMBERS
let number = 42
let greeting = "Hi, my name is "
let myGreeting = greeting + number
console.log(myGreeting)
// OUTPUT: Hi, my name is 42
/* 42 has been turned into string
   In the battle b/w string & number, string wins */

let points = 4
let bonusPoints = "10"
let totalPoints = points + bonusPoints
// points gets typecast from int to strings 
console.log(totalPoints)
//    OUTPUT: 410