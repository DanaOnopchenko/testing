// function includes(array, value) {
//   // Change code below this line
//   for (let i = 0; i < array.length; i += 1) {
//     if (array[i] === value)
//       return true;
//     }
//   return false;
//   }
  
// console.log(includes([1, 2, 3, 4, 5], 3));
// console.log(includes([1, 2, 3, 4, 5], 17));
// console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter"));
// console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus"));
// console.log(includes(["apple", "plum", "pear", "orange"], "plum"));
// console.log(includes(["apple", "plum", "pear", "orange"], "kiwi"));


// function includes(array, value) {
//   // Change code below this line
//   for (let i = 0; i < array.length; i += 1) {
//     if (array[i] === value) return true;
//   }
//   return false;
//   // Change code above this line
// }

// console.log(includes([1, 2, 3, 4, 5], 3));
// console.log(includes([1, 2, 3, 4, 5], 17));



// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line
//   if (apartment.hasOwnProperty(key)) {
//     keys.push(key);
//     values.push(apartment[key]);
//   }
//   // Change code above this line
// }
// console.log(keys);
// console.log(values);


// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
//   const keys =  Object.keys(object);
//   for (const key of keys) {
//       propCount += 1;
//   }
//         // Change code above this line
//     return propCount;
//   }

// console.log(countProps({ name: "Mango", age: 2 }));
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }))


// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);

// for (const key of keys) {
//   values.push(apartment(key));
// }
// console.log(keys)



// const option = 5;
// let message = '';
// switch (option) {
//   case 1:
//     message = "Ви зможете забрати товар, завтра у 11.00"
//     break;
//   case 2:
//     message = "Кур'єр доставить ваше замовлення завтра"
//     break;
//   case 3:
//     message = "посилка буде відправлена завтра"
//     break;
//   default:
//     message = "вам передзвонять"
// }

// console.log(message)

// function plusThree(num) {
//   return num + 3;
// }

// const answer = plusThree(5);
// console.log(answer)
function timesFive(num) { 
  const answer = num * 5;
  return answer;
}



console.log(timesFive(5));
