
const productName = "droid";

const pricePerItem = "true";
console.log(productName)
console.log(pricePerItem)

// function includes(array, value) {
//   // Change code below this line
//   for (let i = 0; i < array.length; i += 1) {
//     if (array[i] === value)
//       return true;
//     }
//   return false;
//   }
  
// console.log(includes([1, 2, 3, 4, 5], 3));
// console.log(includes([1, 2, 3, 4, 5], 17));
// console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter"));
// console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus"));
// console.log(includes(["apple", "plum", "pear", "orange"], "plum"));
// console.log(includes(["apple", "plum", "pear", "orange"], "kiwi"));


// function includes(array, value) {
//   // Change code below this line
//   for (let i = 0; i < array.length; i += 1) {
//     if (array[i] === value) return true;
//   }
//   return false;
//   // Change code above this line
// }

// console.log(includes([1, 2, 3, 4, 5], 3));
// console.log(includes([1, 2, 3, 4, 5], 17));



// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line
//   if (apartment.hasOwnProperty(key)) {
//     keys.push(key);
//     values.push(apartment[key]);
//   }
//   // Change code above this line
// }
// console.log(keys);
// console.log(values);


// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
//   const keys =  Object.keys(object);
//   for (const key of keys) {
//       propCount += 1;
//   }
//         // Change code above this line
//     return propCount;
//   }

// console.log(countProps({ name: "Mango", age: 2 }));
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }))


// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);

// for (const key of keys) {
//   values.push(apartment[key]);
// }
// console.log(keys);
// console.log(values)

// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;
//   const keys = Object.keys(object);
//   for (const key of keys) {
//     propCount += 1;
//   }
//   return propCount;
//   // Change code above this line
// }

// console.log(countProps({ name: "Mango", age: 2 }));
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }))

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// // Change code below this line
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);
// console.log(keys);
// console.log(values);

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
//   const values = Object.values(salaries);
//   for (const value of values) {
//     totalSalary += value;
//   }
//   // Change code above this line
//   return totalSalary;
// }

// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }))



// const colors = [
//   {
//     hex: "#f44336",
//     rgb: "244,67,54"
//   },
//   {
//     hex: "#2196f3",
//     rgb: "33,150,243"
//   },
//   {
//     hex: "#4caf50",
//     rgb: "76,175,80"
//   },
//   {
//     hex: "#ffeb3b",
//     rgb: "255,235,59"
//   },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for (const color of colors) {
//   // console.log(color.hex);
// hexColors.push(color.hex)
//   // console.log(color.rgb)
//   rgbColors.push(color.rgb)
// };

//   // hexColors.push(value)
  

// console.log(hexColors);
// console.log(rgbColors)



// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this lineproducts
//   for (const product of products) {
//     if (product.name === productName) {
//       return product.price;
//         }
//   }
//   return null;
//   }


//   // Change code above this line

// console.log(getProductPrice("Radar"));
// console.log(getProductPrice("Grip"));
// console.log(getProductPrice("Scanner"));
// console.log(getProductPrice("Droid"));
// console.log(getProductPrice("Engine"));

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];
 
// function getAllPropValues(propName) {
//   // Change code below this line
//   let array = [];
//   for (const product of products) {
//     if (product[propName]) {
//       array.push(product[propName]);
// }
//   }
//   return array;
//   // Change code above this line
// }

// console.log(getAllPropValues("name"))

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Change code below this line
//   for (const product of products) {
//     if (product.name === productName) {
//       return product.price * product.quantity;
//     }
    //   }
    //   return 0
    //   // Change code above this line
    // }
    // console.log(calculateTotalPrice("Blaster"))


//   const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

//     const { yesterday, today, tomorrow } = highTemperatures;

// // Change code above this line
//     const meanTemperature = (yesterday + today + tomorrow) / 3;


// console.log(meanTemperature);
    
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// const { yesterday, today, tomorrow, icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" } = highTemperatures;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// console.log(highTemperatures);
// console.log(icon)


// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// Change code below this line

// const highToday = forecast.today.high;
// const lowToday = forecast.today.low;
// const todayIcon = forecast.today.icon;

// const highTomorrow = forecast.tomorrow.high;
// const lowTomorrow = forecast.tomorrow.low;
// const tomorrowIcon = forecast.tomorrow.icon;

// const {
//   today: { high: highToday, low: lowToday,
//   icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" },
//   tomorrow: { high: highTomorrow, low: lowTomorrow,
//     icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" } } = forecast;

// console.log(highTomorrow);

// Change code below this line
// function calculateMeanTemperature(forecast) {
//   const { today: { low: todayLow, high: todayHigh}, tomorrow: {low: tomorrowLow, high: tomorrowHigh} } = forecast;
//   // const todayLow = forecast.today.low;
//   // const todayHigh = forecast.today.high;
//   // const tomorrowLow = forecast.tomorrow.low;
//   // const tomorrowHigh = forecast.tomorrow.high;

//   // Change code above this line
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }
// console.log(calculateMeanTemperature({ today: { low: 28, high: 32 }, tomorrow: { low: 25, high: 29 } }));
// console.log(calculateMeanTemperature({ today: { low: 37, high: 40 }, tomorrow: { low: 33, high: 38 } }));

// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max(... scores);
// const worstScore = Math.min(...scores);

// console.log(bestScore);
// console.log(worstScore);

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [...firstGroupScores, ...secondGroupScores, ... thirdGroupScores];
// const bestScore =Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// console.log(allScores);
// console.log(bestScore);
// console.log(worstScore);

// const defaultSettings = {
//   theme: "light",
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Change code below this line
// const finalSettings = { ...defaultSettings, ...overrideSettings };

// console.log(finalSettings)

// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line
//   return { completed, category, priority, ...data}
//   // Change code above this line
// }
// console.log(makeTask({}));
// console.log(makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }));
// console.log(makeTask({ category: "Finance", text: "Take interest" }));
// console.log(makeTask({ priority: "Low", text: "Choose shampoo" }));
// console.log(makeTask({ text: "Buy bread" }))

// // Change code below this line
// function add(...args) {
//   let total = 0;
//   for (const arg of args) {
//     total += arg;
//   }
//   return total;
//   // Change code above this line
// }
// console.log(add(15, 27));

// function addOverNum(...args) {
//   let total = 0;
//   const findMaxNum = args[0];
  
//    for (let i = 0; i < args.length; i += 1) {
//      if (args[i] > findMaxNum) {
//       total += args[i];
//     }
//       }
//   return total;
//   // Change code above this line
// }
// console.log(addOverNum(50, 15, 27));
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));

// Change code below this line
// function findMatches(firstNums,...secondNums) {
//   const matches = [];
//   // Don't change this line
//   for (const el of firstNums){
//      if (secondNums.includes(el)) {
//     matches.push(el)
//   }
//   }
 
//   // Change code above this line
//   return matches;
// }
// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));
// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));
// console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41))


// const bookShelf = {
//   // Change code below this line
//   books: ["The last kingdom", "The guardian of dreams"],
//   getBooks() {
//     return "Returning all books";
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   removeBook(bookName) {
//     return `Deleting book ${bookName}`;
//   },
//   updateBook(oldName, newName) {
//     return `Updating book ${oldName} to ${newName}`;
//   }
//   // Change code above this line
// };
// console.log(bookShelf.addBook("Haze"));
// console.log(bookShelf.removeBook("Red sunset"));
// console.log(bookShelf.updateBook("Sands of dune", "Dune"))ж

// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     // Change code below this line
//     const bookIndex = this.books.indexOf(oldName);
//     this.books.splice(bookIndex, 1, newName);
     
//     // Change code above this line
//   },
// };

// bookShelf.updateBook("Haze", "Dune");

// console.log(bookShelf)

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   addPotion(potionName) {
//     // Change code below this line

// return this.potions.push(potionName)

//     // Change code above this line
//   },
// };
// atTheOldToad.addPotion("Invisibility");
// atTheOldToad.addPotion("Power potion");
// console.log(atTheOldToad)

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     // Change code below this line
//     const nameIndex = this.potions.indexOf(potionName);
//     this.potions.splice(nameIndex, 1);


//     // Change code above this line
//   },
// };
// atTheOldToad.removePotion("Dragon breath");
// atTheOldToad.removePotion("Speed potion")
// console.log(atTheOldToad);

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   updatePotionName(oldName, newName) {
//     // Change code below this line
//     const nameIndex = this.potions.indexOf(oldName);
//     this.potions.splice(nameIndex, 1, newName);


//     // Change code above this line
//   },
// };

// atTheOldToad.updatePotionName("Dragon breath", "Polymorth");
// atTheOldToad.updatePotionName("Stone skin", "Invisibility");
// console.log(atTheOldToad)

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },

//   addPotion(newPotion) {
//     for (const potion of this.potions) {
//       if (potion.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }
//     this.potions.push(newPotion)
//     return this.potions
//   },

//   removePotion(potionName) {
      
//     for (let i = 0; i < this.potions.length; i += 1) {
//       if (this.potions[i].name === potionName) {
//         this.potions.splice(i, 1);
//         return;
        
//       }
//     }
//     return `Potion ${potionName} is not in inventory!`;
//   },



//  updatePotionName(oldName, newName) {
//     // const potionIndex = this.potions.indexOf(oldName);

//     // if (potionIndex === -1) {
//     //   return `Potion ${oldName} is not in inventory!`;
//     // }

//     // this.potions.splice(potionIndex, 1, newName);
//    for (const el of this.potions) { 
//      if (el.name === oldName) { 
//        el.name = newName
//        return;
//      }
//    }

// //    for (const el of this.potions) {
// // //         //     if (el.name === oldName) {
// // //         //         el.name = newName
// // //         //         return;
// // //         //     }
   
//   },
//   // Change code above this line

// };
// atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion")
//   console.log(atTheOldToad)