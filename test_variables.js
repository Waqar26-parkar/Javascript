console.log("Waqar with code ");

const accountId=1223;
let accountEmail="waqar@microsoft.com";
var accountpassword="234749";
accountCity="Mumbai";

// accountId=2334; --not work const cannot be changes


/*
   Prefer not to use var  keywords variables
   beacuseit issue pf functional scope and blocked scope.
*/

accountEmail= "waqar@parkar.com";
accountpassword= "21324"
accountCity="Pune";

console.log(accountId);

console.table([accountId, accountEmail, accountpassword, accountCity ])