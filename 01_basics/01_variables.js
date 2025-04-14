const accountId = 123456
let accountEmail = "om.giri@hcl.com"
var accountPassword = "123456"
accountCity = "Jaipur"
let accountState;

// accountID = 2

accountEmail = "sonu@gmail.com"
accountPassword = "0909090909"
accountCity = "Delhi"

console.log(accountId);

/* 
Prefer not to use var
because of the issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);