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