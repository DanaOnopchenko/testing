// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];

//   return fruits.includes(fruit); // Change this line
// }

// console.log(checkFruit("plum"));
// console.log(checkFruit("mandarin"));
// console.log(checkFruit("pear"));
// console.log(checkFruit("Pear"));
// console.log(checkFruit("apple"))

// function getCommonElements(array1, array2) {
//   // Change code below this line
//     let newElements = [];
//     for (let i = 0; i < array1.length; i += 1) {
//         let newArray = array1[i];
//         if (array2.includes(newArray))
//             newElements.push(newArray)
//     }
      
// return newElements
//  // Change code above this line
// }
// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//     let totalPrices = order;
//     for (const totalPrice of totalPrices) {
//         total += totalPrice;
//     }
// //   for (let i = 0; i < order.length; i += 1) {
// //     total += order[i];
// //   }

//   // Change code above this line
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
// console.log(calculateTotalPrice([]));

function filterArray(numbers, value) {
  // Change code below this line
    const filteredNumbers = [];
   
    for (let number of numbers) {
        if (number > value) {
            filteredNumbers.push(number);

        }
    }
  return filteredNumbers;
  // Change code above this line
}
console.log(filterArray([1, 2, 3, 4, 5], 3));
console.log(filterArray([1, 2, 3, 4, 5], 4));
console.log(filterArray([1, 2, 3, 4, 5], 5));
console.log(filterArray([12, 24, 8, 41, 76], 38));
console.log(filterArray([12, 24, 8, 41, 76], 20));