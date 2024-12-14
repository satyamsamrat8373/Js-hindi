// Primitive: 7 types: String, number, boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

console.log(typeof scoreValue); // number

const isLogged = false; // typeof = boolean
const outsideTemp = null; // typeof = object
let useremail ; // undefined  typeof = undefined

const id = Symbol('123'); // This both id and userId is not same.
const userId = Symbol('123');

console.log(typeof id); //typeof = symbol
console.log(typeof userId);  //typeof = Symbol

console.log(id === userId);  // false

const Bignumber = 45654454643n;
console.log(typeof Bignumber); //typeof = Bbigint

// Non - primitive : Array, Objects, Functions.

const arr = ["satyam", "samrat", "kumar"];
console.log(typeof arr); //typeof = object


let myobject = {
            name: "Satyam",
            age: 22,
            gender: "male"
};
console.log(typeof myobject); //typeof = object

const myFunction = function() {
    console.log("Hello world");
}
myFunction();

console.log(typeof myFunction); //typeof = function.


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Primitive Data types : (Stack) 
// && Non-primitive : (Heap).

// for Primitive: 

let email = "satyam@gmail.com";
let password = "12345";

let gmail = email;
console.log(gmail);  //satyam@gmail.com
 gmail = "1234567";

 console.log(gmail); //1234567
 console.log(email); //satyam@gmail.com

 // For Non-Primitive

 let a1 = {
            name: "Ankit",
            age: 22
 }
 // Here value change in the heap original so value of age changes to 22 to 24.
 let a2 = a1; 
 a2.age = 24;
 console.log(a2); //24
 console.log(a1); //24