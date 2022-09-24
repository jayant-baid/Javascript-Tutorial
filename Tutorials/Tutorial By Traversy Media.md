# JavaScript Crash Course For Beginners

## VARIABLES
var: not to use globally scoped
let: we can reassign values
const: Not to reassign

ALWAYS USE CONST INSTEAD OF LET, WHEN WE KNOW WE ARE NOT GOING TO CHANGE IT'S VALUE. IT MAKE OUR CODE MORE ROBUST, MORE SECURE  

---

## DATATYPES
string
numbers
boolean
null
undefined
 symbol: it's not so common


const name = "Jayant";
const age = 19;  //it is a number not int
const rating = 4.5; //it is a number not decimal/float
const istrue = false;
const x = null;
// UNDEFINED
const y = undefined; //explicitly undefined
let z;

---

## TYPEOF
console.log(typeof name);   //string
console.log(typeof age);   //number
console.log(typeof rating);   //number
console.log(typeof istrue);   //boolean
console.log(typeof x);   //object : kind of error, hard to explain its not really an object it's null
console.log(typeof y);   //undefined

---

## STRINGS
const name1 = "Jayant";
const age1 = 19;
#### Concatenation
console.log("My name is " + name1 + " and age is " + age1); // IT is very irritating
#### Template Strings
console.log(`My name is ${name1} and age is ${age1}`);
#### or BEST WAY TO WRITE
const hello = `My name is ${name1} and age is ${age1}`;
console.log(hello);

## STRINGS PROPERTIES
const s = "Hello Jayant";
console.log(s.length);  //length of string
console.log(s.toUpperCase()); //make all upercase, similar for lowercase 
console.log(s.substring(0, 4)); //starting , ending of substring

#### Split string into array
console.log(s.split(""));  //split fully in one characters
/* OUTPUT: [
  'H', 'e', 'l', 'l',
  'o', ' ', 'J', 'a',
  'y', 'a', 'n', 't'
]
*/

console.log(s.split("o"));   //slipts when we encounter o
/* OUTPUT: [ 'Hell', ' Jayant' ]
*/

---

## ARRAYS 
const numbers = new Array(1, 4, 6, 5);  //constructor
console.log(numbers);
#### or BEST WAY TO WRITE
const num = [1, 3, 56, 7];

const fruits = ["apple", "oranges", "mango"];
fruits[3] = "pears";
// We can add in array, inspite of being const BUT, we can't write : fruits = [4, 6, 36]

#### We can use PUSH to push values at the end
fruits.push("Guvava");
#### We can use UNSHIFT to push values at the beginning
fruits.unshift("Grapes");
#### POP last item in array
fruits.pop();

#### Get index of particular item
console.log(fruits.indexOf("oranges"));

console.log(num);
console.log(fruits);

// in JAVASCRIPT, we can add diff datatype values in a same array
const values = ["apple", "oranges", "mango", 1, 3, 56, true];
console.log(values);

console.log(fruits[1]);

---

## OBJECT LITERALS: are basically key value pairs
const person = {
    firstName: "Jayant",
    lastName: "Baid",
    age: 19,
    hobbies: ["Watching Movies", "Making Videos"],
    address: {
        street: "xyz main street",
        city: "New Delhi",
        state: "Delhi",
        country: "India"
    }
}

console.log(person); //show all details
console.log(person.firstName); //show firstName
console.log(person.firstName, person.lastName); //show firstName lastName

## Create Variables we want these as Actual Variables --ADVANCED
const { firstName, lastName, address: { city } } = person;
console.log(firstName, lastName, city); //OUTPUT: Jayant Baid New Delhi

### ADD PROPERTIES in person
person.email = "baidjayant2002@gmail.com";
console.log(person);

---

## OBJECTS IN ARRAYS
const todos = [
    {
        id: 1,
        text: "Take Break",
        isCompleted: true
    },
    {
        id: 2,
        text: "Study Web Dev",
        isCompleted: true
    },
    {
        id: 3,
        text: "Watching Movie",
        isCompleted: false
    },
];

console.log(todos);
console.log(todos[1].text);

---

## JSON : JavaScript Object Notation

 It is a data format, when using API, when we're sending data to a server, usually send it in JSON format & receive in JSON Format 

Double Quotes around keys and string, means 
        "id": 1,
        "text": "Take Break",
        "isCompleted": true

#### Either we write OBJECTS like this, OR
const todoJSON = JSON.stringify(todos);
// stringify: Converts a JavaScript value to a JavaScript Object Notation (JSON) string.

console.log(todoJSON);

---

## LOOPS
// FOR
for (let i = 0; i < 5; i++) {
    console.log(i);
}
// WHILE
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
// SIMILARLY, DO-WHILE LOOP

// LOOPING THROUGH TODOS ARRAY
for (let i = 0; i < todos.length; i++) {
    console.log(todos[i].text);
}
// OR || BEST WAY TO WRITE
//       i     arrayName
for (let todo of todos) {      //for(auto i: arr)
    console.log(todo.id);      // cout<<i;    kind of this
}

---

## HIGH ORDER ARRAY METHODS  -- Suggest to do any kind of iteration

#### 1. foreach(): just loops through them
// array.forEach( function(variable) ){}
todos.forEach(function (todo) {
    console.log(todo.text);
});

#### 2. map(): allow us to create a new array from an array
const todoText = todos.map(function (todo) {
    // we want to return values to new array
    return todo.text;
});
// todoText is the new array
console.log(todoText);

#### 3. filter(): allow us to create a new array based on a condition
const todoComplteted = todos.filter(function (todo) {
    // we want to return values to new array
    return todo.isCompleted == true;
});
// todoComplteted is the new array
console.log(todoComplteted);

#### EX: IF WE WANT COMPLETED TODOS AND GET ONLY TEXT
const todoCompltetedText = todos.filter(function (todo) {
    // we want to return values to new array
    return todo.isCompleted == true;
}).map(function (todo) {
    return todo.text;
});
// todoComplteted is the new array
console.log(todoCompltetedText);

---

## CONDITIONALS
const a = "10";
const a1 = 10;
const a2 = 20;

// == : compares only values, for a: equal
// === : compare values and datatypes, for a: not equal
if (a1 === 10) {
    console.log("Equal");
}
else {
    console.log("NOT Equal");
}

---

## TERTIARY OPEARTOR
const j = 11;
const color = j > 10 ? "red" : "blue";
console.log(color);

// SIMILARLY, SWITCH CASE SAME AS IN C++

---

## FUNCTIONS
function add(num1 = 2, num2 = 5) {
    console.log(num1 + num2);
}

function addnum(num1 = 2, num2 = 5) {
    return (num1 + num2);
}

 add(8, 9);
let ans = addnum(7, 5);
console.log(ans);

---

## ARROW FUNCTION
/* Arrow functions allow us to write shorter function syntax.
Note: This works only if the function has only one statement.
*/

const add = (num1 = 2, num2 = 5) => console.log(num1 + num2);

add(6, 4);

const addnum = (num1 = 2, num2 = 5) => num1 + num2;
// No need to write return
console.log(addnum(5, 3));

---

## Object-oriented programming OOP
// Constructor Function
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    // this.dob = dob;
    this.dob = new Date(dob);

    
    // this.getbirthYear = function () {
    //     return this.dob.getFullYear();
    // }
    // this.fullName = function () {
    //     return `${this.firstName} ${this.lastName}`;
    // }
    
}
#### Instantiate Object
const person1 = new Person("Jayant", "Baid", "10-11-2002");
// Here date is string, so we, can make it actual date
const person2 = new Person("Himanshu", "Goyal", "06-24-2002");

#### Prototype Use
Person.prototype.getbirthYear = function () {
    return this.dob.getFullYear();
}

Person.prototype.fullName = function () {
    return `${this.firstName} ${this.lastName}`;
}

console.log(person1);  //we also get that this is a function and we, don't want thst, for that, we use prototype -- First Remove function from function person



console.log(person1.dob);
console.log(person2.dob.getFullYear());

console.log(person1.getbirthYear());
console.log(person1.fullName());

---

## CLASSES
// Similar to the above OOPS Constructor Function & Similar to classes in C++
class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        // this.dob = dob;
        this.dob = new Date(dob);
    }
    getbirthYear() {
        return this.dob.getFullYear();
    }
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
};

#### Instantiate Object
const person1 = new Person("Jayant", "Baid", "10-11-2002");
// Here date is string, so we, can make it actual date
const person2 = new Person("Himanshu", "Goyal", "06-24-2002");

console.log(person1);

console.log(person1.dob);
console.log(person2.dob.getFullYear());

console.log(person1.getbirthYear());
console.log(person1.fullName());
console.log(person1.dob);
console.log(person2.dob.getFullYear());

console.log(person1.getbirthYear());
console.log(person1.fullName());

---