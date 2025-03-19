// MATH object
// sqrt root,pow, round, ceil, floor, trunc, random
console.log(Math.sqrt(25));
console.log(Math.pow(10, 2));
console.log(10 ** 2);
console.log(Math.round(1.09));
console.log(Math.ceil(2.05));
console.log(Math.floor(3.9));
console.log(Math.trunc(11.99));
// math random
console.log(Math.random());

console.log(Math.trunc(Math.random() * 11));
// 1-10
console.log(Math.floor(Math.random() * 10 + 1));
// raffle draw car
const customers = ["Kelvin","John","Khalid","David","Tom","Paul"];
const randomWinner = () => {
    let randomWinner = Math.floor(Math. random() * customers. length)
    return customers[randomWinner];

}
console.log(randomWinner());
// min and max
console.log(Math.min(34, 4, 56, 9.7));
console.log(Math.max(34, 4, 56, 9.7));











