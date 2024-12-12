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