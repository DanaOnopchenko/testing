// const showThis = () => {
//   console.log("this in showThis: ", this);
// };

// showThis(); // this in showThis: window

// const user = {
//   username: "Mango",
// };
// user.showContext = showThis;
// user.showContext();

// const user = {
//     tag: 'Mango',
//     showTag() {
//         console.log('showTag -> this', this);
//         console.log('showTag -> this.tag', this.tag);
//     },
// };

// user.showTag();

// const outerShowTag = user.showTag();

// outerShowTag();

// const user = {
//     tag: 'Mango',
//     showTag() {
//         console.log('showTag -> this', this);
//         console.log('showTag -> this.tag', this.tag);
//     },
// };

// const invokeAction = function (action) {
//     console.log(action);

//     action();
// };

// invokeAction(user.showTag);
// ========================================

// const fn = function () {
//     console.log('fn -> this', this);
// };

// fn(); // Какой this ???

// ==========================================
// const book = {
//     title: 'React for beginners',
//     showThis() {
//         console.log('showThis -> this', this);
//     },
//     showTitle() {
//         console.log('showTitle -> this.title', this.title);
//     },
// };

// book.showThis(); // Какой this ???

// // const outerShowThis = book.showThis;
// // outerShowThis(); // Какой this ???

// const outerShowTitle = book.showTitle;
// outerShowTitle(); // Какой this ???

// ============================================
// const makeChangeColor = function () {
//   const changeColor = function (color) {
//     console.log('changeColor -> this', this);
//     this.color = color;
//   };


//   // changeColor(); // Какой this ???
  

//     const sweater = {
//         color: 'teal',
//     };

//     sweater.updateColor = changeColor;

//     sweater.updateColor('red'); // Какой this ???

//     return sweater.updateColor;
// };


// // makeChangeColor();
// const swapColor = makeChangeColor();

// swapColor('blue'); // Какой this ???

// =================================


// const makeChangeColor = function () {
//     const changeColor = function (color) {
//         console.log('changeColor -> this', this);
//     };

//     return changeColor;
// };

// const updateColor = makeChangeColor();

// updateColor('yellow'); // Какой this ???

// const hat = {
//     color: 'blue',
//     updateColor: updateColor,
// };

// hat.updateColor('orange'); // Какой this ???
// ==========================================

const counter = {
    value: 0,
    increment(value) {
        console.log('increment -> this', this);
        this.value += value;
    },
    decrement(value) {
        console.log('decrement -> this', this);
        this.value -= value;
    },
};

const updateCounter = function (value, operation) {
    operation(value);
};

updateCounter(10, counter.increment.bind(counter));
updateCounter(5, counter.decrement);

/*
 * call и apply
 */
// const showThis = function (a, b, arr) {
//     console.log(a, b, arr);
//     console.log('showThis -> this', this);
// };
// // console.dir(showThis);
// showThis();

// const objA = {
//     a: 5,
//     b: 10,
// };
// showThis.call(objA,10,20,30,)
// =====================================

//   const changeColor= function(color) { 
//         console.log('changecolor-> this', this);
//         this.color = color;
// };

// const hat = { 
//     color: 'black',
   
// }

// changeColor.call(hat, 'pink');
// console.log(hat);


// const sweater = {
//     color: 'green',
  
// }
// // changeColor.call(sweater, 'blue');
// // console.log(sweater);
// const changeHatColor = changeColor.bind(hat);
// const changeSweaterColor = changeColor.bind(sweater)

// changeHatColor('pink');
// console.log(hat);
// changeSweaterColor('yellow');
// console.log(sweater);