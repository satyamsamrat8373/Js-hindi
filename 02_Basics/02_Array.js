// Concatinating or Joining of two array.

const name = ["satyam", "samrat", "kumar"];
const myname = ["ankit", "nitish", "anish"];

name.push(myname);
//console.log(name); // It basically join array inside a array.

const newarr = name.concat(myname); // Concat has return type of variable so we store into an a new variable.
//console.log(newarr);

const newarr2 = [...name, ...myname];
//console.log(newarr2); // It is the best method for concat two array or more than that.

const newname = [1,2,3, [4,5,6],7, [7,8,9,11],34];
const res = newname.flat(Infinity);
console.log(res); // It will give the value like 1,2,3,4,5,6, and so.on like arranging it.

const s1 = "Satyam";
console.log(Array.from(s1)); // It will create string into array like 's','a','t','y','a','m'.

let num1 = 101;
let num2 = 102;
let num3 = 103;
console.log(Array.of(num1, num2, num3)); // It will combined all value inside a array like [101, 102, 103];