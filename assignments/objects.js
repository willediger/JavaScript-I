// Let's get some practice writing a few objects for a new group of interns at a small business.

// ==== Challenge 1: Writing Objects ==== 
// HR needs some information on the new interns put into a database.  Given an id, email, first name, and gender. Create an object for each person in the company list:

// 1,mmelloy0@psu.edu,Mitzi,F
// 2,kdiben1@tinypic.com,Kennan,M
// 3,kmummery2@wikimedia.org,Keven,M
// 4,gmartinson3@illinois.edu,Gannie,M
// 5,adaine5@samsung.com,Antonietta,F

// Example format of an intern object: 1,examples@you.edu,Example,F
const example = {
  "id": 0,
  "email": "examples@you.edu",
  "name": "Example",
  "gender": "F"
}

//to avoid typing out the intern info in the exercise, i've copied the data above
//into a text file, which I read and parse. then i loop through each student and assign
//the key value pairs programatically

//reads list of interns from data file into array for each line
//list of interns is copied directly from the commented out info above
const fs  = require("fs");
let dataArr = fs.readFileSync('assignments/objects1InternData.txt').toString().split('\n');

//removes comment slashes at beginning of string, and creates array of data separated by comma
dataArr = dataArr.map(e => e.split('// ')[1].split(','));

//grabs array of keys to use for our intern objects
const keys = Object.keys(example);

//accepts a string array of the contents of the intern's data
//and returns an object with the appropriate key/value pairs being set
let assignValues = (objStrArr) => {
  const obj = {};
  for (let i = 0; i < keys.length; i++) {
    obj[keys[i]] = (i===0) ? Number.parseInt(objStrArr[i]) : objStrArr[i];
  }
  return obj;
}

// Write your intern objects here:

//assigns each intern as object by reading dataArr entries and assigns dynamic variable
//object using assignValues function

//dynamic variable declaration using eval(). would never do this normally, since
//creating a separate variable for each intern is an antipattern, and eval() is bad practice. // this should be done in an array normally. 
//it also precludes use of const since it's only accessible in the block
for (let i = 0; i < dataArr.length; i++) {
  eval(`var ${dataArr[i][2]} = assignValues(dataArr[${i}]);`);
}

// here's how i'd do the object assignment if i was forced type out each object assignment manually:

// const Mitzi = assignValues(dataArr[0]);
// const Kennan = assignValues(dataArr[1]);
// const Keven = assignValues(dataArr[2]);
// const Gannie = assignValues(dataArr[3]);
// const Antonietta = assignValues(dataArr[4]);


// ==== Challenge 2: Reading Object Data ==== 
// Once your objects are created, log out the following requests from HR into the console:

// Mitzi's name

// Kennan's ID

// Keven's email

// Gannie's name

// Antonietta's Gender

// ==== Challenge 3: Object Methods ==== 
// Give Kennan the ability to say "Hello, my name is Kennan!" Use the console.log provided as a hint.
// console.log(kennan.speak());

// Antonietta loves math, give her the ability to multiply two numbers together and return the product. Use the console.log provided as a hint.
//console.log(antonietta.multiplyNums(3,4));

// === Great work! === Head over to the the arrays.js file or take a look at the stretch challenge

// ==== Stretch Challenge: Nested Objects and the this keyword ==== 

// 1. Create a parent object with properties for name and age.  Make the name Susan and the age 70.
// 2. Nest a child object in the parent object with name and age as well.  The name will be George and the age will be 50.
// 3. Nest a grandchild object in the child object with properties for name and age.  The name will be Sam and the age will be 30
// 4. Give each of the objects the ability to speak their names using the this keyword.

const parent = {}

// Log the parent object's name

// Log the child's age

// Log the name and age of the grandchild

// Have the parent speak

// Have the child speak

// Have the grandchild speak
