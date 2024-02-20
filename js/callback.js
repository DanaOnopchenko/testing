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

// const makeDish = function (sheffname, dish) {
//     console.log(`${sheffname} cook ${dish}`);
// }

// makeDish('mango','пирожок');
// makeDish('mango', 'омлет');
// makeDish('mango', 'чай');

// makeDish('mango','котлеты');
// makeDish('mango', 'soup');
// makeDish('mango', 'coffee');


// const makeSheff = function (name) {
//     const makeDish = function (dish) {
//         console.log(`${name} cook ${dish}`)
//     }
//     return makeDish
// };


// const mango = makeSheff('Mango');
// console.log(mango);

// mango('пирожок');
// mango('омлет');


// const poly = makeSheff('Poly');

// poly('coffee');



//  Example 1 - Коллбек функції
// Напишіть такі функції:

// createProduct(obj, callback) - приймає об'єкт товару без ID, а також колбек. Функція створює об'єкт товару, додаючи йому унікальний ідентифікатор як id і викликає колбек передаючи йому створений об'єкт.
// logProduct(product) - коллбек, що приймає об'єкт продукту і логує його в консоль
// logTotalPrice(product) - коллбек, що приймає об'єкт продукту і логує загальну вартість товару в консоль

// function createProduct(partialProduct, callback) {
//     const obj = {
//         id: Date.now(),
//         ...partialProduct,
//     }
//     callback(obj)
//     // console.log(obj);
// }

// function logProduct(product) {
// console.log(product);
// };

// function logTotalPrice({price,quantity}) {
//        return price * quantity;
// }

// createProduct({
//     name: '🍎',
//     price: 30,
//     quantity: 3,
// }, logProduct);

// createProduct({
//     name: '🍋',
//     price: 20,
//     quantity: 5,
// },logTotalPrice)


// Example 2 - Коллбек функції
// Додайте об'єкту account  методи з записом
// withdraw(amount, onSuccess, onError) та deposit(amount, onSuccess, onError) де перший параметр це сума операції, а другий і третій - колбеки.
// Метод withdraw викликає onError якщо amount більше TRANSACTION_LIMIT або this.balance та onSuccess в іншому випадку.
// Метод deposit  викликає onError якщо amount більше TRANSACTION_LIMIT або меньше або дорівнює нулю, та onSuccess в іншому випадку.

// const TRANSACTION_LIMIT = 1000;

// const account = {
//     username: "Jacob",
//     balance: 2000,
//     withdraw(amount, onSuccess, onError) {
//         if (amount > this.balance) {
//             onError('Мало коштів');
//         }
//         else if (amount > TRANSACTION_LIMIT) {
//             onError('перевищенно лиміт');
//         }
//         else {
//             this.balance -= amount;
//             onSuccess(`Успіх! списано ${amount}. Залишок ${this.balance}`)
//         }
//     },
//     deposit(amount, onSuccess, onError) {
//         if (amount <=0) {
//             onError('Значення має бути більше нуля')
//         }
//         else if (amount > TRANSACTION_LIMIT) {
//              onError('перевищенно лиміт');
//         } else {
//             this.balance += amount;
//             onSuccess(`Кошти успішно додані ${this.balance}`);
//         }
//     }
// }

// function handleSuccess(message) {
//     console.log(`Success ${message}`);
// }
// function handleError(message) {
//     console.log(`Error ${message}`);
// }


// account.withdraw(400, handleSuccess, handleError);
// account.withdraw(400, handleSuccess, handleError);
// account.withdraw(1500, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);
// account.withdraw(1500, handleSuccess, handleError);

// account.deposit(1700, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);


// Example 3 - Коллбек функції
// Напишіть функцію each(array, callback), яка першим параметром очікує масив, а другим - функцію, яка застосовується до кожного елемента масиву. Функція each повинна повернути новий масив, елементами якого будуть результати виклику колббека.