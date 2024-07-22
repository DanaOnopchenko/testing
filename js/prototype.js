
/*
 * Основы ООП: класс, экземпляр (объект), интерфейс
 */
/*
 * Функции-конструкторы
 * - Именование
 * - Оператор new
 * - Свойство Function.prototype
 */

// const Car = function ({brend, model, price } = {}) {
//      // 2. Функция вызывается в контексте созданного объекта,
//   //    то есть в this записывается ссылка на него
//     // this.a = value;
//     this.brend = brend;
//     this.model = model;
//     this.price = price;
    
//  // 3. В свойство this.__proto__ записывается ссылка на обьект Car.prototype
//   //    тоесть Car.prototype это ПРОТОТИП будущего обьекта (экземпляра)

//   // 4. Ссылка на обьект возвращается в место вызова new Car
// };
 
// Car.prototype.changePrice = function (newPrice) {
//     this.price = newPrice;
// }
// // Car.logInfo = function (carObj) {
// //     console.log(`Car.logInfo -> carObj`,carObj);
// // }
 
// // 1. Если функция вызывается через new, создаётся пустой объект
// const myCar = new Car({
//     brend: 'Audi',
//     model: 'Q3',
//     price:'35000',
// });
// console.log('My car', myCar);



// 1. У каждого обьекта есть свойство __proto__
// 2. В этом свойстве лежит ссылка на его ПРОТОТИП, то есть другой обьект
// 3. При создании литера обьекта, в свойство __proto__ записывается ссылка на Функция.prototype
// 4. Функция-конструктор это просто функция :)
// 5. Всю магию делает оператор new
// 6. Если функция вызывается через new, создаётся пустой объект
// 7. Функция вызывается в контексте созданного объекта
// 8. В свойство this.__proto__ записывается ссылка на обьект Функция.prototype
// 9. Ссылка на обьект возвращается в место вызова new Фунукция()


// ===========================================

/*
 * Классы
 * 🐷 - объявление
 * 🐷 - конструктор
 * 🐷 - методы
 * 🐷 - static
 * 🐷 - приватные свойства
 * 🐷 - синтаксис публичных свойства и методы классов
 * 🐷 - геттеры и сеттеры
 */


// class Car1 {
//     static description = 'Класс описывающий автомобиль';
//     static logInfo(carObj) {
//         console.log('Car.logInfo -> carObj', carObj);
//     }
//     #test = 'test';
//     constructor({ brend, model, price } = {}) {
//         this.brend = brend;
//         this._model = model;
//         this._price = price;
//     }

//     changePrice(newPrice) {
//         this.price = newPrice;
//     }

//     updateModal(newModel) {
//         this.model = newModel;
//     }
// }
// console.dir(Car1);

// const carInstance = new Car1({
//     brend: 'Audi',
//     model: 'Q3',
//     price:'35000',

// })
// Car1.logInfo(carInstance)




