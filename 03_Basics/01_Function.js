// Function without Parameter 

function name() {
        console.log("Satyam");
        console.log("Samrat");
}
name();

// Function with Parameter
function myname(name1, name2) {   // Here name1 and name2 is called Parameter.
    let res = name1 + name2;
    console.log("The addition of 2 String is : ", res);
}
myname("Satyam", "Samrat"); // Here while giving the value satyam and samrat is called arguments.

// Other way to Executing function 
function add(number1, number2) {
    let sum = number1 + number2;
    return sum;
}
let result = add(2,4);
console.log(result);

//2nd way

function userlogin(username) {
    if (!username) {
        // or 
    // if (username === undefined) {
        console.log("Please Enter username");
        return;
    }
    return `${username} is logged in`;
}
console.log(userlogin("Satyam")); // satyam is logged in
console.log(userlogin("")); // If we give empty string then nothing will come but if we dont give any parameter then Undefibned comes.