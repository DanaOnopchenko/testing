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


// function each(array, callback) {
//     for (const el of array) {
//         console.log(callback(el));
//     }
// }

// each([64, 49, 36, 25, 16], function (value) {
//     return value * 2;
// })

// each([64, 49, 36, 25, 16], function (value) {
//     return value - 10;
// });
    // each([64, 49, 36, 25, 16], function (value) {
    //     return Math.sqrt(value);
    // })
// each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.ceil(value);
// })

// each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.floor(value);
// })

// =========================================

// Example 4 - Стрілочні функції
// Виконайте рефакторинг коду за допомогою стрілочних функцій.

// function createProduct(partialProduct, callback) {
//     const product = {
//         id: Date.now(),
//         ...partialProduct
//     };
//     callback(product);
// }

// const createProduct=(partialProduct, callback) => {
//     const product = {
//         id: Date.now(),
//         ...partialProduct
//     };
//     callback(product);
// }

// const logProduct = product => console.log(product);

// const logTotalPrice = product => console.log(product.price * product.quantity);

// createProduct({
//     name: '🍎',
//     price: 30,
//     quantity: 3
// }, logProduct);

// createProduct({
//     name: '🍋',
//     price: 20,
//     quantity: 5
// }, logTotalPrice);

//  Example 5 - Стрілочні функції
// Виконайте рефакторинг коду за допомогою стрілочних функцій.

// const each = (array, callback) => {
//     const newArr = [];
//     for (const el of array) {
//         newArr.push(callback(el));
//     }
//     return newArr;
// }

// // console.log(each([64, 49, 36, 25, 16], value => value * 2));

// ===============================================

// / Example 6 - Метод forEach
// Виконайте рефакторинг коду, використовуючи метод forEach і стрілочні функції.

// const logItems = items=>
//     items.forEach((item, idx) => console.log(`${idx + 1} - ${item}`));
//     // for (let i = 0; i < items.length; i += 1) {
//     //    console.log(`${i + 1} - ${items[i]}`);
//     // }

 
// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

//  Example 7 - Метод forEach
// Виконайте рефакторинг коду, використовуючи метод forEach і стрілочні функції.

// const printContactsInfo = ({ names, phones })=> {
//         const nameList = names.split(',');
//     const phoneList = phones.split(',');
//     // for (let i = 0; i < nameList.length , i < phoneList.length; i+=1) {
//     //   console.log(`${nameList[i]}: ${phoneList[i]}`);
//     // }

//     nameList.forEach((el, idx) => {
//         console.log(`${el} - ${phoneList[idx]}`);
//      })
// }

//   printContactsInfo({
//     names: 'Jacob,William,Solomon,Artem',
//     phones: '89001234567,89001112233,890055566377',
//   });

// Example 8 - Метод forEach
// Виконайте рефакторинг коду, використовуючи метод forEach і стрілочні функції.


const calсulateAverage = (...args) => { 
    let total = 0;
    args.forEach(num=>total+=num)
    // for (let i = 0; i < args.length; i++) {
    //     total += args[1];
    // }
    return total/args.length
}

console.log(calсulateAverage(1, 2, 3, 4)); // 2.5
console.log(calсulateAverage(14, 8, 2)); // 8
console.log(calсulateAverage(27, 43, 2, 8, 36)); // 23.2