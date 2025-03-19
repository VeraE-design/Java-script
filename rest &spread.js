// REST and SPREAD OPERATORS
const user = {
    name : "John Carter",
    age : 90,
    gender : "male",
};
// unstructured data type
const { ... prop } = user;
console.log(prop);
// structured
const arr = [3, 4, 6, 8 ]
const [... others] = arr;
console.log(others);

const countries = ["Togo", "Cameroon", "Gabon", "Ghana", "Guinea"];
const [x, ...rest] = countries;

const products = {
    title: "Micheal Kors",
    price: 300,
    Image: "image",
};
const {price, ...property} = products;
// spread operator ...
const detailedProduct = {
    stock: 6,
    color: "red",
    category: "bags",
    weight: 13,
    ...products,
}
console.log(detailedProduct);

const onlineStudents = ["John", "peter", "Malik"]
const physicalStudents =["Uthman", "Vera", "Bisi"]

const allStudents = [...physicalStudents, ...onlineStudents, "Ruud", "Seyi"]
console.log(allStudents);



