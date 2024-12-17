// Array Types of Decalaration

const arr = new Array(1,2,4,6,8);
const arr1 = [11,23,45,"satyam",12.45];

// In Javascript array takes Heterogeneous data means different type of data type.

console.log(arr1[4]); // It gives by index number as output 12.45.
console.log(arr[2]); //  4

let arr2= [10,11,12,13,14,15]
console.log(Array.isArray(arr2)); // true
console.log(arr2); // [10,11,12,13,14,15]

// Add Element from last.
arr2.push(16);
console.log(arr2); //[10,11,12,13,14,15,16]

//Remove Element from the last.
arr2.pop();
console.log(arr2); //[10,11,12,13,14,15]

// Add the element to first.
arr2.unshift(9);
console.log(arr2); //[9,10,11,12,13,14,15]


//Remove element from first.
arr2.shift();
console.log(arr2); //[10,11,12,13,14,15]

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~SPLICE~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
numbers = [10,20,30,40,50,60,70]
console.log(numbers);
numbers.splice(2,3,600,700,'kod',true); //here 2 is index and 3 is how many to delete from there.
console.log(numbers);

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~SLICE~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let arr3= [100,200,true,600,'kod']
let newarr = arr1.slice(1,4); //length - 1 i.e. 4 - 1 = 3
console.log(newarr); //[200,true,600]
console.log(arr3);