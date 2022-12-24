//! History of JS
/*
* Netscape Navigator 1995 ka popular browser tha and usse laga ki humare pass ek essi simple prog. language honi chahiye jisse hum website ko interactive bana pae.

* Brendan Eich ne 10days me js bana li and called it mocha then LiveScript. Uss time pr Java Popular thi so, make its name as JavaScript.

* Internet Explorer ne dekha ki JS boom me h toh unhone JS ko uthai and usme kuch extra add karke and kuch remove karke apne language bana li and called it as JScript

* Results in PROBLEM, dono web browser ke pass alag alag languages, so, we have to make 2 different websites one for JS and one for JScript, so to work properly in Both the browsers.

* Fir JS ko lekar ECMA ke pass gae, (make a particular standard), and isse ECMAScript naam dediya, because JS ka naam oracle ke pass tha

*  Modern JS : ES6 (2015)

* JS is backward compatible means the features that run 20years ago, will definitely run in current time.
*  It is not Forward Compatible
*/

"use strict"; // Yrh galtiya karne se bachaega. EX: bina var likhe bhi chl jata h code but abh nhi chalega

console.log("HELLO JAYANT");

//! VARIABLES

var firstname = "Jayant"; // Bina var likhe bhi yeh run hojaega
// EX: firstname="JB";

console.log(firstname);
// Change value 
var firstname = "J2 Ke Factz"; // var likhenge fir bhi chl jaega
console.log(firstname);
/*
 ! RULES FOR NAMING VARIABLES
 *1. Can't Start with Number(Beech me no. likh skhte h )
 *2. Can't use Spaces
 *3. Can use only _ or $ anywhere in word name
 * var j$b = "KFDF";
 * console.log(j$b);
*/

var last_name = "Baid"; // snake case writing
var lastname = "Baid";  // camel case writing 

//! CONVENTION
// Start with small letter and use camelCase

//! Let Keyword
let name = "Jayant";
console.log(name);
/*
Use let instead of var
Reason: block scope vs function scope (Covered Later)
*/

//! Const Keyword - Declare Constants
const pi = 3.14;
console.log(pi);

//! STRINGS
let len = firstname.length;  //J2 Ke Factz
console.log(len);

name = "     Jayant    ";
console.log(name.length);
/* 1
name.trim();   --> right & left side me jo excessive spaces h woh remove karta h
 since strings are immutable, so yeh usse trim nhi karega but ek new string generate kar dega
console.log(name.length);  --> output will be same
*/
let trimname = name.trim(); // name=name.trim();
console.log(trimname.length);

/* 2
name.toUpperCase();  --> sbko upper case me convert karlo
*/
let name1 = "Jayant";
name1 = name1.toUpperCase();
console.log(name1);

/* 3
name.toLowerCase();  --> sbko lower case me convert karlo
*/
console.log(name1.toLowerCase()); // print but name1 ki value change nhi hogi

/* 4
name.slice();  --> string ko break karke jitni hume chahiye utne ki usse bana diya
*/
let n1 = "Jayant";
let newn1 = n1.slice(0, 3);  // [start,end)
console.log(newn1);

let nextn1 = n1.slice(2);  // start with 2 index and goes till end
console.log(nextn1);

//! typeof Operator
/* DATA TYPES (Primitive Data Types)
string - "jayant"
number - 3,6,6.4
boolean - T/F
undefined
null
BigInt
Symbol
*/

let age = 20;
console.log(typeof age);
console.log(typeof firstname);

//? Convert Number to String
let newstring = age + "";  // or age=age+""; if we want age to be string instead of number

// OR Method 2: newstring = String(age);
console.log(typeof newstring);

//? Convert String to Number
let mystr = "34"; // + directly convert it to number
mystr = +mystr; // OR let mystr = +"34";

// OR Method 2: mystr = Number(mystr);
console.log(typeof mystr);

//! String Concatenation
let string1 = "Jayant";
let string2 = "Baid";
let fullname = string1 + " " + string2;
console.log(fullname);
// Example
let s1 = "16";
let s2 = "93";
let s3 = s1 + s2;
let no = +s1 + +s2;
console.log(s3); // 1693
console.log(no); // 109

//! TEMPLATE STRING
age = 20;
firstname = "Jayant";
// "my name is Jayant and age is 20"
let aboutme = "my name is " + firstname + " and age is " + age; // Very tidious task to do so
console.log(aboutme);

let about = `my name is ${firstname} and age is ${age}` // Template String
console.log(about);

//! Undefined
let name10; // var
console.log(typeof name10);
//but const me kuch na kuch toh assign karna hi hoga
name10 = "Roastro Studz";
console.log(typeof name10, name10);

//! null --> matlab kuch nhi
let myvar = null;
console.log(myvar);
console.log(typeof myvar); // o/p : object --> referenced data type. --> this is bug, error

//! BigInt
let mynumber = BigInt(32349007199254740991); //Method1
let mynumber2 = 32349007199254740991n; //Method2
console.log(Number.MAX_SAFE_INTEGER); //9007199254740991
// Agar hume lag rha h ki humare variable me isse bhi bada integer ho skta h then we use BIGINT
console.log(mynumber);
console.log(mynumber + mynumber2);
// We can't add bigint with other data types, we have to make another one explicitly bigint to perform any operation b/w them

//! Booleans & Comparison Operator
let num1 = 5;
let num2 = 5;
let num3 = "5";
console.log(num1 >= num2);

//! == vs ===
console.log(num1 == num2); //compare only values
console.log(num1 == num3);

console.log(num1 === num2); // compare values and datatypes
console.log(num1 === num3);

let num4 = 7;
// != vs !==
console.log(num1 != num3);
console.log(num1 != num4);

console.log(num1 !== num3); //5 , "5"
console.log(num1 !== num4); //5 , 7

//! Truthy & Falsy Values 
//? Falsy Values
// They are considered as false in if else conditions 
/*
false
""
null
undefined
0
*/
//? Truthy Values
// Rest all values are considered as true

//* Example 1
//todo If else 
firstname = "";
if (firstname) {
    console.log(firstname);
}
else {
    console.log("FirstName is empty, Enter Valid Name");
}
//* Example 2
firstname = "Jayant";
if (firstname) {
    console.log(firstname);
}
else {
    console.log("FirstName is empty, Enter Valid Name");
}

//! Ternary Operator
age = 20;
let drink = (age <= 10) ? "Milk" : "Tea";
console.log(drink);

//todo && || operator
//todo nested-if-else
//todo if elseif else 

//let userinput = +prompt("Guess Your Number"); //prompt string me values store karta h.
//console.log(typeof userinput, userinput);

//! Switch Statement
let day = 7;
switch (day) {
    case 1: console.log("Monday");
        break;
    case 2: console.log("Tuesday");
        break;
    case 3: console.log("Wednesday");
        break;
    case 4: console.log("Thursday");
        break;
    case 5: console.log("Friday");
        break;
    case 6: console.log("Saturday");
        break;
    case 7: console.log("Sunday");
        break;
    default: console.log("Invalid Day");
}

//! Loops
//? While Loop 
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

//? For Loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

//* Break  -> loop ko udhar hi band kar dega
//* Continue -> uss conditon ke neeche ki line ko execute nhi karega and then loop me aage bhad jaega

//? Do While Loop
// i = 0;
do {
    console.log(i++);
} while (i < 5)
