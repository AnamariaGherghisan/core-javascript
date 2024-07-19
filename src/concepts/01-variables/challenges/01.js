console.log("1.", username);
// Output: 1.undefined
//Reason: Due to hoisting, username is declared but not initialized yet, so it is undefined

var username = "bobsmith";
//Initializes username to "bobsmith"

console.log("2.", username);
// Output: 2. bobsmith
//Reason: username is now "bobsmith"

//The condition is true because username is "bobsmith"
if (username === "bobsmith") {
  console.log("3.", username);
  // Output: 3. bobsmith
  //Reason: username is still "bobsmith"

  //Re-declares and reassigns username to "alicesmith" inside the if block
  var username = "alicesmith";

  console.log("4.", username);
  // Output: 4. alicesmith
  //Reason: username is now "alicesmith"
}

console.log("5.", username);
// Output: 5. alicesmith
//Reason: username remains "alicesmith" outside the if block because of function-level scoping of var

//Defines foo function
function foo() {
  console.log("6.", username);
  // Output: Output: 6. undefined
  //Reason: Due to hoisting within the function scope, username inside foo is undefined until it is assigned

  //Initializes username inside foo to "alicesmith"
  var username = "alicesmith";

  console.log("7.", username);
  // Output: 7. alicesmith
  //Reason: username inside foo is now "alicesmith"
}

//Calls foo function
foo();

//Defines bar function
function bar() {
  console.log("8.", username);
  // Output: 8. alicesmith
  //Reason: username is "alicesmith" from the outer scope

  //Reassigns username to "carolsmith"
  username = "carolsmith"; //inside bar function

  console.log("9.", username);
  // Output: 9. carolsmith
  //Reason: username is now "carolsmith"
}

//Calls bar function
bar();

//Declares email as undefined
var email;

console.log("10.", email);
// Output: 10. undefined
//Reason: email is declared but not initialized
