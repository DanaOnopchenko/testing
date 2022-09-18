// function getExtremeElements(array) {
//   // Change code below this line
//     array = [array[0], array[array.length - 1]];
//     return array;
//   // Change code above this line
// }
// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// console.log(getExtremeElements(["Earth", "Mars", "Venus"]));
// console.log(getExtremeElements(["apple", "peach", "pear", "banana"]));

// function splitMessage(message, delimiter) {
//   let words;
//   // Change code below this line
//     words = message.split(delimiter);
    
//   // Change code above this line
//   return words;
// }
// console.log(splitMessage("Mango hurries to the train", " "));
// console.log(splitMessage("Mango", ""));
// console.log(splitMessage("best_for_week", "_"));

// function calculateEngravingPrice(message, pricePerWord) {
//    // Change code below this line
//     let total = (message.split(' ').length) * pricePerWord;
//     return total;
     
   
//    // Change code above this line
// }
// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
// console.log(calculateEngravingPrice("JavaScript is in my blood", 20));
// console.log(calculateEngravingPrice("Web-development is creative work", 20))
// function makeStringFromArray(array, delimiter) {
//   let string;
//   // Change code below this line

//     string = array.join(delimiter);

//   // Change code above this line
//   return string;
// }
// console.log(makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " "));
// console.log(makeStringFromArray(["M", "a", "n", "g", "o"], ""));
// console.log(makeStringFromArray(["top", "picks", "for", "you"], "_"))
// .toLocaleLowerCase()

// function slugify(title) {
//   // Change code below this line
//    const words = title.toLocaleLowerCase().split(' ').join("-");
 
// return words
//   // Change code above this line
// }
// console.log(slugify("Arrays for begginers"));
// console.log(slugify("English for developer"));
// console.log(slugify("Ten secrets of JavaScript"));
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));
// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0,2) ;
// const nonExtremeEls = fruits.slice(1,4);
// const lastThreeEls = fruits.slice(-3);
// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);

// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients); // Change this line
// console.log(allClients)

function makeArray(firstArray, secondArray, maxLength) {
    // Change code below this line
    const array = firstArray.concat(secondArray).slice(0,maxLength);
    
return array
    // Change code above this line
}
console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3));
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2));
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4))
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0))