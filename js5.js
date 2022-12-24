//! Important Array Methodss
// const numbers = [4, 2, 5, 8];
const numbers = [1, 3, 2, 6, 4, 8];
const users = [
    { firstname: "Jayant", age: 20 },
    { firstname: "Himanshu", age: 21 },
    { firstname: "Mahendra", age: 47 }
];

//todo forEach Method
//* It will not generate a new array
function mulby2(number, index) { // first one should be number and second to be index to perform forEach
    console.log(`index is ${index}, number is ${number}`);
}
// for (let i = 0; i < numbers.length; i++)
//     mulby2(numbers[i], i); OR
numbers.forEach(mulby2); //parameter is a callback func
//* We can make an anamonous function instead of mulby2

users.forEach(function (user) { // Prac Example
    console.log(user.firstname);
});

//todo *** Map Method
//? It will generate a new array
//* It also take callback func as a parameter but must have to return something

function square(number) {
    return number * number;
}
const myarr = numbers.map(square);
console.log(myarr);

const names = users.map(function (user) {
    return user.firstname;
});
console.log(names);

//todo Filter Method
//* Callback Func must return boolean value
const iseven = function (number) {
    return number % 2 === 0;
}
const evenno = numbers.filter(iseven);
console.log(evenno); //Jo jo true honge woh aa jaenge

const oddno = numbers.filter(number => {
    return number % 2 !== 0;
})
console.log(oddno);

//todo Reduce Method
const numbers2 = [1, 2, 3, 4, 5];
//                          prev value  . current value
const sum = numbers2.reduce((accumulator, currentvalue) => {
    return accumulator + currentvalue;
});
/*
accumulator, currentvalue, return
     1           2           3
     3           3           6
     6           4           10
     10          5           15
*/
console.log(sum);
//* By default, accumulator will start from index=0, but if we initialize its value, then current value start from index 0
//? Example:
const sum2 = numbers2.reduce((accumulator, currentvalue) => {
    return accumulator + currentvalue;
}, 100); // initialize accumulator's value
console.log(sum2);

const usercart = [
    { productid: 1, productname: "mobile", price: 15000 },
    { productid: 2, productname: "laptop", price: 45000 },
    { productid: 3, productname: "mouse", price: 1200 }
];

const cartprice = usercart.reduce((totalprice, currentproduct) => {
    return totalprice + currentproduct.price;
}, 0);
console.log(cartprice);

//todo Sort Method
let numbers3 = [5, 9, 1200, 400, 3000];
// numbers3 = ["5", "9", "1200", "400", "3000"];
// acc to ASCII TABLE: For 1200, it will consider only 1
//           [53, 57, 49, 52, 51];
numbers3.sort(); // gives wierd ans 
console.log(numbers3); // mutate the array: change the array 
//* JS don't sort this by imaging it as numbers, instead JS sort this by imagine elements as strings, means JS sorts strings

numbers3.sort((a, b) => a - b); //return a-b
/* EX:  1200, 400
    a-b --> if +ve, means pehle b likho then a
    a-b --> if -ve, means pehle a likho then b

    1200-400 --> 800 +ve, hence pehle 400 then 1200
    400,1200
*/
// For Desc Order: return b-a;
console.log(numbers3);

const products = [
    { productId: 1, produceName: "p1", price: 300 },
    { productId: 2, produceName: "p2", price: 3000 },
    { productId: 3, produceName: "p3", price: 200 },
    { productId: 4, produceName: "p4", price: 8000 },
    { productId: 5, produceName: "p5", price: 500 },
];
//* Sort Acc to Price
// lowToHigh
products.sort((a, b) => a.price - b.price); // This will change the products
console.log(products);

const lowToHigh = products.slice(0).sort((a, b) => {
    return a.price - b.price;
});

const highToLow = products.slice(0).sort((a, b) => {
    return b.price - a.price;
});

console.log(lowToHigh);
console.log(highToLow);

const users2 = [
    { firstName: "harshit", age: 23 },
    { firstName: "mohit", age: 21 },
    { firstName: "nitish", age: 22 },
    { firstName: "garima", age: 20 },
]
//* Sort Acc to FirstName
users2.sort((a, b) => {
    if (a.firstName > b.firstName) {
        return 1;
    } else {
        return -1;
    }
});
console.log(users2);

//todo Find Method
const myarray = ["hello", "cat", "dog", "lion"];
function islength3(string) {
    return string.length === 3;
}
const ans = myarray.find(islength3); //it gives the first value whose length is 3
console.log(ans);

const users5 = [
    { userid: 1, username: "Jayant" },
    { userid: 2, username: "Mahendra" },
    { userid: 3, username: "Mamta" },
    { userid: 4, username: "Gucci" }
];
//we want userid=3
const myuser = users5.find((user) =>
    user.userid === 3);
console.log(myuser);

//todo Every Method
//* condition should be apply to everyone and we get boolean ans
const numbers69 = [2, 4, 6, 8, 11]; //check whether all no. are even or not

const iseven69 = numbers69.every((number) => number % 2 === 0);
console.log(iseven69);

//use usercart array
//Q. Every price is less than 30K or not
const checkprice = usercart.every((cartitem) => cartitem.price < 30000);
// const checkprice = usercart.every((cartitem) => cartitem.price < 50000);
console.log(checkprice);

//todo Some Method
//* Kya ek bhi number essa hai jo even hai?
const numbers169 = [3, 5, 8, 9];
const ans169 = numbers169.some((number) => number % 2 === 0);
console.log(ans169);

//todo Fill Method
//* Fill whole array with a single value
const myarr2 = new Array(10).fill(-1);
console.log(myarr2);

const temparr = [1, 3, 5, 7, 8, 9, 31, 33, 23];
temparr.fill(0, 4); // value, start, end (not included) if end not given, it will go till end
console.log(temparr);

//todo Splice Method
//* Array ke beech me delete ya fir insert karna h
const myarr3 = ["item1", "item2", "item3"];

//? Delete
myarr3.splice(1, 1); // start with first element and delete one element
// it will also return the array containing deleted value
console.log(myarr3);

//? Insert
myarr3.splice(1, 0, "inserted item"); // start,deletecount, insert
console.log(myarr3);

//? Insert & Delete Simultaneously
myarr3.splice(1, 2, "item inserted", "FUCK OFF")
console.log(myarr3);