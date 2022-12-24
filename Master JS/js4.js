//! Functions 
// Call, Invoke, Run
//* Function Delaration
function hello(name) {
    console.log("Hello Word!", name);
}
function sum(a, b) {
    return a + b;
}
hello("Jayant");
console.log(sum(44, 25));

function iseven(num) {
    return num % 2 === 0;
}
console.log(iseven(30));
console.log(iseven(33));

//* Function Expression
const helloworld = function () {
    console.log("Hello");
}
helloworld();

const sumnum = function (a, b) {
    return a + b;
}
console.log(sumnum(4, 2));

//! Arrow Functions
const helloworld1 = () => {
    console.log("Hello");
}
helloworld1();

const sumnum1 = (a, b) => {
    return (a + b);
}
console.log(sumnum1(4, 2));

const iseven1 = num => { // if we have only one paramenter then we can remove parenthesis ()
    return (num % 2 === 0);
}
console.log(iseven1(543));

const sumnum2 = (a, b) => (a + b); //if we have only one line of code, then we can remove return and {} 
console.log(sumnum2(4, 2));

const helloworld2 = () => console.log("Hello");
helloworld2();

//? Hoisting means we can call the function before its declaration and is only possible in function_declaration not in function_expression and not in arrow function

//! Function Inside Function
const app = () => {
    const myfunc = () => {
        console.log("Hello From MyFunc");
    }
    const addtwo = (a, b) => {
        return a + b;
    }
    const multiply = (a, b) => a * b;

    console.log("Inside App Function");
    myfunc();
    console.log(addtwo(5, 3));
    console.log(multiply(5, 3));
}
app();

//! Lexical Scope
//*  It refers to setting the scope, or range of functionality, of a variable so that it may be called (referenced) from within the block of code in which it is defined.
function myapp() {
    const myvar = "value1";
    function myfunc() {
        const myvar = "Value69";
        console.log("Inside myfunc", myvar);
    }

    console.log(myvar);
    myfunc();
}
myapp();

//! Block Scope vs Function Scope
//* let and const are block scope { iske andar }
//* var is function scope

//? Block Scope
{
    let firstname = "Jayant"; // OR const
}
// console.log(firstname); --> Not able to access firstname
//? Function Scope
{
    var firstname = "Jayant"; // yeh purre program me kahi pr bhi declare and access kar skte h
}
console.log(firstname); // Able to access firstname

//! Default Parameters
function add2(a = 0, b = 0) {
    return a + b;
}
let add2no1 = add2(4);
let add2no2 = add2(4, 7);
// let add2no3 = add2(, 4); --> NOT POSSIBLE
console.log(add2no2);

//! Rest Parameters (...) -> rest element goes to this
function myfunc60(a, b, ...c) {
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is ${c}`);
    console.log('c is ', c);  //array
}
myfunc60(2, 4, 6, 8, 9, 12, 14);

function addall(...arr) {
    let sum = 0;
    for (let value of arr) {
        sum += value;
    }
    return sum;
}
let ans = addall(2, 4, 6, 78, 8, 2, 6);
console.log(ans);

//! Parameter(param) Destructuring
//use with object
const person = {
    firstname: "Jayant",
    gender: "male"
};

function printdetails(obj) {
    console.log(obj.firstname);
    console.log(obj.gender);
}
printdetails(person);

//React me bahot jyda use karte h
function printdetails_using_param_destructing({ firstname, gender }) {
    console.log(firstname);
    console.log(gender);
}
printdetails_using_param_destructing(person);

//! Callback Function -> Higher Order Function
//todo HOF means agar hum function ko call kare rhe h ya fir usse return kar rhe h usse HOF kehte h
//*myFunc me function as a input accept karke usse call kar skte h and is called Callback Function
function myFunc2() {
    console.log("I am Inside myFunc2");
}

function myFunc(Callback) { // callback is a function here
    console.log(Callback);
    Callback();
}
myFunc(myFunc2); //param is function, we don't put paranthesis ()

//! Function Returning Function -> Higher Order Function
function myFunction() {
    function hello() {
        console.log("Hello Jayant!");
        return "J2 Ke Factz";
    }
    return hello;
}
let answer = myFunction();
console.log(answer);
let factchannel = answer();
console.log(factchannel);