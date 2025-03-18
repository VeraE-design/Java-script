// ARRAYS -contains the same data type
// [element seperated by comas , element2, element3 ....]
const students = ["David", "Quadri", "Isaac", "Johnpaul", "Uju", "Samuel"];
// array properties -Length
console.log(students);
console.log(students.length);
// getting elements from an array,position
console.log(students[0]);
console.log(students[2]);
// change elements in an array, position
students[0] = "Azeez";
students[students.length - 1] = "John Doe";
console.log(students);
// array methods
// add and remove elements from an array (front or back)
// structured data type stack LIFO
// push, unshift (add elements to an element)
students.push("Micheal");
students.push("Juwon");
students.unshift("Uthman");
// pop and shift pop removes from the last shift removes from the first
students.pop();
students.shift();
console.log(students);
// includes
console.log(students.includes("David"));
// indexOf lastIndexOf at
console.log(students);
console.log(students.indexOf("Uju"));
console.log(students.lastIndexOf("Uju"));
console.log(students.at(2));
// extract portions an array slice(start, end(non-inclusive))
console.log(students.slice(0,3));
console.log(students.slice(4, 7));
// methods to convert arrays to strings 
// join . toString
console.log(students.join()); 
// with join you can specify what you want as a seperator
console.log(students.toString());
// with toString its always coma

// iterate methods (going over each elements)
// higher order methods(functions)- because it needs another function as a parameter
// forEach, map, find, filter, some, every, reduce
// forEach - executes a function for every element in an array
students.forEach((student)=>{
    console.log(student.toUpperCase());
});
students.forEach((students)=>{
    console.log(students.charAt(0));
    
});
// map - creates a new array with the result of a function
const smallCasestudents = students.map((student)=>{
    return student.toLowerCase();
});
console.log(smallCasestudents);
// filter - creates a new array with elements that pass a test (search condition)
const myNums = [3, 5, 6, 8, 10, 1, 4, 2];
const greaterThan5 =myNums.filter((num) => num > 5);
console.log(greaterThan5);

const evenNumbers = myNums.filter((num) => num % 2 === 0);
console.log(evenNumbers);

const oddNumbers = myNums.filter((num) => num % 2 !== 0);
console.log(oddNumbers);

const lengthGreaterThan6 = students.filter((student) => student.length > 6);
console.log(lengthGreaterThan6);
// find returns the FIRST element that passes a test (search condition)
const findGreaterThan6 = myNums.find((num) => num > 5);
console.log(findGreaterThan6);
const studentChar = students.find((student) => student.length === 5);
console.log(studentChar);


// some - returns true if at least one of every element passes a test
const ifSomeGreater5 = myNums.some((num) => num > 5);
console.log(ifSomeGreater5);

// every- returns true if all element passes a test
const ifAllGreater5 = myNums.every((num) => num > 5);
console.log(ifAllGreater5);

// reverse, sort, concat, reduce,
// string split
const carBrands = ["Toyota", "Rollsroyce", "Farrari", "Tesla", "BMW"];
console.log(carBrands);
// console.log(carBrands.reverse());
console.log(carBrands.sort());
console.log(carBrands.sort().reverse());
// sorting numbers 0 - up up -0
const prices = [200, 4000, 650, 100, 3500];
// buggy
console.log(prices.sort());
// smallest to largest
console.log(prices.sort((a, b) => a - b));
// high to low
console.log(prices.sort((a, b) => b - a));

// concat-
const africanCountries = ["Togo", "Mauritius", "Ghana"];
const asianCountries = ["Singapore", "Japan", "South Korea"];

const holidayDestinations = africanCountries.concat(asianCountries);
console.log(holidayDestinations);

const fruit ="banana"
// split method on a string
console.log(fruit.split(""));
console.log(fruit.split("a"));
// write a function that reverses the letter in a word
// cat -- tac gel - leg 
const reverseWord = (word) => {
    return word.split("").reverse().join("");
};
console.log(reverseWord("cat"));
console.log(reverseWord("gel"));
// palindrome - words that are spelt the same even when reversed
function isPalindrome(word) {
    return word.toLowerCase() === word.split("").reverse().join("").toLowerCase()
}
console.log(isPalindrome("Madam"));
// SET -unique values in an array
const users = ["John", "Dave", "Nate", "John", "Dave"];
console.log(new Set(users));
// destructuring
// complex data structures
const transactions = [2000, -300, -250, 7000, -5000];
console.log(transactions.length);
console.log(transactions[1]);
console.log();


































