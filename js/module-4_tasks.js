
// task 1
// function makePizza() {
//   return "Your pizza is being prepared, please wait.";
// }
// // Change code below this line

// const result = makePizza();
// const pointer = makePizza;

// console.log(result);
// console.log(pointer);

// task 2

// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// // function makeMessage(pizzaName,callback) {
// //   return callback(pizzaName);
// // }

// const makeMessage =(pizzaName,callback) => callback(pizzaName);

// console.log(makeMessage("Royal Grand", makePizza));
// console.log(makeMessage("Ultracheese", deliverPizza));

// ===== Task 3 =======================

// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });
// // Change code below this line

// makePizza("Ultracheese", function eatPizza(pizzaName) {
//   console.log(`Eating pizza ${pizzaName}.`);
// })
//   ;


// ===== Task 4 ================
// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
  
//   order(pizzaName, makePizza, onOrderError) {
//     if (this.pizzas.includes(pizzaName)) {
//       return makePizza(pizzaName);
//     } else {
//       return onOrderError(`There is no pizza with a name ${pizzaName} in the assortment.`);
//     }
  
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// console.log(pizzaPalace.order("Smoked", makePizza, onOrderError));
// console.log(pizzaPalace.order("Big Mike", makePizza, onOrderError));
// console.log(pizzaPalace.order("Four meats", makePizza, onOrderError));
// console.log(pizzaPalace.order("Vienna", makePizza, onOrderError));

// ========= Task 5   ============

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line

//     orderedItems.forEach(item => totalPrice += item);

//   // Change code above this line
//   return totalPrice;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

// ========= Task 6====================

// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line
//   numbers.forEach(num => {
//     if (num > value) {
//       filteredNumbers.push(num)
//     }
//   })
//   // for (let i = 0; i < numbers.length; i += 1) {
//   //   if (numbers[i] > value) {
//   //     filteredNumbers.push(numbers[i]);
//   //   }
//   // }

//   // Change code above this line
//   return filteredNumbers;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 20));
// console.log(filterArray([12, 24, 8, 41, 76], 38));


// ==========Task 7 ==========

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line
//   firstArray.forEach(num => {
   
//     if (secondArray.includes(num)) {
//       commonElements.push(num)
//     }
//   })
//   // for (let i = 0; i < firstArray.length; i += 1) {
//   //   if (secondArray.includes(firstArray[i])) {
//   //     commonElements.push(firstArray[i]);
//   //   }
//   // }
//   return commonElements;
//   // Change code above this line
// }

// console.log(getCommonElements([1, 2, 3], [2, 5]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));

// ====== task 8==============

// const calculateTotalPrice= (quantity, pricePerItem) => quantity * pricePerItem;

// console.log(calculateTotalPrice(5, 100));


// ====== Task 9 ==============

// Change code below this line
// const calculateTotalPrice = (quantity, pricePerItem) =>
//    quantity * pricePerItem;

// // Change code above this line

// console.log(calculateTotalPrice(5, 100));

// ===== Task 10 =======

// // Change code below this line
// const  calculateTotalPrice = orderedItems => {
//   let totalPrice = 0;
//   orderedItems.forEach(item => totalPrice += item);

//    return totalPrice;
// }
// // Change code above this line

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));

// ===== TASK11 ========

// Change code below this line
// const  filterArray= (numbers, value)=> {
//   const filteredNumbers = [];

//   numbers.forEach( number => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   // Change code above this line
//   return filteredNumbers;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([12, 24, 8, 41, 76], 20));

// ====== TASK 12 ======

// // Change code below this line
// const getCommonElements = (firstArray, secondArray)=> {
//   const commonElements = [];
//   firstArray.forEach(element =>{
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });
//   // Change code above this line
//   return commonElements;
// }

// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));

// ======== TASK 13 ===========

// function changeEven(numbers, value) {
  

//   let total = [];
//   numbers.forEach(number => {
//     if (number % 2 !== 0) {
//       total.push(number);
//     } else if (number % 2 === 0){
//       total.push(number + value)
//     }
//   })
//    return total
// }

// console.log(changeEven([1, 2, 3, 4, 5], 10));
// console.log(changeEven([2, 8, 3, 7, 4, 6], 10));
// console.log(changeEven([44, 13, 81, 92, 36, 54], 100));
// console.log(changeEven([24,8,19,20,7,7,17,11,24,16,9,11,5,15,16,20,14,18], 18 ));

// ====== Task 14= =====

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// const planetsLengths = planets.map(planet =>planet.length);

// console.log(planetsLengths);

// ======= Task 15 ========

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
// Change code below this line

// const titles = books.map(book => book.title);

// console.log(titles);

//  task 16
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
// console.log(genres);


// Task 17 ====================

// // Change code below this line
// const getUserNames = users =>
//   users.map(user => user.name);
  
//   // Change code above this line



// const users =[
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
  
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   },
//    {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   },
// ];
// == Task 18 =========
// Change code below this line
// const getUserEmails = users => users.map(user => user.email);
// // Change code above this line
  
// console.log(getUserEmails(users));

// === Task 19 =======
// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line

// const evenNumbers = numbers.filter(number => number% 2===0);
// const oddNumbers = numbers.filter(number => number % 2 !== 0);

// console.log(evenNumbers);
// console.log(oddNumbers);

//  ===Task 20 ========

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];
// // Change code below this line
// const allGenres = books.flatMap(book => book.genres);
// const uniqueGenres = allGenres.filter((genres,idx,array)=> array.indexOf(genres)=== idx);

// console.log(allGenres);
// console.log(uniqueGenres);

// ==== Task 21 ===============

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

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";
// // Change code below this line

// const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);

// const booksByAuthor = books.filter(book => book.author === AUTHOR);

// console.log(topRatedBooks);
// console.log(booksByAuthor);

// ===== Task 22 ==============

// Change code below this line
// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
 
// ]
// const getUsersWithEyeColor = (users, color) => users.filter( user=> user.eyeColor === color);
// // Change code above this line

// ==== Task 23 ======
// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24
//   },
  
// ]

// // Change code below this line
// const getUsersWithAge = (users, minAge, maxAge) =>
//  users.filter(user => user.age>=minAge && user.age<=maxAge)
// // Change code above this line


// == Task 24 ============

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39
//   }
// ]

// // Change code below this line
// const getUsersWithFriend = (users, friendName) =>
//     users.filter(user => user.friends.includes(friendName));
    
//       ;
// // Change code above this line

// console.log(getUsersWithFriend(users,"Goldie Gentry"));

// === Task 25 ===================

// Change code below this line
// const getFriends = (users) => {
//     return users.flatMap(user => user.friends).filter((friend, idx, arr) => arr.indexOf(friend) === idx);
// }
    
   
// ;
// // Change code above this line
// console.log(getFriends(users));

// === Task 26 ==========

// // Change code below this line
// const getActiveUsers = users =>
//   users.filter(user =>user.isActive)
//       // users.filter(user=>user.isActive);
// // Change code above this line
// console.log(getActiveUsers(users));

// === Task 27======

// Change code below this line
// const getInactiveUsers = users =>
//    users.filter(user=>!user.isActive);
// // Change code above this line

// console.log(getInactiveUsers(users));

// ==== Task 28 ========

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
// ];
// const BOOK_TITLE = 'The Dream of a Ridiculous Man';
// const AUTHOR = 'Robert Sheckley';
// // Change code below this line

// const bookWithTitle = books.find(book =>book.title===BOOK_TITLE);
// const bookByAuthor = books.find(book => book.author === AUTHOR);

// console.log(bookWithTitle);
// console.log(bookByAuthor);

// ==== Task 29 ========

// Change code below this line

// const getUserWithEmail = (users, email) =>
//   users.find(user => user.email === email);
// ;
// // Change code above this line
// console.log(getUserWithEmail(users,"blackburndotson@furnigeer.com"));

// ==== Task 30 =====
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change code below this line

// const eachElementInFirstIsEven = firstArray.every(num=>num%2===0);
// const eachElementInFirstIsOdd = firstArray.every(num => num%2!==0);

// const eachElementInSecondIsEven = secondArray.every(num=>num%2===0);
// const eachElementInSecondIsOdd = secondArray.every(num => num%2!==0);

// const eachElementInThirdIsEven = thirdArray.every(num=>num%2===0);
// const eachElementInThirdIsOdd = thirdArray.every(num => num%2!==0);

// console.log(eachElementInFirstIsEven);
// console.log(eachElementInFirstIsOdd);


// console.log(eachElementInSecondIsEven);
// console.log(eachElementInSecondIsOdd);

// console.log(eachElementInThirdIsEven);
// console.log(eachElementInThirdIsOdd);

// ==== Task 31 ======

// // Change code below this line
// const isEveryUserActive = users =>
//    users.every(user=> user.isActive)
// ;
// // Change code above this line

// console.log(isEveryUserActive(users));


// ======= Task 32 =======

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change below this line

// const anyElementInFirstIsEven = firstArray.some(num => num%2===0);
// const anyElementInFirstIsOdd = firstArray.some(num => num%2!==0);

// const anyElementInSecondIsEven = secondArray.some(num => num%2===0);
// const anyElementInSecondIsOdd = secondArray.some(num => num%2!==0);

// const anyElementInThirdIsEven = thirdArray.some(num => num%2===0);
// const anyElementInThirdIsOdd = thirdArray.some(num => num%2!==0);

// console.log(anyElementInFirstIsEven);
// console.log(anyElementInFirstIsOdd);

// console.log(anyElementInSecondIsEven);
// console.log(anyElementInSecondIsOdd);

// console.log(anyElementInThirdIsEven);
// console.log(anyElementInThirdIsOdd);


// ===== Task 33 ============

// // Change code below this line
// const isAnyUserActive = users => users.some(user => user.isActive)
// // Change code above this line

// console.log(isAnyUserActive(users));


// ====== Task 34 =======
// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Change code below this line

// const totalPlayTime = playtimes.reduce((prevValue, number) => prevValue + number, 0);
// console.log(totalPlayTime);

// // Change code above this line
// const averagePlayTime = totalPlayTime / playtimes.length;

// console.log(averagePlayTime);

// === task 35 ======

// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line

// const totalAveragePlaytimePerGame = players.reduce((prevPlayTime, player) => {
//   return prevPlayTime + player.playtime/player.gamesPlayed
// }, 0);

// console.log(totalAveragePlaytimePerGame);

// ==== Task 36 =======

// Change code below this line

// const calculateTotalBalance = users =>
//   users.reduce((prevBalance, user) => prevBalance + user.balance, 0);
   
// // Change code above this line
// console.log(calculateTotalBalance(users));

// === task 37 =====

// // Change code below this line
// const getTotalFriendCount = users => users.reduce((prevue, user)=> prevue + user.friends.length,0);
// // Change code above this line

// console.log(getTotalFriendCount(users));


// ====== Task 38 ============

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
// ];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort();

// const alphabeticalAuthors = [...authors].sort();

// console.log(ascendingReleaseDates);
// console.log(alphabeticalAuthors);

// ==== Task 39 ========
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort((a,b)=> a-b);

// const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);

// console.log(ascendingReleaseDates);
// console.log(descendingReleaseDates);

// ===== Task 40 =========
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
//   "Howard Lovecraft",
// ];
// // Change code below this line

// const authorsInAlphabetOrder = [...authors].sort((a,b) => a.localeCompare(b));

// const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));

// console.log(authorsInAlphabetOrder);
// console.log(authorsInReversedOrder);

// ====== Task 41 ======

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

// const sortedByAuthorName = [...books].sort((a,b)=> a.author.localeCompare(b.author));

// const sortedByReversedAuthorName = [...books].sort((a,b)=> b.author.localeCompare(a.author));

// const sortedByAscendingRating = [...books].sort((a,b)=>a.rating-b.rating );

// const sortedByDescentingRating = [...books].sort((a,b)=>b.rating - a.rating);

// console.table(sortedByAuthorName);
// console.table(sortedByReversedAuthorName);
// console.table(sortedByAscendingRating);
// console.table(sortedByDescentingRating);


// ===== Task 42 ===============

// // Change code below this line
// const sortByAscendingBalance = users => users.sort((a,b)=>a.balance - b.balance);
// // Change code above this line

// console.table(sortByAscendingBalance(users));


// ===== Task 43 =============


// // Change code below this line
// const sortByDescendingFriendCount = users => [...users].sort((a, b) =>
// b.friends.length - a.friends.length);
// // Change code above this line

// console.table(sortByDescendingFriendCount(users));
//

// ======= Task 44 =============

// // Change code below this line
// const sortByName = users => [...users].sort((a,b)=> a.name.localeCompare(b.name));
// // Change code above this line

// console.table(sortByName(users));

// ======= Task 45 =============

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  {
    title: "The Dreams in the Witch House",
    author: "Howard Lovecraft",
    rating: 8.67,
  },
];
// const MIN_BOOK_RATING = 8;
// // Change code below this line


// const names = books.filter(book => book.rating > MIN_BOOK_RATING).map(book=>book.author).sort((a,b)=> a.localeCompare(b));

// console.log(names);

// ==== Task 46 =======
const users=
[
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male"
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female"
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male"
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female"
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
    isActive: true,
    balance: 3951,
    gender: "male"
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
    isActive: false,
    balance: 1498,
    gender: "male"
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female"
  }
]


// // Change code below this line
// const getNamesSortedByFriendCount = users =>[...users].sort((a,b)=>a.friends.length - b.friends.length).map(user=>user.name);
// // Change code above this line

// console.log(getNamesSortedByFriendCount(users))

// ===== Task 47 ======
// Change code below this line
// const getSortedFriends = users => users.flatMap(user=>user.friends).filter((friend,idx,arr)=> arr.indexOf(friend)=== idx).sort((a,b)=>a.localeCompare(b))
  
// // Change code above this line

// console.log(getSortedFriends(users));

// ===== GTask 48 =======

// Change code below this line
const getTotalBalanceByGender = (users, gender) => users.filter(user=> user.gender === gender).reduce((prev,user)=>prev + user.balance,0);
// Change code above this line

console.log(getTotalBalanceByGender(users,"male"));