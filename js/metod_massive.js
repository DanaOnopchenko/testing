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


const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];

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


const playerIdToUpdate = 'player-3';
const updatedPlayers = players.map(player =>
    playerIdToUpdate === player.id ?
        {
            ...player,
            timePlayed: player.timePlayed + 100,
        } : player
);

console.table(updatedPlayers);
