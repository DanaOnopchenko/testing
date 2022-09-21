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


function includes(array, value) {
  // Change code below this line
  for (let i = 0; i < array.length; i += 1) { 
    if (array[i] === value) return true;
  }
  return false;
  // Change code above this line
}

console.log(includes([1, 2, 3, 4, 5], 3));
console.log(includes([1, 2, 3, 4, 5], 17));
