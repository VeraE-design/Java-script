// a// Documents object Model (dom)
// select element on the document, tagName(h1, p), classname, idName,
// combinations

// const headings = document.getElementsByTagName("h1")
// console.log(headings);

// const myH1s = document.getElementsByClassName("heading");
// console.log(myH1s);

// const textPara = document.getElementById("text");
// console.log(textPara);

// // querySelector(css selector style) one
// const firstPara = document.querySelector("p");
// console.log(firstPara);
// // querySelectorAll
// const allParas = document.querySelectorAll("p");
// console.log(allParas);

// interacting with the content on the web page
// text content, innerText, innerHTML

const heading = document.querySelector(".heading");
console.log(heading.textContent);
console.log(heading.innerText);
heading.textContent += "JS IS FUN";
// heading.innertext = "JS IS FUN";

const container = document.querySelector("div");
console.log(container.innerHTML);
container.innerHTML += "<a href='https://google.com'>visit google</a>";

const myName = "Azeez Thiago"
const fistName = "Azeez";
const lastName = "Thiago";
// const initial = "A.T"
const intro = document.querySelector("h2");
intro.textContent = `Welcome ${fistName.charAt(0)}.${lastName.charAt(0)}`;

const myLink = document.querySelector(".myLink");
// 
myLink.textContent = "facebook";
myLink.setAttribute ("href", "http://facebook.com");
myLink.setAttribute("target", "_blank");
myLink.getAttribute("href");
console.log(myLink. getAttribute("href"));

// interact with styles 
myLink.style.color = "red";
myLink.style.textDecoration = "none"
// 
const btn = document.querySelector("button");
// 
// btn.className = "mybtn";
// classlist
btn.classList.add("mybtn");
btn.classList.add("kelvin");
// btn.classList.remove("kelvin");

// create element in js
const section = document.createElement("section");
section.innerHTML = "<h1>Created from JS/h1</h1>";
section.className = "mysection"

// append it body or whereever it is needed
const body = document.querySelector("body");
body.appendChild(section);

// responding to users interaction
// 

const testbtn = document.querySelector(".testbtn");
testbtn.addEventListener("click", () => {
    console.log("User clicked");  
    body.style.backgroundColor = "red"; 
    
});
// form handling
// submit
// click

const form = document.querySelector('form');
const fullname = document.querySelector(".fullname");
const small = document.querySelector("form small");

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const fullNameValue = fullname.value.trim();
    console.log("form submitted", fullNameValue);
    // validate the input
    if (fullNameValue === "") {
        small.style.display = "block";
        small.textContent = "please provide a name";
    }
 
});














