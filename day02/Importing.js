
// we will import a function from another file

const utility = require("./Utility.js"); // imports everthing

let result = utility.square(9);
console.log(result);

result = utility.cube(2);
console.log(result);

// we will import only specific functions

const { calculate, square } = require("./Utility.js");

let result1 = calculate(10, 5, "*");
console.log(result1);

result1 = square(9);
console.log(result1);

//.      ("./ current directory") ,  (" ../ outside the current directory. eg day01 folder")

