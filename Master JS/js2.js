//! Arrays
// Arrays are immutable. Arrays are ordered collection of items
//* Referenced Data Type -> Object
let fruits = ["Apple", "Mango", "Banana", "Grapes"];  // typeof = object
console.log(fruits); // Show Complete Fruits array

console.log(fruits[0]);

let mixed = [1, 4, 2.3, "String", null, undefined, 324n];
console.log(mixed);

//? Check Whether the Object is Array or NOT
console.log(Array.isArray(fruits)); // True
console.log(Array.isArray(mixed)); // True

//? Object Literals
let obj = { name: "Jayant", age: 20 };
console.log(obj);
console.log(Array.isArray(obj)); // False

//? Array Push Pop Method
fruits = ["Apple", "Mango", "Banana", "Grapes"];
fruits.push("Oranges"); //push
console.log(fruits);

let poppedfruit1 = fruits.pop();
console.log(fruits.pop());
// yeh last element ko pop bhi karega and yeh last value ko return bhi karega
console.log(fruits);
console.log(poppedfruit1);

//? Add Element in starting of Array -> Unshift
fruits.unshift("Grapes");
console.log(fruits);

//? Shift -> Starting se element ko hataega
fruits.shift();// yeh bhi remove karta h and return bhi karta h uss fruit ko
console.log(fruits);

//* push & pop are faster than unshift & shift

//! Primitive Vs Reference Data Type
//? Primitive -> store in stack
let num1 = 6;
let num2 = num1;
console.log("Value of num1 = ", num1);
console.log("Value of num2 = ", num2);
num1++;
console.log("After Increment in num1");
console.log("Value of num1 = ", num1);
console.log("Value of num2 = ", num2);

//? Reference -> pointer in stack points to the memory in heeap
let array1 = ["item1", "item2"];
let array2 = array1;
console.log("Array 1: ", array1);
console.log("Array 2: ", array2);
array1.push("item3");
console.log("After Pushing element to array1");
console.log("Array 1: ", array1);
console.log("Array 2: ", array2);

//! Clone Array
array1 = ["item1", "item2"];
array2 = array1;

console.log(array1 === array2);
//Clone
let array3 = ["item1", "item2"];
let array4 = ["item1", "item2"];
console.log(array3 === array4);
//Bekar method when we have 1000 items, so
//* Clone Arrays Using Slice
array3 = ["item1", "item2"];
array4 = array3.slice(0);
console.log(array3 === array4);

//* Clone Arrays Using Concat
array3 = ["item1", "item2"];
array4 = [].concat(array3);
console.log(array3 === array4);

//* Clone Arrays Using Spread Operator
array3 = ["item1", "item2"];
array4 = [...array3];
console.log(array3 === array4);

//* Q. Clone with an array and then concatenate add some other elements
array1 = ["item1", "item2"];
array2 = [...array1].concat("item3", "item4");
//OR
array2 = [...array1, "item3", "item4"];
console.log(array1);
console.log(array2);

//todo for loop, while loop
//? Use CONST for creating Array
const arr = [1, 2, 4, 6];
console.log(arr);
arr.push(13);
arr[0] = -1;
console.log(arr);
// Hum yeh sare methods use kar skte h but arr ko wapas se kisi aur array se  assign nhi kar skte
//todo Most developers use const for array, means jb bhi koi bhi reference type use karna ho tb use CONST

//! FOR OF Loop in Array -> Use MAX Times
const fruits6 = ["apple", "mango", "grapes"];
for (let fruit of fruits6) { // gives items
    console.log(fruit);
}

//! FOR IN Loop in Array -> Not To Use
// const fruits6 = ["apple", "mango", "grapes"];
for (let index in fruits6) {
    console.log(index);  // Gives index
}                        // fruits6[index]

//! Array Destructuring
const myarray = ["v1", "v2"];
// let myvar1=myarray[0];
// let myvar2=myarray[1];
// console.log(myvar1, myvar2);
let [myvar1, myvar2] = myarray; // 2 lines ki jagah bs yeh ek line kaam kar legi, internally implement upar wali 2 lines jese hi hoga
console.log(myvar1, myvar2);

const myarr = ["v1", "v2", "v3", "v4", "v5"];
let [myv1, , myv2] = myarr; // skip v2 and we want to store v3 in myv2
console.log(myvar1, myvar2); //v1 v3

let [v1, v2, ...mynewarr] = myarr; // v1 = 'v1', v2='v2' znd rest jo bhi values bachegi woh sb mynewarr me chli jaegi
console.log(mynewarr);