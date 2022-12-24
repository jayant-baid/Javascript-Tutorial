//! Objects -> Reference Type
//* Arrays are good but not sufficient for real world data
//* Objects store key value pairs
//* Objects don't have index

//? Object Literal
const person = {
    name: "Jayant", // "name": "Jayant"
    age: 20,
    hobbies: ["Watching Movies", "Making Videos", "Sleeping"]
};
console.log(person);
console.log(typeof person);
//How to access data from objects
console.log(person.name); // OR person["name"]
console.log(person.hobbies); // OR person["hobbies"]

//How to add key value pair to objects
person.gender = "Male"; // OR person["gender"]= male
console.log(person);

//? Difference b/w dot(.) and bracket([]) notation
//* Agar key name me agar space h then we have to use ""
const person1 = {
    name: "Jayant",
    age: 20,
    "person hobbies": ["Watching Movies", "Making Videos", "Sleeping"]
};

console.log(person1["person hobbies"]); //Not able to access with dot(.)

//Add email which is assigned with different name
const key = "email";
person1[key] = "baidjayant2002@gmail.com";
console.log(person1);

//! How To iterate Object
// use person object
//? For in Loop
for (let key in person) {
    console.log(key); // This will show key name only
    console.log(person.key); // Shows Undefined (no. of times lopp execute)
    console.log(person[key]); // This will show values
}
//key value pair
for (let key in person) {
    console.log(`${key} : ${person[key]}`);
    // console.log(key ,person[key]);
}

//? Object.keys
console.log(Object.keys(person)); // it makes an array of keys
console.log(Array.isArray(Object.keys(person)));

//? For Of Loop
for (let key of Object.keys(person)) {
    console.log(key); // shows key name
    console.log(person[key]); // shows values
}

//* Computed Properties
const key1 = "objkey1";
const key2 = "objkey2";

const value1 = "myvalue1";
const value2 = "myvalue2";

//todo We Want This
// const obj = {
//     objkey1 : "myvalue1",
//     objkey2 : "myvalue2",
// } 

const objt = {
    key1: value1,
    key2: value2,
}
// O/P: key1: "myvalue1", key2: "myvalue2" //?Wrong Output

//* Method 1 
const obj = {
    [key1]: value1,
    [key2]: value2
}
console.log(obj);

//* Method 2 
const obj2 = {};

obj2[key1] = value1;
obj2[key2] = value2;
console.log(obj2);

//! Spread Operator in String 
const str = "gmp";
const newArray = [...str]; //generate array
console.log(newArray); // O/P: Make Array with single single characters
const newobject = { ..."abcd" }; //generate object
console.log(newobject);

//! Spread Operator in Objects 
const obj3 = {
    key1: "value1",
    key2: "value2"
};
const obj4 = {
    key1: "value69",
    key3: "value3",
    key4: "value4"
};

const newobj = { ...obj3, ...obj4, key69: "value169" }; // key1 ki value second object override kardega
console.log(newobj);

//! Object Destructuring
const band = {
    bandname: "led zeppelin",
    famousSong: "stairway to heaven",
    year: 1969,
    anothersong: "Kashmir"
};
const name = band.bandname;
const song = band.famousSong;
console.log(name, song);

const { bandname, famousSong } = band; //By Default: key name se declare ho jate h
console.log(bandname);
console.log(famousSong);

const { bandname: var1, famousSong: var2, ...restprop } = band; // Declare another name
console.log(var1, var2);
console.log(restprop);

//! Object inside Array -> Very Useful in real world applications
const users = [
    { userid: 1, firstname: "Jayant", gender: "male" },
    { userid: 2, firstname: "Mohit", gender: "male" },
    { userid: 3, firstname: "Harsh", gender: "male" },
];
console.log(users);

for (let user of users) {
    console.log(user); //OR console.log(user.firstname);
}

//! Nested Destructuring
//use users array
const [user1, user2, user3] = users;
console.log(user2);

//* If we want firstname of user1 and gender of user3
const [{ firstname }, , { gender }] = users;
console.log(firstname, gender);

const [{ firstname: user1name }, , { gender: user3gender }] = users;
console.log(user1name, user3gender);