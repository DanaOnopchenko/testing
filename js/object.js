// const playlist = {
//   name: 'Мой супер плейлист',
//   rating: 5,
//   tracks: ['трек-1', 'трек-2', 'трек-3'],
//   trackCount: 3,
//   changeName(newName) {
//     console.log(" this in changeName", this);
//     this.name = newName;
//   },
//   addTrack(track) {
//     this.tracks.push(track);
//     this.trackCount = this.tracks.length;
//   },
//   updateRating(newRating) {
//     this.rating = newRating;
//   },
// };


// console.log(playlist.tracks);
// console.log(playlist['rating']);

// playlist.tracks.push("Mango");

// console.log(playlist);
// playlist.changeName("new Name");
// console.log(playlist);
// playlist.addTrack('New track');
// console.log(playlist);
// playlist.updateRating(8);
// console.log(playlist);
// playlist.addTrack('Mango');
// console.log(playlist);


/*
 * Перебор через for...in и Object.keys|values|entries
 */

// const feedback = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// };

// const keys = Object.keys(feedback);
// console.log(keys);

// for (const key of keys) {
//   console.log(feedback[key]);
// }

// let totalFeadback = 0;


// const values = Object.values(feedback);
// console.log(values);

// for (const value of values) {
//   console.log(value);
// }


/*
 * Работа с коллекцией (массивом объектов)
 */
// const friends = [
//   { name: 'Mango', online: false },
//   { name: 'Kiwi', online: true },
//   { name: 'Poly', online: false },
//   { name: 'Ajax', online: false },
// ];

// console.table(friends);

// for (const friend of friends) {
//   console.log(friend.online);
//   friend.newprop = 777;
// }
// console.table(friends);

// const findfriendByName = function (allfriends, name) {
//   for (const friend of allfriends) {

//     console.log(friend.name);
//     if (friend.name === name) {
//       return "YES!!!"
//     }
//   }
//   return 'Sorry, we don`t find'
// };

// console.log(findfriendByName(friends, 'Poly'));
// console.log(findfriendByName(friends, 'Chelsy'));



/*
 * Получаем имена всех друзей
 */
// const getAllNames = function (allfriends) {
//   const names = [];
//   for (const friend of allfriends) {
//     console.log(friend.name);
//     names.push(friend.name)
//   }

//   return names
// };

// console.log(getAllNames(friends));


/*
 * Получаем имена только друзей которые онлайн
 */
// const getOnlineFriends = function (allfriends) {
//   const onlinefriends = [];

//   for (const friend of allfriends) {
//     console.log(friend.online);
//     console.log(friend.name);
//     if (friend.online) {
//       onlinefriends.push(friend.name);
//     }
//   }
//   return onlinefriends;
// }

// console.log(getOnlineFriends(friends));


// const getFriendsStatus = function (allfriends) {
//   console.log(allfriends);
//   const byStatusFriends = {
//     offline: [],
//     online:[],
//   }
  
//   for (const friend of allfriends) {
//     if (friend.online) {
//       byStatusFriends.online.push(friend);
//       continue
//     }
//         byStatusFriends.offline.push(friend)
//   }
//   return byStatusFriends
// }

// console.log(getFriendsStatus(friends));



// =========================================


/*
 * Работем с коллекцией товаров в корзине:
 * - getItems()
 * - add(product)
 * - remove(productName)
 * - clear()
 * - countTotalPrice()
 * - increaseQuantity(productName)
 * - decreaseQuantity(productName)
 *
 * { name: '🍎', price: 50 }
 * { name: '🍇', price: 70 }
 * { name: '🍋', price: 60 }
 * { name: '🍓', price: 110 }
 */

const cart = {
  items: [],
  getItems() {},
  add(product) {},
  remove(productName) {},
  clear() {},
  countTotalPrice() {},
  increaseQuantity(productName) {},
  decreaseQuantity(productName) {},
};