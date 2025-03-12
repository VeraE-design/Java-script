// conditional statements
// if statement or condition is true run the line of code

if (true) {
  console.log("hello world");
}
// 18+ you are eligible to vote
const age = 12;
if (age >= 18) {
  console.log("YOU ARE ELIGIBLE TO VOTE");
}
const password = "gdjhehiaw";
if (password.length >= 9) {
  console.log("Password is strong");
}
// if else statement

const password2 = "gdjhehiaw";
if (password.length >= 9) {
  console.log("Password is strong");
} else {
  console.log("password is weak");
}
const balance = 2000000;
const amount = 3000000;
if (balance > amount) {
  console.log("transaction successful");
} else {
  console.log("insufficient funds");
}
const userpin = 7589;
const enteredpin = 4141;
if (userpin === enteredpin) {
  console.log("PIN CORRECT");
} else {
  console.log("INCORRECT PIN");
}

const email = "veseyade@gmail.com";
if (email.includes("@")) {
  console.log("VALID EMAIL");
} else {
  console.log("INVALID EMAIL");
}
const score = 100;

if (score >= 50) {
  console.log("PASSED");
} else {
  console.log("FAILED");
}
let myNum = 89;
if (myNum > 0) {
  console.log("positive");
} else {
  console.log("Negative");
}
let num1 = 90;
let num2 = 98;
if (num1 > num2) {
  console.log(`num1 ${num1} is greater than num2 ${num2}`);
} else {
  console.log(`num2 ${num2} is greater than num1 ${num1}`);
}
let num = 70;
if (num % 2 === 0) {
  console.log(`${num} is even`);
} else {
  console.log(`${num} is odd`);
}

const purchaseAmount = 150;
if (purchaseAmount > 100) {
  console.log("eligible");
} else {
  console.log("not eligible");
}
const averageA = (54 + 56 + 78) / 3;
const averageB = (67 + 60 + 82) / 3;
console.log(`TeamA has an average score of ${averageA}`);
console.log(`TeamB has an average score of ${averageB}`);

if (averageA > averageB) {
  console.log("Team A wins");
} else {
  console.log("Team B wins");
}

let timeOfDay = 13;
if (timeOfDay > 10 && timeOfDay < 16) {
  console.log("You should be in class");
} else {
  console.log("Be at home");
}

const transaction = 3000;
if (transaction > 2500) {
  console.log(`charges is ${100}`);
} else {
  console.log(`charges is ${50}`);
}
let word = "eyecare".toLowerCase();
if (
  word.includes("a") ||
  word.includes("e") ||
  word.includes("i") ||
  word.includes("o") ||
  word.includes("u")
) {
  console.log("The Word is a vowel");
} else {
  console.log("The Word is a consonant");
}
// else if statements
const scoreA = 100;
const scoreB = 100;
if (scoreA > scoreB) {
  console.log("A Wins");
} else if (scoreA > scoreB) {
  console.log("B Wins");
} else {
  console.log("it is a draw");
}
const movieRating = 6.5;
if (movieRating >= 8) {
  console.log("Excellent Movie");
} else if (movieRating >= 6) {
  console.log("Good Movie");
} else if (movieRating >= 5) {
  console.log("Average Movie");
} else {
  console.log("Bad Movie");
}
// nested if statement
// if(email && password){
//     if(email is registered){
//         if(password is correct){
//             // login
//         }else{
//             console.log('Incorrect pass');

//         }

//     }else{
//         console.log('please register');

//     }

// }else{
//     console.log('provide your email and password');

// }

// switch statement
const grade = "A";

switch (grade) {
  case "A":
  case "a":
    console.log("Excellent");
  case "B":
  case "b":
    console.log("Very Good");
    break;
  case "C":
  case "c":
    console.log("Good");
     break;
  case "D":
  case "d":
    console.log("Fair");
     break;
  case "E":
  case "e":
    console.log("Pass");
     break;
  case "F":
  case "f":
    console.log("Fail");
}
