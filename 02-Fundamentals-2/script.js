//////////////////////////////////////?
//!           Strict Mode            //
//////////////////////////////////////?

/*
"use Strict";

let hasDriversLicense = false;
const passTest = true;

if (passTest) {
  hasDriversLicense = true;
}
if (hasDriversLicense) console.log("i can drive");
*/

//////////////////////////////////////?
//!           Functions             //
//////////////////////////////////////?

/*
//* Pure Function

function logger() {
  console.log(`Hi i am a logger`);
}

//* Calling / Running / invoking Function
logger();
logger();
logger();

//* Function with parameters

function fruitProcessor(apples, oranges) {
  const juice = `juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

//* Invoking a Function with Arguments

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
*/

//////////////////////////////////////////////?
//!  Function Declarations vs Expressions  //
//////////////////////////////////////////////?

/*
//* Function Declarations

const age1 = calcAge1(1997);

function calcAge1(birthYear) {
  return 2022 - birthYear;
}

//* Function Expression

const calcAge2 = function (birthYear) {
  return 2022 - birthYear;
};

const age2 = calcAge2(1995);
console.log(age1, age2);
*/

//////////////////////////////////////?
//!          Arrow Function         //
//////////////////////////////////////?

/*
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
// console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2022 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName}  retire in ${retirement} years`;
};

console.log(yearsUntilRetirement(1997, "akshay"));
console.log(yearsUntilRetirement(1975, "sindhu"));
*/

//////////////////////////////////////?
//!  Function Calling other function //
//////////////////////////////////////?

/*
function fruitCutter(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applepieces = fruitCutter(apples);
  const orangepieces = fruitCutter(oranges);

  const juice = `juice with ${applepieces} pieces of apples and ${orangepieces} pieces of oranges`;
  return juice;
}

console.log(fruitProcessor(2, 3));
*/

//////////////////////////////////////?
//!      Reviewing Functions         //
//////////////////////////////////////?

/*
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    return retirement;
  } else {
    return -1;
  }
};

console.log(yearsUntilRetirement(1991, "akshay"));
console.log(yearsUntilRetirement(1971, "mike"));
*/

//////////////////////////////////////////////*
//!          Coading Challenge              //
//////////////////////////////////////////////*
/*
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

//* test1
// const dolphins = calcAverage(44, 23, 71);
// const koalas = calcAverage(23, 34, 49);
// console.log(dolphins, koalas);

//* test2
const dolphins = calcAverage(85, 54, 41);
const koalas = calcAverage(23, 34, 27);
console.log(dolphins, koalas);

const checkWinner = function (avgDolphins, avgkoalas) {
  if (avgDolphins >= 2 * avgkoalas) {
    console.log(`Dolphins Wins (${avgDolphins} vs ${avgkoalas})`);
  } else if (avgkoalas >= 2 * avgDolphins) {
    console.log(`Koalas Wins (${avgkoalas} vs ${avgDolphins})`);
  } else {
    console.log(`no team wins`);
  }
};

checkWinner(dolphins, koalas);
*/

//////////////////////////////////////?
//!             Arrays              //
//////////////////////////////////////?

/*
const friend1 = "Akshay";
const friend2 = "jhon";
const friend3 = "peter";

//* literal syntax
const friends = ["Akshay", "Jhon", "peter"];
console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "jay";
console.log(friends);

const akshay = ["Developer", 2022 - 1997, "Violinist", friends];
console.log(akshay);

//* Exercise

const calcAge = function (birthYear) {
  return 2022 - birthYear;
};

const years = [1990, 1967, 2002, 2010, 2018];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);
*/

//////////////////////////////////////?
//!       Arrays    Methods         //
//////////////////////////////////////?

/*
//todo push pop shift unshift includes

const friends = ["Akshay", "Achuthan", "Sindhu"];

//* add elements
friends.push("Koru");
const newLeng = friends.push("Koru");
console.log(newLeng);
console.log(friends);

//* unshift elements
friends.unshift("jhon");
console.log(friends);

//* remove elements
friends.pop();
const popped = friends.pop();
console.log(popped);
console.log(friends);

//* shift elements
friends.shift();
console.log(friends);

console.log(friends.indexOf("Achuthan"));

//* includes (Es6)

console.log(friends.includes("Akshay"));

if (friends.includes("Achuthan")) {
  console.log("thats your father");
}
*/

//////////////////////////////////////////////////*
//!            Coading Challenge                //
//////////////////////////////////////////////////*

/*
let tip;
const calcTip = (billAmt) => {
  if (billAmt >= 50 && billAmt <= 300) {
    return (tip = (billAmt * 15) / 100);
  } else {
    return (tip = (billAmt * 20) / 100);
  }
};

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

console.log(tips);

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(total);
*/

//////////////////////////////////////?
//!           objects               //
//////////////////////////////////////?

/*
const akshay = {
  firstName: "Akshay",
  lastName: "Achuthan",
  age: 2022 - 1997,
  job: "Developer",
  friends: ["Akshay", "Febin", "Romy"],
};

console.log(akshay.firstName, akshay.age);
console.log(akshay["age"]);

const interestedIn = prompt(
  `what d you want to know about akshay ? choose between firstname,lastname,age and friends`
);

if (akshay[interestedIn]) {
  console.log(akshay[interestedIn]);
} else {
  console.log("nothing here");
}

akshay.location = "India";
akshay["instagram"] = "@akshay";

console.log(akshay);

console.log(
  `${akshay.firstName} has ${akshay.friends.length} friends and his best friend is called ${akshay.friends[2]}`
);
*/

//////////////////////////////////////?
//!        objects methods           //
//////////////////////////////////////?

/*
const akshay = {
  firstName: "Akshay",
  lastName: "Achuthan",
  birthYear: 1997,
  job: "Developer",
  friends: ["Akshay", "Febin", "Romy"],
  hasDriversLicense: true,
  // calcAge: function (birthYear) {
  //   return 2022 - birthYear;
  // },

  // calcAge: function () {
  //   console.log(this);
  //   return 2022 - this.birthYear;
  // },

  calcAge: function () {
    // console.log(this);
    this.age = 2022 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} years old ${
      this.job
    }, and he ${
      this.hasDriversLicense ? "has driver licence" : "dont have license"
    }`;
  },
};

console.log(akshay.calcAge());
// console.log(akshay.age);
// console.log(akshay.age);
// console.log(akshay.age);

console.log(akshay.getSummary());
*/

//////////////////////////////////////////////////*
//!            Coading Challenge                //
//////////////////////////////////////////////////*

/*
const mark = {
  firstName: "Mark Miller",
  mass: 78,
  height: 1.69,

  calcBmi: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  firstName: "john Smith",
  mass: 92,
  height: 1.95,

  calcBmi: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

mark.calcBmi();
console.log(mark.bmi);

john.calcBmi();
console.log(john.bmi);

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.firstName}'s bmi ${mark.bmi} is greater than ${john.firstName}'s bmi ${john.bmi}`
  );
} else {
  console.log(
    `${john.firstName}'s bmi ${john.bmi} is greater than ${mark.firstName}'s bmi ${mark.bmi}`
  );
}
*/

//////////////////////////////////////?
//!            loops                 //
//////////////////////////////////////?

/*
for (let rep = 1; rep <= 10; rep++) {
  console.log(`lifting weights repetition ${rep}`);
}

//* example 1

const akshayArrray = [
  'Akshay',
  'Achuthan',
  2022 - 1997,
  'teacher',
  ['Febin', 'Romy', 'Kiran'],
];

const types = [];

for (let i = 0; i < akshayArrray.length; i++) {
  console.log(akshayArrray[i], typeof akshayArrray[i]);

  // types[i] = typeof akshayArrray[i];
  types.push(typeof akshayArrray[i]);
}
console.log(types);

//* example 2

const years = [1997, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2022 - years[i]);
}

console.log(ages);

//* continue and break

for (let i = 0; i < akshayArrray.length; i++) {
  if (typeof akshayArrray[i] === 'number') break;
  console.log(akshayArrray[i], typeof akshayArrray[i]);
}

//* backword loop

const akshay = [
  'Akshay',
  'Achuthan',
  2022 - 1997,
  'teacher',
  ['Febin', 'Romy', 'Kiran'],
];

for (let i = akshay.length - 1; i >= 0; i--) {
  console.log(i, akshay[i]);
}

//* nested loops

for (let e = 1; e <= 3; e++) {
  console.log(`----------starting exrecise ${e}`);
  for (let rep = 1; rep <= 5; rep++) {
    console.log(`Exercise ${e} Repetation ${rep}`);
  }
}

//* While Loop

//* exapmle 1

let rep = 1;
while (rep <= 10) {
  console.log(` Repetation ${rep}`);
  rep++;
}

//* exapmle 2

let dice = Math.floor(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
  console.log(`you rolled a ${dice}`);
  dice = Math.floor(Math.random() * 6) + 1;
  if (dice === 6) console.log('loop ends here');
}
*/

//////////////////////////////////////////////////*
//!            Coading Challenge                //
//////////////////////////////////////////////////*

/*
function calcTip(bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}

console.log(tips);
console.log(totals);
calcTip();

//* Bonus

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

const a = calcAverage(tips);
console.log(a);
*/
