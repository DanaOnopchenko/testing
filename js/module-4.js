// function makePizza() {
//   return "Your pizza is being prepared, please wait.";
// }
// // Change code below this line

// const result = makePizza();
// const pointer = makePizza;

// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName, callback) {
  
//   return callback(pizzaName);
// }

// console.log(makeMessage("Royal Grand", makePizza));
// console.log(makeMessage("Ultracheese", deliverPizza))

// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });
// // Change code below this line


// makePizza("Ultracheese", function eatPizza(pizzaName) {
// console.log(`Delivering pizza ${pizzaName}.`);
// });

// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, makePizza, onOrderError ) {
//     if (this.pizzas.includes(pizzaName)) {
//       return makePizza(pizzaName)
//     }
//     return onOrderError(pizzaName);
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! There is no pizza with a name ${error} in the assortment.`;
// }



// console.log(pizzaPalace.order("Smoked", makePizza, onOrderError));
// console.log(pizzaPalace.order("Four meats", makePizza, onOrderError));
// console.log(pizzaPalace.order("Vienna", makePizza, onOrderError));
// console.log(pizzaPalace.order("Big Mike", makePizza, onOrderError))

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line
// orderedItems.forEach(element => {
//   totalPrice += element;
// });
//   // for (let i = 0; i < orderedItems.length; i += 1)
  

//   // Change code above this line
//   return totalPrice;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));


// task 6

// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line
//   numbers.forEach(element => {
//     if (element > value) {
//       filteredNumbers.push(element)
//     }
// });
  
//   // Change code above this line
//   return filteredNumbers;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20))

// task 7
// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line
//   firstArray.forEach(number => {
//     if (secondArray.includes(number)) {
//       commonElements.push(number)
//     }
//   })


  
//   return commonElements;
//   // Change code above this line
// }

// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]))

// TASK 8

// const calculateTotalPrice = (quantity, pricePerItem) => {
//   // Change code above this line
//   return quantity * pricePerItem;
// }

// console.log(calculateTotalPrice(5, 100))



// Task 9
// // Change code below this line
// const calculateTotalPrice = (quantity, pricePerItem) =>
//   quantity * pricePerItem;
  
// // Change code above this line
// console.log(calculateTotalPrice(8, 60))

// Task 10

// Change code below this line
// const calculateTotalPrice = orderedItems => {
//   let totalPrice = 0;

//   orderedItems.forEach(item => {
//     totalPrice += item;
//   });

//   return totalPrice;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]))




// Task 11

// Change code below this line
// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   numbers.forEach (number => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   // Change code above this line
//   return filteredNumbers;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3))

// Task 12

// const getCommonElements = (firstArray, secondArray) => {
//   const commonElements = [];

//   firstArray.forEach(element =>{
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });

//   // Change code above this line
//   return commonElements;
// }

// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]))

// Task 13

// function changeEven(numbers, value) {
//   // Change code below this line
//   const doubledNumbers = [];

//   numbers.forEach(number => {
//     if (number % 2 !== 0) {
//       doubledNumbers.push(number )
//     } if (number % 2 === 0) {
//       doubledNumbers.push(number + value)
//     }
//   })
//   return doubledNumbers;
 
// }
// console.log(changeEven([1, 2, 3, 4, 5], 10));
// console.log(changeEven([17, 24, 68, 31, 42], 100))


// Task 14

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// const planetsLengths = planets.map(planet => planet.length);

// console.log(planets);
// console.log(planetsLengths)

// Task 15

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const titles = books.map(book => book.title);
// console.log(titles)

// Task 16
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism"],
//   },
// ];
// // Change code below this line

// const genres = books.flatMap(book => book.genres);
// console.log(genres)

// Task 17
// Change code below this line
// const getUserNames = users => {
//   const allUsersNames = users.map(user => user.name);
//  return allUsersNames
//   };
//   // Change code above this line


// Task 22
// Change code below this line
const getUsersWithEyeColor = (users, color) => {

 getUsersWithEyeColor = users.filter(user => user.eyeColor === color)

};
// Change code above this line

console.log(getUsersWithEyeColor(users, "blue"))

color = "blue";

 
