// OBJECTS- {key: value, key2: value2}
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 45,
  isMarried: "true",
  friends: ["Jane", "Peter", "Mark"],
  job: "Teacher",
  location: {
    street: "Vineyard",
    area: "Lekki",
    city: "Lagos",
    zip: 100011,
    geolocation: {
      lat: 23.46,
      lng: 45.78,
    },
  },
};
// getting properties from an object
// dot notation objName.propertyName and bracket notation objName["propertyName"]
console.log(person.age);
console.log(person.lastName);
console.log(person["isMarried"]);
console.log(person["friends"]);
// i live at Vineyard estate, Lekki Lagos
console.log(
  `I live at ${person.location.street} estate, ${person["location"]["area"]}`
);
// adding a new property to an object
person.workplace = "Apollo Schools";
console.log(person);
person.location.landmark = "city mall";
console.log(person);
// removing property - delete
delete person.job;
console.log(person);
// object methods- developer writes the function
// function declaration (this-refers to the object itself)
// that user welcome username or log in to continue
const user = {
  username: "ade001",
  email: "ade@google.com",
  profilePic: "image",
  age: 25,
  isLoggedIn: true,
  isVerified: true,
  posts: ["Nigeria just get as e be", "I love food"],
  welcomeUser: function () {
    return this.isLoggedIn ? `Welcome ${this.username}` : "log in to continue";
  },
  verifyUser: function () {
    return this.isVerified
      ? `Verification successful`
      : "please verify your account";
  },
};
console.log(user.welcomeUser());
console.log(user.verifyUser());

// write an object method to verify user
const book = {
  tittle: "Half of a yellow Sun",
  author: "Chiamanda Adichie",
  yearPublished: 1995,
  rating: 4.5,
  similarAuthors: ["Uju Oche", "Tailor Isreal", "Mark Zube"],
  price: 2000,
  genre: "fictional",
  description: function () {
    return `The book titled ${this.tittle} cost $${this.price} and it is a ${this.genre} Novel`;
  },
  recommendBook: function () {
    return this.rating > 3.5 ? `This book is Recommended` : `Not Recommended`;
  },
};
console.log(book.description());
console.log(book.recommendBook());

// object.keys, object.values, object.entries
const transactions = {
  amount: 4000,
  date: "16/03/2025",
  charges: 25,
  refNum: "tranx-12343535478898",
};
console.log(Object.keys(transactions));
console.log(Object.values(transactions));
console.log(Object.entries(transactions));

const match = {
  teamA: "Wolfburg",
  teamB: "Lecee",
  teamAScore: 3,
  teamBScore: 7,
  duration: 96,
  corners: 12,
  numOfSubsUsed: 7,
  fouls: 14,
  stadium: "Wembley",
  weather: "Snowy",
  winner: function () {
    if (this.teamAScore > this.teamBScore) {
      return `${this.teamA} won with a score ${this.teamAScore}`;
    } else if (this.teamAScore < this.teamBScore) {
      return `${this.teamB} won with a score ${this.teamBScore}`;
    } else `It is a Draw`;
  },
  overview: function () {
    return `The match between ${this.teamA} and ${this.teamB} was played at ${this.stadium} in a ${this.weather} condition`;
  },
};
console.log(match.winner());
console.log(match.overview());
// OBJECT destructuring - allows us to pick one than one property at a go
const{ teamA, fouls,stadium, corners} = match;
console.log(fouls, stadium, corners);

const property = {
    name: "Exquisite Villa",
    rent : "2.3M/year",
    bedrooms : 7,
    bathroom: 10,
    cautionFee: 5000,
    legalFee: 4000,
    facilities: ["pool","sauna",'theatre',"gym"],
    location : {
        area: "Gbagada",
        city: "Lagos",
        num: 45,
        street: "Charly Boy",
        geo: {
            lat: 100.27,
            lng: 45.78,

        },
    },
};
const {
    name, rent, location:{street, city, geo:{lng}}   
} = property;

const product = {
    price: 9.99,
    discount:7.17,
};
const {price, discount} = product;
let newPrice = price - (discount / 100) * price;
console.log(newPrice.toFixed(2));


