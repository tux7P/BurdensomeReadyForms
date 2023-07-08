var readlineSync = require("readline-sync")

var userAns = readlineSync.question("Is your teacher age greater than 25?")

if(userAns === "yes") {
  console.log("Correct")
}
console.log("Wrong")
