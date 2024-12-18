// Objects Literal 

const mysym = Symbol("keys");
const obj =  {
        name : "satyam",
        "branch name": "EEE",
        age : 22,
        [mysym]: "key1",
        email: 'satyamm@google.com',
        islogged: false,
        lastlogged: ['monday', 'sunday'],
        id: 101
};
console.log(obj);

// How to fetch elements from Object.

console.log(obj.age); //22
// error  => console.log(obj."branch name"); //22

// This is the proper use via square bracket.
console.log(obj["age"]);  // 22
console.log(obj["branch name"]); // EEE
console.log(obj[mysym]);

// How to modify from object;

obj.name = "samrat";
console.log(obj.name);

// If I dont want any modification use freeze
Object.freeze(obj);
//  Here it won't modify.
obj.name = "kumar";

console.log(obj);

 //Array : Object
 let arr = [10,20,30];
 console.log(arr, typeof arr);

 //Key: value:- Object (JSON: JAVASCRIPT OBJECT NOTATION)

 let s1 = {
     name: "Satyam",
     age: 24,
     Email: 'satyam@gmail.com',
     Marks: [100,65,78]
 }
 console.log(s1, typeof s1);
 console.log(s1.name); //satyam
 console.log(s1.marks); //[100,65,78]


 let s2 = {
     Marks: [85,99,100], //(Object Array)
     Email: {
             e1: 'satyam@gmail.com',  //(Object JSON)
             e2: 'sk@gmail.com'
     },
     name: "Satyam",//(String)
    
 }
 console.log(s2, typeof s2);
 console.log(s1.Email);
 console.log(s1.marks); //[100,65,78]