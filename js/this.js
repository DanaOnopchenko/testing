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


const makeChangeColor = function () {
    const changeColor = function (color) {
        console.log('changeColor -> this', this);
    };

    return changeColor;
};

const updateColor = makeChangeColor();

updateColor('yellow'); // Какой this ???

const hat = {
    color: 'blue',
    updateColor: updateColor,
};

hat.updateColor('orange'); // Какой this ???
