// ternary operators is similar to if/else
// condition ? first action : second action
const myNumber = -50
myNumber > 0 ? console.log("positive") : console.log("Negative");

let myNum = 7
myNum % 2 === 0 ? console.log("Even") : console.log("Odd");

const hasACar = false;

const sentence =`Mr Mario ${hasACar ? "has" : "does not have"} a car`;
console.log(sentence);

let isUserLoggedIn = false;
isUserLoggedIn ? console.log("Welcome User") : console.log("log out");

const balance = 200000
const loanAmount =5000000
loanAmount <= balance * 2 ? console.log("Eligible") : console.log("Not Eligible");

let savings = 10000
let transactionAmount =15000
//  write to tell user if the transaction is successful or not
savings > transactionAmount ? console.log("successful") : console.log("Not successful");
// if creadit add it to the savings if not substract

transactionAmount > 0 ? console.log(`credit alert of ${transactionAmount}`) : console.log(`debit alert`);

savings += transactionAmount;
console.log(savings);








