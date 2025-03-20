try {
    console.log(age);
    // do sth
} catch (error) {
    // handle the error
    // error message
    console.log(error.message);
}

// optional chaining
const person = {
    name : "bob",
    age: 76,
};
if (person.age) {
    // console.log("hello");  
};
// will not break code
console.log(person?.job);
// will break code
console.log(person.job);

// nullish coalescence
const image = null;
const whatsappAvatar = image ?? "Avatar Image";
console.log(whatsappAvatar);






 
