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
  getItems() {
    return this.items;
  },
  add(product) {

    for (const item of this.items) { 
      if (product.name === item.name) { 
        item.quantity += 1;
        return
      }
    }
    const newProduct = {
      ...product,
      quantity: 1,
    }
    this.items.push(newProduct);
    
  },
  remove(productName) {
    for (let i = 0; i < this.items.length; i += 1) {
      const item = this.items[i];
      // console.log('this item',item);
      if (productName === item.name) {
        // console.log('Wow!!!', productName);
        this.items.splice(i, 1);
      }
    }
  },
  clear() {
    this.items = [];
  },
  
  countTotalPrice() {
    let countTotalPrice = 0;
    for (const item of this.items) {
          
      countTotalPrice += item.price * item.quantity;
    }
    return countTotalPrice;
  },

  increaseQuantity(productName) {
    // for (const item of this.items) {
    //   console.log('this item', item);
    //   if (productName === item.name) {
    //     console.log("Wow", productName);
    //     console.log(item.quantity);
       
    //     item.quantity += 1;
    //     return 'YES!!!'
    //   }

    //   // cart.add();
    // }
    // return 'Sorry, we don`t find';
  },
    decreaseQuantity(productName) {
      // for (let i = 0; i < this.items.length; i+=1) {
      //   // const element = array[index];
      //   const item = this.items[i];
      //   console.log(item.name);
      //   if (productName === item.name) { 
      //     item.quantity -= 1;
      //   } 
      // }
    },
};
  


console.log(cart.getItems());

cart.add({ name: '🍎', price: 50 });
cart.add({ name: '🍋', price: 60 });
cart.add({ name: '🍇', price: 70 });
cart.add({ name: '🍓', price: 110 });

console.table(cart.getItems());

cart.remove('🍇');

cart.add({ name: '🍓', price: 110 });

// cart.clear();
console.log(cart.getItems());

cart.add({ name: '🍇', price: 70 });
cart.add({ name: '🍇', price: 70 });
console.log("total price:",cart.countTotalPrice());
// cart.increaseQuantity('🍎');
// cart.increaseQuantity('🍇');

// cart.increaseQuantity({ name: '🍇', price: 70 });
cart.add({ name: '🍋', price: 60 });
cart.add({ name: '🍋', price: 60 });
// cart.decreaseQuantity('🍎');
console.table(cart.getItems());


// ===================================================================

/*
 * Операция spread (распыление)
 * - Array.prototype.concat() и аналог через spread
 */

// const numbers = [1, 2, 3].concat([4, 5, 6], [7, 8, 9]);

// const temps = [18, 14, 12, 21, 17, 29, 24];
// console.log(Math.max(...temps));
// console.log(Math.min(...temps));


/*
 * Сшиваем несколько массивов в один через concat() и spread
 */

// const lastWeekTemps = [1, 2, 3];
// const currentTemps = [4, 5, 6];
// const nextWeekTemps = [7, 8, 9];

// const allTemps = [...lastWeekTemps,
// ...currentTemps, ...nextWeekTemps];

// console.log(allTemps);

// const a = { a: 15, y: 5 };
// const b = { b: 8, y: 13 };

// const c = { ...a,b: 19, ...b, a: 7 };
// console.log(c);


/*
 * Деструктуризация объекта
 * - Значения по умолчанию
 * - Имя переменной отличное от имени свойства
 */

// const playlist = {
//   name: 'Мой супер плейлист',
//   rating: 5,
//   tracks: ['трек-1', 'трек-2', 'трек-3'],
//   trackCount: 3,
// };

// const {
//   rating,
//   tracks,
//   name,
//   trackCount: numberOfTracks = 0,
//   author = 'user',
// } = playlist;

// console.log(rating, tracks, name);


/*
 * Глубокая деструктуризация
 */

// const profile = {
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//   location: 'Ocho Rios, Jamaica',
//   avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };
// const { name, tag, location, avatar, stats:{followers, views, likes}
// } = profile;

// console.log(name, tag, location, avatar, followers, views, likes);
// =====================================================================
/*
 * Деструктуризация массивов
 */
// const rgb = [255, 100, 80];
// // const [a, b, c] = rgb;
// const [red, ,blue] = rgb;
// // console.log(a,b,c);
// console.log(red,blue);


// =================================
// const authors = {
//   kiwi: 4,
//   poly: 7,
//   ajax: 9,
//   mango: 6,
// };
// const keys = Object.keys(authors);

// for (const key of keys) {
//   console.log(key);
//   console.log(authors[key]);
// }

// const entries = Object.entries(authors);

// for (const entry of entries) {
//   // console.log(entry);

//   const [name, rating] = entry;
//   // const name = entry[0];
//   // const rating = entry[1];
//   console.log(name,rating);
// }

// for (const [name, rating] of entries) {
//   console.log(name,rating);
// }
// ================================================

/*
 * Операция rest (сбор)
 */

// const profile = {
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//   location: 'Ocho Rios, Jamaica',
//   avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const { name, tag, location,...restProps } = profile;

// console.log(name, tag, location);
// console.log(restProps);


/*
 * Паттерн «Обьект настроек»
 * - деструктуризация параметра-обьекта в подписи функции
 * - rest при деструктуризации в подписи
 */


// const showProfileInfo = function ({ name,tag,location,avatar,stats} ) { 
//   // const { name, tag, location, avatar,stats } = userProfile;
// console.log(name,tag,location);
// }

// const profile = {
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//   location: 'Ocho Rios, Jamaica',
//   avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// showProfileInfo(profile);