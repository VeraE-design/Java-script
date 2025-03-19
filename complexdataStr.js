const customers = ["Ade", "Ngozi"];
customers.map((customer) => {
    console.log(customer.charAt(0));
});
// object1, object2
const myCustomers = [{name: "Kung Lao", age: 25, gender: "M", location: "Ibadan", purchase: 6000},
    {name: "Johny Cage", age: 30, gender: "M", location: "Lagos", purchase: 8000},
    {name: "Liu Kang", age: 22, gender: "M", location: "Ibadan", purchase: 4300},
    {name: "Sonya Blade", age: 20, gender: "F", location: "Ondo", purchase: 7000},
    {name: "Kitana", age: 32, gender: "F", location: "Lagos", purchase: 6200},
];
myCustomers[1].name;
const {name} = myCustomers[1];
myCustomers[1]["name"]

myCustomers.map((customer) => {
    console.log(customer.name);  
});

const olderCustomers =myCustomers.filter((customer) => customer.age >= 25)
console.log(olderCustomers);

const youngerCustomers =myCustomers.filter((customer) => customer.age < 25)
console.log(youngerCustomers);

const femaleCustomers = myCustomers.filter((customer) => customer.gender === "F" )
console.log(femaleCustomers);

const maleCustomers = myCustomers.filter((customer) => customer.gender.toUpperCase() === "m".toUpperCase());
console.log(maleCustomers);

const lagosCustomers = myCustomers.filter((customer) => customer.location === "Lagos");
console.log(lagosCustomers);
console.log(lagosCustomers.length);

const sortCustomersByAge = myCustomers.sort((a, b) => a.age - b.age );
console.log(sortCustomersByAge);

const totalAge = myCustomers.reduce((acc, customer) => acc + customer.age, 0);
const average = totalAge / myCustomers.length
console.log(average);

console.log(myCustomers.find((c) => c.location === "Ibadan"));

// get a new array containing all the purchases of all customers 
const allPurchases = myCustomers.map((c) => c.purchase)
console.log(allPurchases);

// get all customers with a minimum of 6000 purchase amount
const purchaseAmount = myCustomers.filter((customer) => customer.purchase >= 6000);
console.log(purchaseAmount);

// get the total purchase amount of all customers
const totalAmount = myCustomers.reduce((acc, customer) => acc + customer.purchase, 0);
console.log(totalAmount);

// get the average purchase for the last three customers
const lastThreeCustomers = myCustomers.slice(2).reduce((acc, customer) => acc + customer.purchase, 0);
const avg =lastThreeCustomers / 3
console.log(avg);

// get the total purchase amount for all customers in Ibadan
const ibadanTotalPurchase = myCustomers.filter((customer) => customer.location === "Ibadan").reduce((acc, customer) => acc + customer.purchase,0);
console.log(ibadanTotalPurchase);

const shoppingCart = [
    {title:"Jean", price: 100, qty: 2},
     {title: "Hat", price: 50, qty:4},
      {title:"Cream", price: 30, qty: 1},
      {title: "Duffel Bag", price:150, qty: 5},
      {title: "Balaclava", price: 70, qty: 3},
]
// jean costs $100
shoppingCart.map((item) => {
    console.log(`${item.title} costs $${item.price}`);  
});
const itemCost = shoppingCart.filter((item) => item.price > 70)
console.log(itemCost);

shoppingCart.map((item) => {
  console.log(`${item.title} costs $${item.price * item.qty}`);
});
const totalcost =shoppingCart.reduce((acc, item) => acc + item.price * item.qty, 0)
console.log("Total cost is " + totalcost);








