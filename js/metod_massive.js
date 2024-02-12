/*
 * Array.prototype.forEach(callback(currentValue, index, array), thisArg)
 * - Поэлементо перебирает оригинальный массив
 * - Ничего не возвращает
 * - Заменяет классический for, если не нужно прерывать цикл
 */

// const numbers = [5, 10, 15, 20, 25];

// numbers.forEach(function (number, index, array) {
//     console.log('Number ', number);
// })

/*
 * Array.prototype.map()
 * - Поэлементо перебирает оригинальный массив
 * - Не изменяет оригинальный массив
 * - Возвращает новый массив такой же длины
 */

// const numbers = [5, 10, 15, 20, 25];
// const doubleNum = numbers.map(number => number * 2);
     
// console.log('doubleNum', doubleNum);
// console.log(numbers);


// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
//   { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
//   { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
// ];

// const playersnames = players.map(player => player.name);

// const playersId = players.map(player => player.id)

// console.log(playersnames);
// console.log(playersId);

// const res = players.map(({ name,online}) => {
//     return {
//         name,
//         online,
//     }
// })

// console.log(res);

// const updatedPlayers = players.map(player =>
//    ({  ...player,
//         points: player.points *1.2,
//     })
// );

// console.table(updatedPlayers);


// ===========================================


// const playerIdToUpdate = 'player-3';
// const updatedPlayers = players.map(player => {
//     console.log(player.id);
//     if (playerIdToUpdate === player.id) {
//         console.log("To find this");
//         return {
//             ...player,
//             timePlayed: player.timePlayed + 100,
//         }
//     }
//     return player
// });


// const playerIdToUpdate = 'player-3';
// const updatedPlayers = players.map(player =>
//     playerIdToUpdate === player.id ?
//         {
//             ...player,
//             timePlayed: player.timePlayed + 100,
//         } : player
// );

// console.table(updatedPlayers);

// =========================================================
/*
 * Array.prototype.filter()
 * - Поэлементо перебирает оригинальный массив
 * - Возвращает новый массив (с элементами или пустой)
 * - Добавляет в возвращаемый массив элементы которые удовлетворяют условию коллбек-функции
 *    - если коллбек вернул true элемент добавляется в возвращаемый массив
 *    - если коллбек вернул false элемент НЕ добавляется в возвращаемый массив
 */

// const numbers = [5, 10, 15, 20, 25];

// const filterNumbers = numbers.filter((number) => {
//   console.log(number);
//   return number <= 15;
// })
// console.log(filterNumbers);

// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
//   { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
//   { id: 'player-5', name: 'Chelsy', timePlayed: 280, points: 48, online: true },
// ];

// const onlinePlayers = players.filter((player) => player.online);

// console.log(onlinePlayers);

// const offlinePlayers = players.filter((player) => !player.online);

// console.log(offlinePlayers);

// const hardcorePlayers = players.filter((player) => player.timePlayed > 250);

// console.log(hardcorePlayers);

// =======================================

/*
 * Array.prototype.find()
 * - Поэлементо перебирает оригинальный массив
 * - Возвращает первый элемент удовлетворяющий условию или undefined
 */

// const numbers = [5, 10, 15, 20, 25];

// const findNumbers = numbers.find(number => number > 10);

// console.log(findNumbers);

// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
//   { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
//   { id: 'player-5', name: 'Chelsy', timePlayed: 280, points: 48, online: true },
// ];

// const playerIdToFind = players.find(({id}) => id === 'player-4');

// console.log(playerIdToFind);

// const playerNameToFind = 'Ajax';

// const nameToFind = players.find((player) => player.name === playerNameToFind);

// console.log(nameToFind);
// ===================================

/*
 * Array.prototype.every()
 * - Поэлементо перебирает оригинальный массив
 * - Возвращает true если все элементы массива удовлетворяют условию
 */

// const isAllOnline = players.every(player => player.online);

// console.log(isAllOnline);

// ====================================

/*
 * Array.prototype.some()
 * - Поэлементо перебирает оригинальный массив
 * - Возвращает true если хотя бы один элемент массива удовлетворяет условию
 */

// const isAnyOnline = players.some(player => player.online);

// console.log(isAnyOnline);
//

// ========================================

/*
 * Array.prototype.reduce()
 * - Поэлементо перебирает оригинальный массив
 * - Возвращает что угодно 🤯
 * - Заменяет всё на свете, но использовать нужно с умом
 */

// const numbers = [5, 10, 15, 20, 25];

// const total = numbers.reduce((acc,number) => {
//   return acc + number ;
// }, 0
// )

// console.log(total);

// const salary = {
//   mango: 100,
//   poly: 50,
//   ajax: 150,
// };

// const totalSalary = Object.values(salary).reduce((total, value) => {
//   return total + value;
// },0)

// console.log(totalSalary);

// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
//   { id: 'player-3', name: 'Kiwi', timePlayed: 230, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
//   { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
// ];

// const totalTimePlayers = players.reduce((totalTime, player) =>
// totalTime + player.timePlayed, 0)

// console.log(totalTimePlayers);

// const cart = [
//   { label: 'Apples', price: 100, quantity: 2 },
//   { label: 'Bananas', price: 120, quantity: 3 },
//   { label: 'Lemons', price: 70, quantity: 4 },
// ];

// const totalAlmount = cart.reduce(
//   (total, { price, quantity }) => total + price * quantity,
// 0,)

// console.log(totalAlmount);


/*
 * Собираем все теги из твитов
 */

const tweets = [
  { id: '000', likes: 5, tags: ['js', 'nodejs'] },
  { id: '001', likes: 2, tags: ['html', 'css'] },
  { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
  { id: '003', likes: 8, tags: ['css', 'react'] },
  { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
];

const allTags = tweets.reduce((tags,tweet) => {
  tags.push(...tweet.tags)
  return tags

  // return [...tags,...tweet.tags]
}, [])
 
console.log(allTags);


/*
 * Ведём статистику тегов
 */

// const tagsStats = allTags.reduce((acc,tag) => {
 
//   if (acc[tag]) {
//     acc[tag] += 1;

//     return acc;
//   }
//   acc[tag] = 1;
//   return acc
// }, {})

const tagsStats = allTags.reduce((acc,tag) => { 
 
  if (acc[tag]) { 
    acc[tag] += 1;

    // return acc;
    return {
      ...acc,
      [tag]:acc.tag+1
    }
  }
  acc[tag] = 1;
  // return acc
  return {
    ...acc,
    [tag]:1
  }
}, {})

console.log(tagsStats);

// если свойство с ключом tag есть. увеличить его значение на 1
// если свойствоства нет с таким ключом что в tag, сделать и записать 1

