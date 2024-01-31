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


const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
};

const account = {
    // поточний баланс рахунку
    balance: 0,
    // історія транзакцій
    transaction: [
        
// {amount: 4000, type: 'withdraw', id: 1706735951304}
    ],
    /*
     * Метод створює та повертає об'єкт транзакції.
     * Приймає суму та тип транзакції.
     */
    createTransaction(amount, type) { 
        const transaction = {
            amount,
            type,
            id: Date.now(),
        }
        return transaction
    },

    /*
     * Метод, що відповідає за додавання суми до балансу.
     * Приймає суму транзакції.
     * Викликає createTransaction для створення об'єкта транзакції
     * після чого додає його в історію транзакцій
     */
    deposit(amount) { 
        const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
        this.transaction.push(transaction);
        this.balance += amount;
    },
    /*
     * Метод, що відповідає за зняття суми з балансу.
     * Приймає суму транзакції.
     * Викликає createTransaction для створення об'єкта транзакції
     * Після чого додає його в історію транзакцій.
     *
     * Якщо amount більше ніж поточний баланс, виводь повідомлення
     * про те, що зняття такої суми не можливе, недостатньо коштів.
     */
    withdraw(amount) { 
        if (this.balance < amount) { 
            console.log('недостатньо коштів');
            return;
        }
        const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
        this.transaction.push(transaction);
        this.balance -= amount;
    },
    /*
     * Метод повертає поточний баланс
     */
    getBalance() { 
        alert(this.balance);
    },
/*
     * Метод шукає та повертає об'єкт транзації по id
     */
    getTransactionDetails(id) { 
        for (const transaction of this.transaction) { 
            if (transaction.id === id) { 
                console.log(transaction);
            }
        }
    },
    /*
     * Метод повертає кількість коштів
     * певного типу транзакції з усієї історії транзакцій
     */
    getTransactionTotal(type) { 
        console.log(type);
        let total = 0;
        for (const transaction of this.transaction) { 
            if (type === transaction.type) { 
                console.log(transaction.type, transaction.amount);
                total += transaction.amount;
            }
        }
        return total
    },
}

account.createTransaction(1000, Transaction.DEPOSIT);

account.deposit(1000);

account.deposit(5000);

account.withdraw(5000);
account.withdraw(500);
console.log(account);
account.getTransactionDetails(1706735951304);


console.log("total", account.getTransactionTotal(Transaction.DEPOSIT));

account.getBalance();