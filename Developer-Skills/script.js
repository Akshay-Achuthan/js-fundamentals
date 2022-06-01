//? Remember, we're gonna use strict mode in all scripts now!
"use strict";

//! PROBLEM 1:
//* We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

//* 1) Understanding the problem
//* - What is temp amplitude? Answer: difference between highest and lowest temp
//* - How to compute max and min temperatures?
//* - What's a sensor error? And what do do?

//* 2) Breaking up into sub-problems
//* - How to ignore errors?
//* - Find max value in temp array
//* - Find min value in temp array
//* - Subtract min from max (amplitude) and return it

/*
// const calcTempAmp = function (temps) {
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== "number") continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };

// // calcTempAmp([3, 7, 4, 23, 1]);
// const ampRes = calcTempAmp(temperatures);
// console.log(ampRes);

// Problem 2
// Function should now recieve 2 arrays f temps

// solution merge to arrays

const calcTempAmp = function (t1, t2) {
  //  const arr1 = [1, 2, 3];
  //  const arr2 = [4, 5, 6];
  //  const arr3 = arr1.concat(arr2);
  //  console.log(arr3);

  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

// calcTempAmp([3, 7, 4, 23, 1]);
const ampRes = calcTempAmp([1, 2, 3], [4, 5, 6]);
console.log(ampRes);
*/

////////////////////////////////////////////?
//!             Debugging                 //
////////////////////////////////////////////?

/*
const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",
    value: Number(prompt("Degrees Celsius:")),
  };

  console.log(measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());
*/

//////////////////////////////////////////////////*
//!          Coading   Challenge                //
//////////////////////////////////////////////////*

const printForecast = (arr) => {
  let num = 1;
  for (let i = 0; i < arr.length; i++) {
    console.log(`....${arr[i]} degree in ${num++} days....`);
  }
};

printForecast([12, 5, -5, 0, 4]);
