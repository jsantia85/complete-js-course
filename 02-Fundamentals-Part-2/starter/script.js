'use strict';

// Activating Strict Mode
// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 534;

// Functions
// function logger() {
//   console.log('My name is Jonas');
// }

// // calling / running / invoking function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// const num = Number('23');

// console.log(typeof(num))

// Function Declarations vs. Expressions

// // Function declaration
// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }
// const age1 = calcAge1(1991);

// // Function expression
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// }
// const age2 = calcAge2(1991);

// console.log(age1, age2);

// Arrow functions

// const calcAge3 = birthYeah => 2037 - birthYeah;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYeah, firstName) => {
//   const age = 2037 - birthYeah;
//   const retirement = 65 - age;
//   // return retirement;
//   return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1991, 'Jonas')); console.log(yearsUntilRetirement(1980, 'Bob'));

// Functions Calling Other Functions
// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
//   return juice;
// }
// console.log(fruitProcessor(2, 3));

// Reviewing Functions
// const calcAge = function (birthYeah) {
//   return 2037 - birthYeah;
// }

// const yearsUntilRetirement = function (birthYeah, firstName) {
//   const age = calcAge(birthYeah);
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years`);
//     return retirement;
//   } else {
//     console.log(`${firstName} has already retired 🎉`);
//     return -1;
//   }
// }

// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1950, 'Mike'));

//Coding Challenge #1

//1.
// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 2

// const dolphinsAverage = calcAverage(85, 54, 41)
// const koalasAverage = calcAverage(23, 34, 27)

// console.log(dolphinsAverage)
// console.log(koalasAverage)

// const checkWinner = (dolphinsAv, koalasAv) => {
//   if (dolphinsAv >= (koalasAv * 2)) {
//     return `Dolphins win ${dolphinsAv} vs ${koalasAv}`
//   } else if (koalasAv >= (dolphinsAv * 2)){
//     return `Koalas win ${koalasAv} vs ${dolphinsAv}`
//   } else {
//     return `No team has won...`
//   }
// }

// console.log(checkWinner(111, 21))
// console.log(checkWinner(dolphinsAverage, koalasAverage))

// Introduction to Arrays
// const friend1 = 'Michael';
// const friend2 = 'Steven';
// const friend3 = 'Peter';

// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// const y = new Array(1991, 1984, 2008, 2020);
// console.log(y)
// console.log(y.length)

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = 'Jay';
// console.log(friends);
// // friends = ['Bob', 'Alice']

// const firstName = 'Jonas';
// const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
// console.log(jonas);
// console.log(jonas.length);

// // Exercise
// const calcAge = function (birthYeah) {
//   return 2037 - birthYeah;
// }
// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
// console.log(ages);

// Basic Array Operations (Methods)
// const friends = ['Michael', 'Steven', 'Peter'];

// Add elements
// const newLength = friends.push('Jay'); //add to end
// console.log(friends);
// console.log(newLength);

// friends.unshift('John'); //add to beggining
// console.log(friends);

// Remove elements
// friends.pop(); // remove from end
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift(); // remove from beginning
// console.log(friends);

// console.log(friends.indexOf('Steven'));// tells us the index of an element
// console.log(friends.indexOf('Bob'));

// friends.push(23);
// console.log(friends.includes('Steven'));
// console.log(friends.includes('Bob'));
// console.log(friends.includes(23));
// console.log(friends)

// if (friends.includes('Steven')) {
//   console.log('You have a friend called Steven');
// }

// function algoritm1 (numbers) {
//   let arr = [];
//   console.log(arr)
//   if (numbers > 3) {
//     const newArr = arr.push("condition has been met")
//     return newArr
//   } else {
//     const newArr = arr.push('condition has not been met')
//     return newArr
//   }
// }

// console.log(algoritm1(4,5,2))

// Coding Challenge #2

// // bill = somevalue
// const bill = 275

// const tip = (bill >= 50 && bill <= 300 ? (bill * .15) : (bill *.2))

// //ternerary (if bill >= 50 && <= 300) tip is 15 else tip is 20%

// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value was ${tip + bill}`)

// const calcTip = function(bill) {
//   return (bill >= 50 && bill <= 300 ? (bill * .15) : (bill *.2))
  
// }

// const bills = [125, 55, 44]
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
// console.log(tips)

// const totalCost = [(bills[0] + tips[0]), (bills[1] + tips[1]), (bills[2] + tips[2])]
// console.log(totalCost)

// Introduction to Objects
// const jonasArray = [
//   'Jonas',
//   'Schmedtmann',
//   2037 - 1991,
//   'teacher',
//   ['Michael', 'Peter', 'Steven']
// ];

// const jonas = {
//   firstName: 'Jonas',
//   lastName: 'Schmedtmann',
//   age: 2037 - 1991,
//   job: 'teacher',
//   friends: ['Michael', 'Peter', 'Steven']
// };

// Dot vs. Bracket Notation
// const jonas = {
//   firstName: 'Jonas',
//   lastName: 'Schmedtmann',
//   age: 2037 - 1991,
//   job: 'teacher',
//   friends: ['Michael', 'Peter', 'Steven']
// };
// console.log(jonas);

// console.log(jonas.lastName);
// console.log(jonas['lastName']);

// const nameKey = 'Name';
// console.log(jonas['first' + nameKey]);
// console.log(jonas['last' + nameKey]);

// // console.log(jonas.'last' + nameKey)

// const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');

// if (jonas[interestedIn]) {
//   console.log(jonas[interestedIn]);
// } else {
//   console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
// }

// jonas.location = 'Portugal';
// jonas['twitter'] = '@jonasschmedtman';
// console.log(jonas);

// // Challenge
// // "Jonas has 3 friends, and his best friend is called Michael"
// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);

// Object Methods

// const jonas = {
//   firstName: 'Jonas',
//   lastName: 'Schmedtmann',
//   birthYeah: 1991,
//   job: 'teacher',
//   friends: ['Michael', 'Peter', 'Steven'],
//   hasDriversLicense: true,

//   // calcAge: function (birthYeah) {
//   //   return 2037 - birthYeah;
//   // }

//   // calcAge: function () {
//   //   // console.log(this);
//   //   return 2037 - this.birthYeah;
//   // }

//   calcAge: function () {
//     console.log(this)
//     this.age = 2037 - this.birthYeah;
//     return this.age;
//   },

//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
//   }
// };

// console.log(jonas.calcAge());

// console.log(jonas.age);
// // console.log(jonas.age);
// // console.log(jonas.age);

// // Challenge
// // "Jonas is a 46-year old teacher, and he has a driver's license"
// console.log(jonas.getSummary());

// Coding Challenge #3

// BMI = mass / (height * height)

// const mark = {
//   fullName: 'Mark Miller',
//   mass: 78,
//   height: 1.69,
//   BMI: function () {
//     return (this.mass / (this.height ** 2))
//   }
// }

// const john = {
//   fullName: 'John Smith',
//   mass: 92,
//   height: 1.95,
//   BMI1: function () {
//     this.bmi2 = (this.mass / (this.height ** 2))
//     return this.bmi2
//   }
// }

// mark.BMI()
// john.BMI1()

// if (john.bmi2 < mark.BMI()) {
//   console.log(`John's BMI ${john.bmi2} is lower than Mark's ${mark.BMI()}`)
// } else {
//   console.log(`Mark has a higher BMI`)
// }

// Iteration: The for Loop

// console.log('Lifting weights repetition 1 🏋️‍♀️');
// console.log('Lifting weights repetition 2 🏋️‍♀️');
// console.log('Lifting weights repetition 3 🏋️‍♀️');
// console.log('Lifting weights repetition 4 🏋️‍♀️');
// console.log('Lifting weights repetition 5 🏋️‍♀️');
// console.log('Lifting weights repetition 6 🏋️‍♀️');
// console.log('Lifting weights repetition 7 🏋️‍♀️');
// console.log('Lifting weights repetition 8 🏋️‍♀️');
// console.log('Lifting weights repetition 9 🏋️‍♀️');
// console.log('Lifting weights repetition 10 🏋️‍♀️');

// for loop keeps running while condition is TRUE
// for (let rep = 30; rep >= 1; rep--) {
//   console.log(`Lifting weights repetition -${rep} 🏋️‍♀️`);
// }

// // Looping Arrays, Breaking and Continuing
// const jonas = [
//   'Jonas',
//   'Schmedtmann',
//   2037 - 1991,
//   'teacher',
//   ['Michael', 'Peter', 'Steven'],
//   true
// ];

// // console.log(jonas[0])
// // console.log(jonas[1])
// // ...
// // console.log(jonas[4])
// // jonas[5] does NOT exist
// const types = [];

// for (let i = 0; i < jonas.length; i++) {
//   // Reading from jonas array
//   console.log(jonas[i], typeof jonas[i]);

//   // Filling types array
//   // types[i] = typeof jonas[i];
//   types.push(typeof jonas[i]);
// }

// // Algorithm problem
// function algoritm1 (numbers) {
//   for (let i = 0; i < numbers.length; i++){
//     let arr = [];
//     if (numbers[i] > 3) {
//       console.log(`condition has been met`)
//     } else {
//       console.log(`condition has not been met`)
//     }
//   }
//   // console.log(arr)
//   // if (numbers > 3) {
//   //   const newArr = arr.push("condition has been met")
//   //   return newArr
//   // } else {
//   //   const newArr = arr.push('condition has not been met')
//   //   return newArr
//   // }
// }

// console.log(algoritm1([4,5,2]))

// //

// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2037 - years[i]);
// }
// console.log(ages);

// // continue and break
// console.log('--- ONLY STRINGS ---')
// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] !== 'string') continue;

//   console.log(jonas[i], typeof jonas[i]);
// }

// console.log('--- BREAK WITH NUMBER ---')
// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] === 'number') break;

//   console.log(jonas[i], typeof jonas[i]);
// }

// Looping Backwards and Loops in Loops
// const jonas = [
//   'Jonas',
//   'Schmedtmann',
//   2037 - 1991,
//   'teacher',
//   ['Michael', 'Peter', 'Steven'],
//   true
// ];

// // 0, 1, ..., 4
// // 4, 3, ..., 0

// for (let i = jonas.length - 1; i >= 0; i--) {
//   console.log('The Index', i, 'The value of the element', jonas[i]);
// }

// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`-------- Starting exercise ${exercise}`);

//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`);
//   }
// }

// The while Loop
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
// }

// console.log(`----The while loop----`)
// let rep = 1;
// while (rep <= 10) {
//   console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♀️`);
//   rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice !== 6) {
//   console.log(`You rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice === 6) console.log('Loop is about to end...');
// }

// console.log(`---ALGORITHM---`)

// // Algorithm problem

// function algoritm1 (numbers) {
//   let i = 0;
  
//   while (i < numbers.length ) {
//     let arr = [];
//     if (numbers[i] >= 3) {
//       console.log(`the condition has been met`)
//       arr.push(numbers[i])
//       console.log(arr)
//     } else if (numbers[i] < 3){
//       console.log(`the condition has not been met`)
//     } else {
//       null
//     }
//     i++
//   };
  
// }

// console.log(algoritm1([1, 5, 2, 3, 4]))


// console.log(arr)
// Coding Challenge #4

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
// const tips = []
// const totals = []

// const calcTip = function(bill) {
//   return (bill >= 50 && bill <= 300 ? (bill * .15) : (bill *.2))
  
// }

// for (let i = 0; i < bills.length; i++) {
//   const tip = calcTip(bills[i])
//   tips.push(tip)
//   totals.push(tip + bills[i])
// }

// console.log(tips)

// console.log(totals)