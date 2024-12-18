
    /* 1. IN JavaScript as a programmer we no need to declare data types for variables.

    2. JavaScript itself will assign the data type for variables based on the value which we have stored in it. */

    // var, let, const:
    {
        var items = 20; // Allowed
        console.log(items);
    }
    var items = 400; // Reassignment Allowed
    console.log(items); 

    {
        let product_count = 300;
        console.log('Product Count is: ', product_count);
        product_count = 900;
        console.log('Product Count is: ', product_count);
    }
    // console.log('Product Count is: ', product_count); // not allowed

    {
        const name ='kodnest';
        console.log('The name is ', name);
        // name ='Technologies';   //ERROR Not-allowed
        // console.log('The name is ', name);
    }
    //console.log('The name is ', name);
// <!-- 
//     Var:

//     1. The variables which are declared outside the class using var can be accessed
//     inside the same block and outside the block as well.
    
//     2. Reassignment for the variables is allowed.

//     LET: 
//     1. The variables which are declared using let can be accessed inside and can be reassigned 
//         to the new value in the same block.

//     CONST:
//     1. The variables which are declared using const cannot be accessed outside the block
//         and cannot be reassigned inside or outside the block.
const accountId = 12345;
let accountGmail = "satyam@gmail.com";
var password = "0000";
accountCity = "Patna";
let accountbalance;
//  accountId = 2;  //we cant change const.

accountGmail = "ss@gmail.com"
password = "23222";
accountCity = "Bengaluru"

console.log(accountId);
/*
prefer not to use var because of 
issue in block scope and functional scope.
*/

console.table([accountId, accountGmail, password, accountCity, accountbalance])