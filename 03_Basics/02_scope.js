 //var c = 300

let a = 100
if (true) {
       let a = 10;
       const b  = 20;
       var c = 30;
}
 console.log(a);
//console.log(b);
//console.log(c);


function one() {
                const username = "satyam";
                // Here we cant access variable of function two outside we can access thevariable of one in inside the two function.
                function two() {
                    const website = "www.tech.com";
                    console.log(username);
                }
                // console.log(website);  error

                two();
}
one();

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 1. We can call the function before the methoid if we dont store in any variable.

console.log(type(4));
function type(num) {
    return num + 1;
}

//If we store the value in any reference variable then we cant call before the function thats is called Hoisting.
//console.log(dec(6)); error
const dec = function(num) {
    return num + 2;
}

console.log(dec(6));


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/* The variables which are declare using let will be stored inside temporal dead zone. 
   The temporal dead zone is the area of the memory where uninitialized variable will be stored.
   If programmer will access the variable which are inside the temporal dead zone will get the reference error.
   The variables which are declared using let cannot be accessed before its decalration.
*/


    // console.log(b);
    // let b = 300;

    
    console.log(c);
    var c = 300;

    let e = 500;
    console.log(e);// The Variable can be access before its declartion using var.
    
    var a1 = 100;
    console.log(b);

    var b = 300;
    //console.log(c);
    
    console.log(d);
    var d = 600;
    console.log(d);
 
//~~~~~~~~~~~~~~~~~~~~~~~~~~