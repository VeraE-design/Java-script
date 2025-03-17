// functions declararations
// functionName () {write code}
function logger () {
    console.log("Hello World");
    
}
logger();

// function welcomeUser () {
//     console.log("Welcome User");  
// }
// welcomeUser();
// logger();
// function parameter- values passed to the functions to use,
function welcomeUser(name = "Anon") {
    console.log(`welcome ${name}`);
    
}
welcomeUser()
welcomeUser("Vera")
welcomeUser("Quadri")

// write a fuction that adds two numbers together
function addTwoNumbers(n1 = 0, n2 = 0) {
    const total = n1 + n2;
    console.log(total);
}
addTwoNumbers(34, 10);
addTwoNumbers(9, 10);
addTwoNumbers(8);
// write a function that substract two numbers
function subtractTwoNumbers(n1, n2) {
    console.log(n1 - n2);
    
}
subtractTwoNumbers(90, 0);
subtractTwoNumbers(2, 5);

// write a function called word converter, that converts all alphabets to uppercase
function wordConverter(word = "word") {
    console.log(word.toUpperCase());
    
}
wordConverter("cat")
// 
function replaceAllE(word) {
    console.log(word.toLowerCase().replaceAll("e", "*"));
    
}
replaceAllE("elephants")

function checkLength(word) {
    console.log(word.length); 
}
 checkLength("mango")

 function firstCharacter(word) {
    console.log(word.charAt(0));
    
 }
 firstCharacter("love")

 function etractInitials(firstName, lastName) {
    console.log(firstName.charAt(0) + lastName.charAt(0));
    
 }
 etractInitials("Eseyade", "Vera")

function extract(word) {
    console.log(word.substr(0,5));
    
}
extract("daniella")

function positiveNegative(number) {
    number > 0 ? console.log("POSITIVE"): console.log("NEGATIVE");   
}
positiveNegative(-3);
function sayHello() {
    return "say hello";
}
const val = sayHello();
console.log(val);

// write a func that multiplies two numbers
function multiplyTwoNums(n1, n2) {
    return n1 * n2
}
console.log(multiplyTwoNums(6, 10));
// a function that gives the average result
function average(n1, n2, n3) {
    return (n1 + n2 + n3) / 3;
}
console.log(average(3, 3, 3));
// a function that converts weeks to days
function weeksToDay(weeks) {
    return weeks * 7;
}
console.log(weeksToDay(2));
//a function convert hours to minutes
function hoursToMinute(hours){
    return `${hours} hours is equal to ${hours * 60}minutes`
}
console.log(hoursToMinute(5));
//a function that convert years to months
function yrsToMonths(years) {
    return `${years} years is equal to ${years * 12}months`
}
console.log(yrsToMonths(2));

//  write a function that returns 40
function tray() {
    return 40;
}
console.log(tray());
// function expression
const myName = function () {
    return "John"
}
console.log(myName());

const divideTwoNum = function (n1, n2) {
    return n1 / n2;
}
console.log(divideTwoNum(9, 3));
console.log(divideTwoNum(9, 3));
// hoisting
// func delaration - hoisted above puts at the top  of the doc
removalla("email");
function removalla(word) {
    console.log(word.replace("a", " "));
    
}
// arrow functions lets functions = () =>()
    const myArrowFunc = () => {
        console.log("Arrow Function");
        
    }
    myArrowFunc();

    // 
    const checkWinner = (scoreA, scoreB) => {
        if (scoreA > scoreB) {

            return "score A wins";  
        }
    else if (scoreA < scoreB) {
        return "score B wins"
    }else {
        return "it is a Draw"
    }
};
    console.log(checkWinner(56, 78));
    // write a func called calculateBMI 
    // TAKE IN BODY MASS and height as a parameter
    // the func should return the BMI index rounded to 2 decimL PLACES

    const calculateBMI = (mass, height) => {
        let BMI = mass / height ** 2;
        return BMI.toFixed(2);
    }
    console.log(calculateBMI(70, 1.75));

    //write a function using the result of the BMI calculated above
//to determine the BMI category
//less than 18.5 is underweight
//between 18.5 and 24.9 is Normal weight
//between 25 and 29.9 is overweight
//anything else is obese
    
    const getBMICategory = (bmi) => {
        if (bmi < 18.5) {
            return "underweight";
        }else if (bmi > 18.5 && bmi <= 24.9) {
            return "Normal Weight"
        }else if (bmi >= 25 && bmi <= 29.9) {
            return "Overweight";
        }else {
            return "Obese";
        }
    }
    console.log(getBMICategory(calculateBMI(70, 1.75)));

    














    















