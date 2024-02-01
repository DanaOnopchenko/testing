// Example 1 - Основи об'єктів
// Напиши скрипт, який для об'єкта user послідовно:

// додає поле mood зі значенням 'happy'
// замінює значення hobby на 'skydiving'
// замінює значення premium на false
// виводить вміст об'єкта user у форматі ключ: виведи значення використовуючи Object.keys() і for...of

// const user = {
//     name: 'Mango',
//     age: 20,
//     hobby: 'html',
//     premium: true,
// };

// console.log(user);
// user.mood = 'happy';
// console.log(user);
// user.hobby = 'skydiving';
// console.log(user);
// user.premium = false;
// console.log(user);
// console.log(Object.keys(user));

// for (const key in user) {
//     console.log(`${key}- ${user[key]}`);

// }



// Example 2 - метод Object.values()
// Є об'єкт, де зберігаються зарплати нашої команди. Напишіть код для підсумовування всіх зарплат та збережіть результат у змінній sum. Повинно вийти 390. Якщо об'єкт salaries порожній, результат має бути 0.
// Приклад власних властивостей

// const salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130,
// };



// function getResult(obj) {
//     const values = Object.values(obj);
//     let sum = 0;
//     for (const value of values) {
//         sum += value;
//     }
//     return sum
// }
// console.log(getResult(salaries));




// Example 3 - Масив об'єктів
// Напишіть ф-цію calcTotalPrice(stones, stoneName), яка приймає масив об'єктів та рядок з назвою каменю. Ф-ція рахує і повертає загальну вартість каміння з таким ім'ям, ціною та кількістю з об'єкта


// const stones = [{
//         name: 'Смарагд',
//         price: 1300,
//         quantity: 4
//     },
//     {
//         name: 'Діамант',
//         price: 2700,
//         quantity: 3
//     },
//     {
//         name: 'Сапфір',
//         price: 400,
//         quantity: 7
//     },
//     {
//         name: 'Аквамарин',
//         price: 200,
//         quantity: 2
//     },
// ];

// function calcTotalPrice(stones, stoneName) {
//     for (const stone of stones) {
       
//         if (stoneName === stone.name) {
//             return stone.price * stone.quantity
//         }
//     }
// }

// console.log(calcTotalPrice(stones, 'Сапфір'));



// Example 4 - Комплексні завдання
// Напиши скрипт управління особистим кабінетом інтернет-банку. Є об'єкт account, в якому необхідно реалізувати методи для роботи з балансом та історією транзакцій.

/*
 * Типів транзакцій лише два.
 * Можна покласти чи зняти гроші з рахунку.
 */


/*
 * Кожна транзакція це об'єкт із властивостями: id, type та amount
 */
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date


// const Transaction = {
//     DEPOSIT: 'deposit',
//     WITHDRAW: 'withdraw',
// };

// const account = {
//     // поточний баланс рахунку
//     balance: 0,
//     // історія транзакцій
//     transaction: [
        
// // {amount: 4000, type: 'withdraw', id: 1706735951304}
//     ],
//     /*
//      * Метод створює та повертає об'єкт транзакції.
//      * Приймає суму та тип транзакції.
//      */
//     createTransaction(amount, type) {
//         const transaction = {
//             amount,
//             type,
//             id: Date.now(),
//         }
//         return transaction
//     },

//     /*
//      * Метод, що відповідає за додавання суми до балансу.
//      * Приймає суму транзакції.
//      * Викликає createTransaction для створення об'єкта транзакції
//      * після чого додає його в історію транзакцій
//      */
//     deposit(amount) {
//         const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
//         this.transaction.push(transaction);
//         this.balance += amount;
//     },
//     /*
//      * Метод, що відповідає за зняття суми з балансу.
//      * Приймає суму транзакції.
//      * Викликає createTransaction для створення об'єкта транзакції
//      * Після чого додає його в історію транзакцій.
//      *
//      * Якщо amount більше ніж поточний баланс, виводь повідомлення
//      * про те, що зняття такої суми не можливе, недостатньо коштів.
//      */
//     withdraw(amount) {
//         if (this.balance < amount) {
//             console.log('недостатньо коштів');
//             return;
//         }
//         const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
//         this.transaction.push(transaction);
//         this.balance -= amount;
//     },
//     /*
//      * Метод повертає поточний баланс
//      */
//     getBalance() {
//         alert(this.balance);
//     },
// /*
//      * Метод шукає та повертає об'єкт транзації по id
//      */
//     getTransactionDetails(id) {
//         for (const transaction of this.transaction) {
//             if (transaction.id === id) {
//                 console.log(transaction);
//             }
//         }
//     },
//     /*
//      * Метод повертає кількість коштів
//      * певного типу транзакції з усієї історії транзакцій
//      */
//     getTransactionTotal(type) {
//         console.log(type);
//         let total = 0;
//         for (const transaction of this.transaction) {
//             if (type === transaction.type) {
//                 console.log(transaction.type, transaction.amount);
//                 total += transaction.amount;
//             }
//         }
//         return total
//     },
// }

// account.createTransaction(1000, Transaction.DEPOSIT);

// account.deposit(1000);

// account.deposit(5000);

// account.withdraw(5000);
// account.withdraw(500);
// console.log(account);
// account.getTransactionDetails(1706735951304);


// console.log("total", account.getTransactionTotal(Transaction.DEPOSIT));

// account.getBalance();

//  Task 1 (Деструктуризація)
// Перепиши функцію так щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів.


//       obj
// function calcBMI({
//     height,
//     weight
// }) {
//     const numericWeight = Number(weight.replace(',', '.'));
//     const numericHeight = Number(height.replace(',', '.'));
//     return Number((numericWeight / numericHeight ** 2).toFixed(1)); // Math.pow(numericHeight,2 )
// }
// console.log(calcBMI({
//     weight: '88,3',
//     height: '1.75',
// }));
// console.log(calcBMI('68,3', '1.65'));
// console.log(calcBMI('118,3', '1.95'));

// function calcBMI({ weight, height }) {
//     const numericWeight = Number(weight.replace(',', '.'));
//     const numericHeight = Number(height.replace(',', '.'));
//     return Number((numericWeight / numericHeight ** 2).toFixed(1));
// };


// const obj = {
//     weight: '88,3',
//     height:'1,75',
// }
// console.log(calcBMI({
//     weight: '88,3',
//     height:'1,75',
// }));
// console.log(calcBMI({weight: '68,3',
//     height: '1.65'
// }));
//     console.log(calcBMI({weight: '118,3',
//     height: '1.95'
// }));


// ===========================================


//  Task 2 (Деструктуризація)
// Перепиши функцію так щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів.


// function printContactsInfo({ names, phones }) {
//     const nameList = names.split(',');
//     const phoneList = phones.split(',');
//     // console.log(nameList[0]); //1 2 3
//     // console.log(phoneList[0]); //1 2 3
//     for (let i = 0; i < nameList.length, i< phoneList.length; i += 1) {
//         console.log(`${nameList[i]}: ${phoneList[i]}`);
//     }
// }

// printContactsInfo({
//     names: 'Jacob,William,Solomon,Artem,Anna',
//     phones: '89001234567,89001112233,890055566377,890055566300',
// }
// );



// =======================================


//  Task 3 (Глибока деструктуризація)
// Перепиши функцію так щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів.



// https://uk.wikipedia.org/wiki/JSDoc




// /**
//  * Get object with info about company and return info string
//  * @param {Object} object
//  * @returns {String} Info string
//  */



// function getBotReport({ companyName, bots: {repairBots, defenceBots } }) {
//     console.log('companyName', companyName);
//     // console.log('bots', bots);
//     console.log('repairBots',repairBots);
//     console.log('defenceBots',defenceBots);
//     return `${companyName} has ${repairBots + defenceBots} bots in stock`;
// }


// console.log(getBotReport({
//     companyName: 'Cyberdyne Systems',
//     bots: {
//         repairBots: 150,
//         defenceBots:80,
//     },
//    }));


// =================================================

// Task 4 (Деструктуризація)
// Напишу функцію щоб вона приймала об'єкт параметрів із властивостями companyName і stock і виводила репорт про кількість товарів на складі будь-якої компанії.


// /**
//  * Get object with value and return info about stock
//  * @param {Object} object
//  * @returns {String} Info about stock in company
//  */

function getStockReport({ companyName, stock }) { 
    
    const values = Object.values(stock);
    let total = 0;
    for (const value of values) { 
        total += value
    }
    return `${companyName}  has ${total} items in stock`
};


console.log(
    getStockReport({
        companyName: 'Cyberdyne Systems',
        stock: {
            repairBots: 150,
            defenceBots: 50,
        },
    }),
); // "Cyberdyne Systems has 200 items in stock"

console.log(
    getStockReport({
        companyName: 'Belacci',
        stock: {
            shoes: 20,
            skirts: 10,
            hats: 5,
        },
    }),
); // "Belacci has 35 item in stock"


// ====================================================

//  Task 5 (spread)
// Доповни функцію createContact(partialContact) так, щоб вона повертала новий об'єкт контакту з доданою властивістю id, а також list зі значенням "default" якщо у partialContact немає такої властивості.
