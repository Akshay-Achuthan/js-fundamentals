//////////////////////////////////?
//!     Values and Variables    !//
//////////////////////////////////?

/*
let firstName = "Akshay";

// console.log(firstName);

//* valid variable naming

let akshay_achuthan = "aa";
let $function = 27;
let function2 = 12;
let PI = 3.1415;

//* invalid variable naming

// let new = 2;
// let Myname = 5; // convention
// let 1myName = "akshay";

//* descriptive naming

let myFirstJob = "Developer";
let myCurrentJob = "Teacher";

//* non descriptive naming

let job1 = "Developer";
let job2 = "Teacher";
*/

//////////////////////////////////?
//!         Data Types          !//
//////////////////////////////////?

/*
//* number

let num = 2;
// console.log(typeof num);

//* string

let firstName = "akshay";
// console.log(typeof firstName);

//* Boolean

let javascriptIsFun = true;
// console.log(javascriptIsFun);

//* Type of

// console.log(typeof true);
// console.log(typeof 23);
// console.log(typeof javascriptIsFun);
// console.log(typeof "akshay");

//* Dynamic Typing

javascriptIsFun = "yes!";
// console.log(typeof javascriptIsFun);

//* Undefined

let year;
console.log(year);
console.log(typeof year);

year = 1997;
console.log(typeof year);

//* null

console.log(typeof null);
*/

//////////////////////////////////?
//!     let const and var      !//
//////////////////////////////////?

/*

// lastName = "jonas";
// console.log(lastName);

//*let (Only use when necessary)

let age = 30;
age = 31;
console.log(age);

//* const (Recommended)

const birthYear = 1997;
// birthYear = 1998; //todo error
// const job; //todo error

//*var (Not Recommended)

var hobby = "cycling";
hobby = "coading";
*/

//////////////////////////////////?
//!     Basic operators      !//
//////////////////////////////////?
/*
//* Arithmathic operators (+, -, *, /, **, typeof)

const currentYear = 2027;
const ageJonas = currentYear - 1991;
const ageSara = currentYear - 1997;
console.log(ageJonas, ageSara);

console.log(ageJonas * 2, ageJonas / 2, ageJonas + 2, 2 ** 3);

const firstName = "akshay";
const lastName = "achuthan";
console.log(firstName + lastName); //todo string concatenation

//* Assignment operators ( =, +=, -=, *=, /=, ++, -- )

let x = 10 + 5; //todo 15
x += 10; //todo 25
console.log(x);

let y = 10 + 5; //todo 15
y--;
console.log(y);

//* Comparison operators ( >, <, >=, <=, ===, == )

console.log(ageJonas > ageSara);
console.log(ageSara >= 18);

const isFullAge = ageSara >= 18;

console.log(currentYear - 1991 > currentYear - 2018);
*/

//////////////////////////////////?
//!   operators precedence     !//
//////////////////////////////////?

/*
const currentYear = 2027;
const ageJonas = currentYear - 1991;
const ageSara = currentYear - 1997;

const averageAge = (ageJonas + ageSara) / 2;
console.log(ageJonas, ageSara);

console.log(averageAge);

// console.log(currentYear - 1991 > currentYear - 1997);

// console.log(25 - 10 - 5); //todo left to right

let x, y;
x = y = 25 - 10 - 5; //todo (-) has higher precedence than (=)
// console.log(x, y);
*/

//////////////////////////////////*
//!   coading challenge     !//
//////////////////////////////////*

/*
//? test data 1
// const markWeight = 78;
// const markHeight = 1.69;

// const johnWeight = 92;
// const johnHeight = 1.95;

//? test data 2
const markWeight = 95;
const markHeight = 1.88;

const johnWeight = 85;
const johnHeight = 1.76;

const markResult = markWeight / markHeight ** 2;
const johnResult = johnWeight / (johnHeight * johnHeight);

console.log("mark " + markResult);
console.log("john " + johnResult);

const markHigherBMI = markResult > johnResult;
console.log(markHigherBMI);
*/

//////////////////////////////////?
//!  strings and template literals !//
//////////////////////////////////?

/*
const firstName = "Akshay";
const lastName = "Achuthan";
const birthYear = 1997;
const currentYear = 2022;

//* approach using string
const akshay =
  "I'm " +
  firstName +
  ", a " +
  (currentYear - birthYear) +
  "year old developer";

console.log(akshay);

//* approach using template literals
const akshayNew = `I'm ${firstName} a ${currentYear - birthYear} old developer`;

console.log(akshayNew);
*/

//////////////////////////////////?
//!     if__else Statement      !//
//////////////////////////////////?

/*
//* example 1

const age = 15;
const isOldEnough = age >= 18;

if (isOldEnough) {
  console.log("Eligible");
} else {
  const yearsLeft = 18 - age;
  console.log(`wait another ${yearsLeft} years`);
}

//* example 2
let century;
const birthYear = 1997;

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);
*/

//////////////////////////////////*
//!   coading challenge     !//
//////////////////////////////////*

/*
//? test data 1
const markWeight = 78;
const markHeight = 1.69;

const johnWeight = 92;
const johnHeight = 1.95;

//? test data 2
// const markWeight = 95;
// const markHeight = 1.88;

// const johnWeight = 85;
// const johnHeight = 1.76;

const markResult = markWeight / markHeight ** 2;
const johnResult = johnWeight / (johnHeight * johnHeight);

console.log("mark " + markResult);
console.log("john " + johnResult);

const markHigherBMI = markResult > johnResult;
console.log(markHigherBMI);

if (markHigherBMI === true) {
  console.log(`Mark's Bmi ${markResult} is higher than jhon's ${johnResult}`);
} else {
  console.log(`John's Bmi ${johnResult} is higher than Mark's ${markResult}`);
}
*/

//////////////////////////////////?
//! Type conversion and Coercion !//
//////////////////////////////////?

/*
//* type conversion

const inputYear = "1991";
console.log(Number(inputYear));

console.log(inputYear + 18); //todo string concatination
console.log(Number(inputYear) + 18);

console.log(Number("Akshay")); //todo Not a number error

console.log(String(23), 23);

//* type coercion

console.log("i am" + 23 + "years old"); //todo 23 is converted to string by js

console.log("23" - "10" - 3); //todo 23 and 10 is converted to number by js

console.log("23" / "2");
console.log("23" > "18");

let n = "1" + 1;
n = n - 1;
console.log(n);
*/

//////////////////////////////////?
//! Truthy and falsy values !//
//////////////////////////////////?

/*
//* 5 falsy values 0,'', undefined, null, nan

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("akshay"));
console.log(Boolean({}));
console.log(Boolean(""));

//* example 1
const money = 0;
if (money) {
  console.log("have some money");
} else {
  console.log("u are done :(");
}

//* example 2
let height;
if (height) {
  console.log("height is defined");
} else {
  console.log("height is undefined");
}

*/

//////////////////////////////////?
//!     Equality Operators      !//
//////////////////////////////////?

/*
const age = 18;
if (age === 18) console.log("Adult");

const myage = "18";
if (myage == 18) console.log("yeah");

const fav = Number(prompt("What's Your favourite number"));
console.log(typeof fav);

if (fav == 23) {
  console.log("cool 23 is an amazing number");
} else if (fav === 7) {
  console.log("7 is also a cool num");
} else {
  console.log("invalid input");
}
*/

//////////////////////////////////?
//!     logical Operators      !//
//////////////////////////////////?

/*
const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision;) {
//   console.log("sara is able to drive!");
// } else {
//   console.log("someone else should drive..");
// }

const isTired = true;
console.log(hasDriversLicense || hasGoodVision || isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("sara is able to drive!");
} else {
  console.log("someone else should drive..");
}
*/

//////////////////////////////////*
//!   coading challenge     !//
//////////////////////////////////*

/*
// const dolphinAverage = (96 + 108 + 89) / 3;
// const koalasAverage = (88 + 91 + 110) / 3;

// console.log(dolphinAverage);
// console.log(koalasAverage);

// if (dolphinAverage === koalasAverage) {
//   console.log("Draw match");
// } else if (dolphinAverage > koalasAverage) {
//   console.log("Dolphins Wins");
// } else {
//   console.log("koalas Wins");
// }

//*Bonus 1
//*Bonus 2

const dolphinAverage = (97 + 112 + 101) / 3;
const koalasAverage = (109 + 95 + 106) / 3;

// console.log(dolphinAverage);
// console.log(koalasAverage);
if (dolphinAverage > koalasAverage && dolphinAverage >= 100) {
  console.log("Dolphins Wins");
} else if (dolphinAverage < koalasAverage && koalasAverage >= 100) {
  console.log("koalas Wins");
} else if (
  dolphinAverage === koalasAverage &&
  dolphinAverage >= 100 &&
  koalasAverage >= 100
) {
  console.log("Draw match");
} else {
  console.log("no one wins");
}
*/

//////////////////////////////////?
//!     switch statement      !//
//////////////////////////////////?

/*
// const day = "sunday";

// switch (day) {
//   case "monday":
//     console.log("plan course structure");
//     console.log("Go to coading meetup");
//     break;

//   case "tuesday":
//     console.log("Theory videos");
//     break;

//   case "wednesday":
//   case "thursday":
//     console.log("write blog posts");
//     break;

//   case "friday":
//   case "saturday":
//     console.log("Record Videos");
//     break;

//   case "sunday":
//     console.log("take a break");
//     break;

//   default:
//     console.log("not a valid day");
// }

const day = "monday";

if (day === "monday") {
  console.log("plan course structure");
  console.log("got to coading meetup");
} else if (day === "tuesday") {
  console.log("theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("write blog posts");
} else if (day === "friday" || day === "saturday") {
  console.log("record videos");
} else if (day === "sunday") {
  console.log("take rest");
} else {
  console.log("not a valid day");
}
*/

//////////////////////////////////?
//!  statements and Expressions !//
//////////////////////////////////?
/*
//* Expressions (returns or produce a value)
3 + 4;
1991;
true && false && !false;

//* Statements (does not produce a value)

if (23 > 10) {
  const str = "23 is bigger";
}
*/

//////////////////////////////////////?
//! Ternary(conditional operator) !//
//////////////////////////////////////?

/*
const age = 22;
// age >= 18 ? console.log("can drink wine") : console.log("i like water");

const drink = age >= 18 ? "wine" : "water";
// console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "wine";
} else {
  drink2 = "water";
}
console.log(drink2);

console.log(`i like to drink ${age >= 18 ? "wine" : "water"}`);
*/

//////////////////////////////////*
//!   coading challenge     !//
//////////////////////////////////*

const bill = 430;

const tip = bill <= 300 && bill >= 50 ? (bill * 15) / 100 : (bill * 20) / 100;

console.log(
  `The bill was ${bill}, the tip was ${tip},and the total value is ${
    bill + tip
  }`
);
