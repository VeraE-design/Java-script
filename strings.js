// STRINGS -characters are always inside of quotation marks
const firstName = "John";
const lastName = "Doe";

// STRING PROPERTIES - length, concatenation(joining)
console.log(firstName.length);
console.log(lastName.length);

const myPassword ="happy       ";
// spaces are also valid characters
console.log(myPassword);
console.log(myPassword.length);

// concatenation
const fullName =firstName + " " + lastName;
console.log(fullName);
console.log(fullName.length);

// string methods- built in functions that can be done on strings
const email ="jjdoe@google.co.uk";
console.log(email);
// toUpperCase, toLowerCase
console.log(email.toUpperCase());
console.log(email.toLowerCase());
// indexOF, lastIndexOF, charAt
console.log(email.charAt(1));
console.log(email.indexOf("o"));
console.log(email.lastIndexOf("o"));
// startsWith true or false, endsWith, includes
console.log(email.startsWith('jj'));
console.log(email.endsWith(".uk"));
console.log(email.includes('Doe'.toLowerCase()));
console.log(email.toUpperCase().includes(".CO"));

// trim- trimStart and trimEnd (removes white spaces)
const username = "    ade001    ";
console.log(username.trim());
console.log(username.trimEnd());
console.log(username.trimStart());

// replace replaceAll 
// 01********90
const myName = "jane doe";
console.log(myName.replace("jane","peter"));
console.log(myName.replaceAll("e","*"));
// extract portions of a string slice substring,(start, end)
console.log(myName.slice(5, 7));
console.log(myName.substring(0,3));
// substr(start, num of characters)
console.log(myName.substr(0, 2));

const accountNumber = "1234567890";
console.log(accountNumber.replace(accountNumber.substr(2, 6),"******"));
console.log(accountNumber.replace(accountNumber.slice(2, 8),"******"));

const userName2 ="johnpaul";
console.log("welcome" + " " + userName2.toUpperCase());
console.log(`welcome ${userName2.toLocaleUpperCase()}`);


// concatenation
const author = "Jax Draxx";
const book = "The Ghost";
// Jax Draxx wrote the book the ghost
const  sentence = author + " wrote the book " + book.toLowerCase();
console.log(sentence);
// template literals used to format variables inside of a string
// ``
const sentence2 = `${author} wrote the book ${book.toLowerCase()}`;
console.log(sentence2);
// Adam SANDLER featured in the movie Romance Scam
const person ='Adam Sandler';
const movie ='Romance Scam';
const sentence3 = `${person.toUpperCase()} featured in the movie ${movie}`;
console.log(sentence3);

const country = "Nigeria";
console.log(country.length);
console.log(country.toUpperCase());
console.log(country.substr(1,5));
console.log(country.startsWith("e"));
console.log(country.includes("h"));
console.log(`i live in ${country.toUpperCase()}`);









































