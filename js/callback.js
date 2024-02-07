// const numbers = [5, 10, 15, 20, 25];

// const logMessage = (number, index) => {
//   console.log(`Індекс ${index}, значення ${number}`);
// };

// numbers.forEach(logMessage);

// Імперативний підхід
// const numbers = [1, 2, 3, 4, 5];
// const filteredNumbers = [];

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] > 3) {
//     filteredNumbers.push(numbers[i]);
//   }
// }

// console.log(filteredNumbers); // [4, 5]


// const filter = function (array, test) {
//   const filterArray = [];
//   for (const el of array) {
//     // const passed = test(el);
//     if (test(el)) {
//       filterArray.push(el)
//     }
//     // console.log(el);
//   }
//   return filterArray;
// }

// 1. надо передать функцию
// 2. функция получает элемент массива
// 3. если элемент массива удовлетворяет условию то функция вернет true
// 3. если элемент массива НЕ удовлетворяет условию то функция вернет false

// const callback1 = function (value) {
//   return value >= 3;
// }

// const callback2 = function (value) {
//   return value <= 5;
// }
// console.log(filter([1, 2, 3, 4, 5,], callback1));
// console.log(filter([1, 2, 3, 4, 5, 6, 7, 8,], callback2));

// const fruits = [
//     { name: 'apples', quantity: 200, isFresh: true },
//     { name: 'grapes', quantity: 150, isFresh: false },
//     { name: 'bananas', quantity: 100, isFresh: true },
// ];

// const getfruitsQuantity = function (fruits) {
//   return fruits.quantity >= 120;
// }
// console.log(filter(fruits,getfruitsQuantity));

// =====================================


