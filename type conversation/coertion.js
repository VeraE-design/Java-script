// function calcSumOfNums() {
//     const num1 = prompt("Enter First Number:");
//     const num2 = prompt("Enter Second Number:");

//     console.log(Number(num1) + parseInt(num2));

// }
// calcSumOfNums()
// type conversion
// numbers to string toString, strings
// 60 ==> "60"
// const num = 98;
// console.log(typeof num);
// console.log(typeof num.toString);
// console.log(typeof String(num));

// strings to number //ade //'98' -- 98
// Number parseInt
const myStr = "30";
console.log(typeof myStr);
console.log(typeof Number(myStr));
console.log(typeof parseInt(myStr));
console.log(parseInt(myStr) * 2);
console.log(+"30" + 2);

// Type COERCTION - force
// whenever a string is involved with + ---> string concatenanation 
// e.g "50" + 4 == "504"
// however a valid number string "24" is involved with other math operators - coerces to behave as a number e.g "50"- 5 =45
// a non valid number string e.g "ade " involved with math operators except + would result to NaN e.g "ade"- 5 = NaN

console.log("2" + 4);
console.log("wale" / 4);
console.log("micheal" * "4");






// Assignment
// write a code thats a question using the prompt method
//the question should say "Who is there?"
//if the question reply is "Dami", it should prompt for a password
//if the qestion reply is not "Dami", alert "I dont know you"

//if the password is "javascript", then alert "welcome user"
//if the password is not "javascript", alert "wrong password"
//if there is no question, alert "cancelled"


// const logInDetails = () => {
//   let user = prompt("Who is there?: ");
//   if (user === "Dami") {
//     let password = prompt("Enter password: ");
//     if (password === "javascript") {
//       alert("Welcome user");
//     } else if (password !== "javascript") {
//       alert("wrong password");
//     }
//   } else if (user === null || user === "") {
//     alert("Cancelled");
//   } else {
//     alert("I don't know you");
//   }
// };
// logInDetails();



