'use strict';

//! Global scope

/*
function calcAge(birthyear) {
  const age = 2022 - birthyear;
  console.log(firtName, age);

  function printAge() {
    let output = `${firtName} you are ${age},born in ${birthyear}`;
    console.log(output);
    // console.log('printAge i am' + age);

    //? const and let are block scope
    if (birthyear >= 1981 && birthyear <= 1996) {
      var millenial = true;
      const firtName = 'steven';
      const str = `oh, and you're a millenial, ${firtName}`;
      console.log(str);

      function add(a, b) {
        return console.log(a + b);
      }

      output = 'new output';
      add(2, 3);
    }
    // console.log(str);
    console.log(millenial); //? function scope
    // add(2, 3); //? add is function scoped
    console.log(output);
  }
  printAge();

  return age;
}

const firtName = 'akshay';
calcAge(1995);
// console.log(age); //? out of scope
// printAge(); //? out of scope

*/

//! Function scope

/*
function calcAge(birthyear) {
  const now = 2022;
  const age = now - birthyear;
  return age;
}
console.log(now); //*Reference error
*/

//! Block Scope

/*
const year = 1997;
if (year >= 1981 && year <= 1996) {
  const millenial = true;
  const food = 'Avacado toast';
}
console.log(millenial); //* Reference Error
*/

//////////////////////////////////////////////////*
//!               Hoisting
//////////////////////////////////////////////////*

//? function declaration

// add(2, 4);

// function add(a, b) {
//   console.log(a + b);
// }

//? Variables (only var is hoisted, let and const are not hoisted)

// console.log(x); //! undefined
// var x = 'akash';
// var x = 'akash';

// let x = 'akash'; //! Reference Error

// const x = 'akash' //! Reference Error

//? Function expressions and arrows are hoisted if declared with var

// add(2, 4);

// var add = function (a, b) {
//   console.log(a + b);
// };

// const add = function (a, b) {
//   console.log(a + b);
// };

// let add = function (a, b) {
//   console.log(a + b);
// };

//? TDZ (Temporal Dead Zone)

// const myName = 'akshay';

// if (myName === 'akshay') {
//   console.log(`akshay is a ${job}`); //! tdz
//   const age = 2022 - 1997; //! tdz
//   console.log(age); //! tdz

//   const job = 'Developer';
//   console.log(x);
// }

//todo Example

/*
// console.log(undefined);
if (!numProducts) deleteShoppingCart();

const numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted');
}
*/

//todo (let var const)

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);

//////////////////////////////////////////////////*
//!                   This
//////////////////////////////////////////////////*

//? this refers to window object
// console.log(this);

//? this is undefined here

// const calcAge1 = function (birthyear) {
//   console.log(2022 - birthyear);
//   console.log(this);
// };
// calcAge1(1997);

//? this is a window here because it is not this keyword of this function

// const calcAgeArrow = birthYear => {
//   console.log(2022 - birthYear);
//   console.log(this);
// };

// calcAgeArrow(1997);

//? this here is (this.year) ==> (akshay.year)

// const akshay = {
//   firstName: 'akshay',
//   job: 'Developer',
//   Skills: ['html', 'css', 'js', 'vue', 'bootstrap'],
//   year: 1997,
//   calcAge: function () {
//     console.log(2022 - this.year);
//     console.log(this);
//   },
// };

// akshay.calcAge();

// const hero = {
//   year: 2017,
// };

// hero.calcAge = akshay.calcAge;
// hero.calcAge();

// const f = akshay.calcAge;
// f();

//////////////////////////////////////////////////*
//!   Regular Functions v/s Arrow Functions
//////////////////////////////////////////////////*

/*

// var firstName = 'Romy';

const akshay = {
  firstName: 'akshay',
  job: 'Developer',
  Skills: ['html', 'css', 'js', 'vue', 'bootstrap'],
  year: 1995,
  calcAge: function () {
    // console.log(this);
    console.log(2022 - this.year);

    //* solution 1

    // const self = this; //! self or that
    // const isMillenial = function () {
    //   console.log(self);
    //   // console.log(this.year >= 1981 && this.year <= 1996);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    //* solution 1
    const isMillenial = () => {
      // console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMillenial();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  }, //! Undefined
};

akshay.greet();
akshay.calcAge();
*/

//! Arguments keyword (only works with func expre and func declar i.e regular functions)

/*
const addExpr = function (a, b) {
  console.log(arguments); //* Argument keywords
  return a + b;
};

addExpr(2, 5);
addExpr(2, 5);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};

addArrow(2, 5, 8);
*/

//////////////////////////////////////////////////*
//!    Primitive v/s Objects(Reference Types)
//////////////////////////////////////////////////*

// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age);
// console.log(oldAge);

// const me = {
//   name: 'akshay',
//   age: 25,
// };

// const friend = me;
// friend.age = 30; //! Refers to same Address as me

// console.log(me, friend);

//todo Primitive values

let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

//todo Objects Values

const jessica = {
  firstName: 'jessica',
  lastName: 'Williams',
  age: 25,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log(jessica);
console.log(marriedJessica);

//todo copying objects (Solution of above)
//! (object.assign) Only works on first level

const jessica2 = {
  firstName: 'jessica',
  lastName: 'Williams',
  age: 25,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';
jessicaCopy.family.push('mary');
jessicaCopy.family.push('Rocky');
console.log(jessica2);
console.log(jessicaCopy);
