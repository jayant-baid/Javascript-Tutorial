# JavaScript Crash Course For Beginners

## VARIABLES
var: not to use globally scoped <br/>
let: we can reassign values <br/>
const: Not to reassign <br/>

ALWAYS USE CONST INSTEAD OF LET, WHEN WE KNOW WE ARE NOT GOING TO CHANGE IT'S VALUE. IT MAKE OUR CODE MORE ROBUST, MORE SECURE  

---

## DATATYPES
string<br/>
numbers<br/>
boolean<br/>
null<br/>
undefined<br/>
 symbol: it's not so common<br/>

const name = "Jayant";<br/>
const age = 19;  //it is a number not int<br/>
const rating = 4.5; //it is a number not decimal/float<br/>
const istrue = false;<br/>
const x = null;<br/>
// UNDEFINED<br/>
const y = undefined; //explicitly undefined<br/>
let z;<br/>

---

## TYPEOF
console.log(typeof name);   //string<br/>
console.log(typeof age);   //number<br/>
console.log(typeof rating);   //number<br/>
console.log(typeof istrue);   //boolean<br/>
console.log(typeof x);   //object : kind of error, hard to explain its not really an object it's null<br/>
console.log(typeof y);   //undefined<br/>

---

## STRINGS
const name1 = "Jayant";<br/>
const age1 = 19;<br/>
#### Concatenation
console.log("My name is " + name1 + " and age is " + age1); // IT is very irritating<br/>
#### Template Strings
console.log(`My name is ${name1} and age is ${age1}`);<br/>
#### or BEST WAY TO WRITE
const hello = `My name is ${name1} and age is ${age1}`;<br/>
console.log(hello);<br/>

## STRINGS PROPERTIES
const s = "Hello Jayant";<br/>
console.log(s.length);  //length of string<br/>
console.log(s.toUpperCase()); //make all upercase, similar for lowercase <br/>
console.log(s.substring(0, 4)); //starting , ending of substring<br/>

#### Split string into array
console.log(s.split(""));  //split fully in one characters<br/>
/* OUTPUT: [<br/>
  'H', 'e', 'l', 'l',<br/>
  'o', ' ', 'J', 'a',<br/>
  'y', 'a', 'n', 't'<br/>
]<br/>
*/

console.log(s.split("o"));   //slipts when we encounter o<br/>
/* OUTPUT: [ 'Hell', ' Jayant' ]<br/>
*/

---

## ARRAYS 
const numbers = new Array(1, 4, 6, 5);  //constructor<br/>
console.log(numbers);<br/>
#### or BEST WAY TO WRITE
const num = [1, 3, 56, 7];<br/>

const fruits = ["apple", "oranges", "mango"];<br/>
fruits[3] = "pears";<br/>
// We can add in array, inspite of being const BUT, we can't write : fruits = [4, 6, 36]<br/>

#### We can use PUSH to push values at the end
fruits.push("Guvava");
#### We can use UNSHIFT to push values at the beginning
fruits.unshift("Grapes");
#### POP last item in array
fruits.pop();

#### Get index of particular item
console.log(fruits.indexOf("oranges"));

console.log(num);<br/>
console.log(fruits);

// in JAVASCRIPT, we can add diff datatype values in a same array<br/>
const values = ["apple", "oranges", "mango", 1, 3, 56, true];<br/>
console.log(values);

console.log(fruits[1]);

---

## OBJECT LITERALS: are basically key value pairs
const person = {<br/>
    firstName: "Jayant",<br/>
    lastName: "Baid",<br/>
    age: 19,<br/>
    hobbies: ["Watching Movies", "Making Videos"],<br/>
    address: {<br/>
        street: "xyz main street",<br/>
        city: "New Delhi",<br/>
        state: "Delhi",<br/>
        country: "India"<br/>
    }<br/>
}

console.log(person); //show all details<br/>
console.log(person.firstName); //show firstName<br/>
console.log(person.firstName, person.lastName); //show firstName lastName

## Create Variables we want these as Actual Variables --ADVANCED
const { firstName, lastName, address: { city } } = person;<br/>
console.log(firstName, lastName, city); //OUTPUT: Jayant Baid New Delhi

### ADD PROPERTIES in person
person.email = "baidjayant2002@gmail.com";<br/>
console.log(person);

---

## OBJECTS IN ARRAYS
const todos = [<br/>
    {<br/>
        id: 1,<br/>
        text: "Take Break",<br/>
        isCompleted: true<br/>
    },<br/>
    {<br/>
        id: 2,<br/>
        text: "Study Web Dev",<br/>
        isCompleted: true<br/>
    },<br/>
    {<br/>
        id: 3,<br/>
        text: "Watching Movie",<br/>
        isCompleted: false<br/>
    },<br/>
];

console.log(todos);<br/>
console.log(todos[1].text);

---

## JSON : JavaScript Object Notation

 It is a data format, when using API, when we're sending data to a server, usually send it in JSON format & receive in JSON Format 

Double Quotes around keys and string, means <br/>
        "id": 1,<br/>
        "text": "Take Break",<br/>
        "isCompleted": true

#### Either we write OBJECTS like this, OR
const todoJSON = JSON.stringify(todos);<br/>
// stringify: Converts a JavaScript value to a JavaScript Object Notation (JSON) string.

console.log(todoJSON);

---

## LOOPS
// FOR<br/>
for (let i = 0; i < 5; i++) {<br/>
    console.log(i);<br/>
}<br/>
// WHILE<br/>
let i = 0;<br/>
while (i < 5) {<br/>
    console.log(i);<br/>
    i++;<br/>
}<br/>
// SIMILARLY, DO-WHILE LOOP

// LOOPING THROUGH TODOS ARRAY<br/>
for (let i = 0; i < todos.length; i++) {<br/>
    console.log(todos[i].text);<br/>
}<br/>
// OR || BEST WAY TO WRITE<br/>
//       i     arrayName<br/>
for (let todo of todos) {      //for(auto i: arr)<br/>
    console.log(todo.id);      // cout<<i;    kind of this <br/>
}

---

## HIGH ORDER ARRAY METHODS  -- Suggest to do any kind of iteration

#### 1. foreach(): just loops through them
// array.forEach( function(variable) ){}<br/>
todos.forEach(function (todo) {<br/>
    console.log(todo.text);<br/>
});

#### 2. map(): allow us to create a new array from an array
const todoText = todos.map(function (todo) {<br/>
    // we want to return values to new array<br/>
    return todo.text;<br/>
});<br/>

// todoText is the new array<br/>
console.log(todoText);

#### 3. filter(): allow us to create a new array based on a condition
const todoComplteted = todos.filter(function (todo) {<br/>
    // we want to return values to new array<br/>
    return todo.isCompleted == true;<br/>
});<br/>

// todoComplteted is the new array<br/>
console.log(todoComplteted);

#### EX: IF WE WANT COMPLETED TODOS AND GET ONLY TEXT
const todoCompltetedText = todos.filter(function (todo) {<br/>
    // we want to return values to new array<br/>
    return todo.isCompleted == true;<br/>
}).map(function (todo) {<br/>
    return todo.text;<br/>
});<br/>
// todoComplteted is the new array<br/>
console.log(todoCompltetedText);

---

## CONDITIONALS
const a = "10";<br/>
const a1 = 10;<br/>
const a2 = 20;

// == : compares only values, for a: equal<br/>
// === : compare values and datatypes, for a: not equal<br/>
if (a1 === 10) {<br/>
    console.log("Equal");<br/>
}<br/>
else {<br/>
    console.log("NOT Equal");<br/>
}

---

## TERTIARY OPEARTOR
const j = 11;<br/>
const color = j > 10 ? "red" : "blue";<br/>
console.log(color);

// SIMILARLY, SWITCH CASE SAME AS IN C++

---

## FUNCTIONS
function add(num1 = 2, num2 = 5) {<br/>
    console.log(num1 + num2);<br/>
}

function addnum(num1 = 2, num2 = 5) {<br/>
    return (num1 + num2);<br/>
}

 add(8, 9);<br/>
let ans = addnum(7, 5);<br/>
console.log(ans);

---

## ARROW FUNCTION
/* Arrow functions allow us to write shorter function syntax.<br/>
Note: This works only if the function has only one statement.<br/>
*/

const add = (num1 = 2, num2 = 5) => console.log(num1 + num2);

add(6, 4);

const addnum = (num1 = 2, num2 = 5) => num1 + num2;<br/>
// No need to write return<br/>
console.log(addnum(5, 3));

---

## Object-oriented programming OOP
// Constructor Function<br/>
function Person(firstName, lastName, dob) {<br/>
    this.firstName = firstName;<br/>
    this.lastName = lastName;<br/>
    // this.dob = dob;<br/>
    this.dob = new Date(dob);<br/>
    // this.getbirthYear = function () { <br/>
    //     return this.dob.getFullYear(); <br/>
    // }<br/>
    // this.fullName = function () {<br/>
    //     return `${this.firstName} ${this.lastName}`;<br/>
    // }
    
}
#### Instantiate Object
const person1 = new Person("Jayant", "Baid", "10-11-2002");<br/>
// Here date is string, so we, can make it actual date<br/>
const person2 = new Person("Himanshu", "Goyal", "06-24-2002");

#### Prototype Use
Person.prototype.getbirthYear = function () {<br/>
    return this.dob.getFullYear();
}

Person.prototype.fullName = function () {
    return `${this.firstName} ${this.lastName}`;<br/>
}

console.log(person1);  //we also get that this is a function and we, don't want thst, for that, we use prototype -- First Remove function from function person

console.log(person1.dob);<br/>
console.log(person2.dob.getFullYear());

console.log(person1.getbirthYear());<br/>
console.log(person1.fullName());

---

## CLASSES
// Similar to the above OOPS Constructor Function & Similar to classes in C++<br/>
class Person {<br/>
    constructor(firstName, lastName, dob) {<br/>
        this.firstName = firstName;<br/>
        this.lastName = lastName;<br/>
        // this.dob = dob;<br/>
        this.dob = new Date(dob);<br/>
    }<br/>
    getbirthYear() {<br/>
        return this.dob.getFullYear();<br/>
    }<br/>
    fullName() {<br/>
        return `${this.firstName} ${this.lastName}`;<br/>
    }<br/>
};

#### Instantiate Object
const person1 = new Person("Jayant", "Baid", "10-11-2002");<br/>
// Here date is string, so we, can make it actual date<br/>
const person2 = new Person("Himanshu", "Goyal", "06-24-2002");

console.log(person1);

console.log(person1.dob);<br/>
console.log(person2.dob.getFullYear());

console.log(person1.getbirthYear());<br/>
console.log(person1.fullName());<br/>
console.log(person1.dob);<br/>
console.log(person2.dob.getFullYear());

console.log(person1.getbirthYear());<br/>
console.log(person1.fullName());

---


## ELEMENT SELECTORS

#### Single Element Selectors
console.log(document.getElementById('my-form'));<br/>
console.log(document.querySelector('.container'));
#### Multiple Element Selectors
console.log(document.querySelectorAll('.item'));<br/>
console.log(document.getElementsByTagName('li'));<br/>
console.log(document.getElementsByClassName('item'));

const items = document.querySelectorAll('.item');<br/>
items.forEach((item) => console.log(item));

## MANIPULATING THE DOM
const ul = document.querySelector('.items');<br/>
// ul.remove();<br/>
// ul.lastElementChild.remove();<br/>
ul.firstElementChild.textContent = 'Hello';<br/>
ul.children[1].innerText = 'Brad';<br/>
ul.lastElementChild.innerHTML = `<h1>Hello</h1>`; <br/>

const btn = document.querySelector('.btn');<br/>
// btn.style.background = 'red';

---

## EVENTS

### Mouse Event
btn.addEventListener('click', e => {<br/>
  e.preventDefault();<br/>
  console.log(e.target.className);<br/>
  document.getElementById('my-form').style.background = '#ccc';<br/>
  document.querySelector('body').classList.add('bg-dark');<br/>
  ul.lastElementChild.innerHTML = `<h1>Changed</h1>`;<br/>
});

### Keyboard Event
const nameInput = document.querySelector('#name');<br/>
nameInput.addEventListener('input', e => {<br/>
  document.querySelector('.container').append(nameInput.value);<br/>
});

### USER FORM SCRIPT

#### Put DOM elements into variables
const myForm = document.querySelector('#my-form');<br/>
const nameInput = document.querySelector('#name');<br/>
const emailInput = document.querySelector('#email');<br/>
const msg = document.querySelector('.msg');<br/>
const userList = document.querySelector('#users');

#### Listen for form submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {<br/>
  e.preventDefault();<br/>
  
  if(nameInput.value === '' || emailInput.value === '') {<br/>
    // alert('Please enter all fields');<br/>
    msg.classList.add('error');<br/>
    msg.innerHTML = 'Please enter all fields';<br/><br/>
    // Remove error after 3 seconds<br/>
    setTimeout(() => msg.remove(), 3000);<br/>
  } else {<br/>
    // Create new list item with user<br/>
    const li = document.createElement('li');<br/><br/>
    // Add text node with input values<br/>
    li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));<br/><br/>
    // Add HTML<br/>
    // li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;<br/><br/>
    // Append to ul<br/>
    userList.appendChild(li);<br/><br/>
    // Clear fields<br/>
    nameInput.value = '';<br/>
    emailInput.value = '';<br/>
  }<br/>
}

---