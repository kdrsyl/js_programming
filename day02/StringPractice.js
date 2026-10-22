let school = "cydeo"
console.log(school);

console.log(typeof school);
console.log(school.length);
console.log(school.charAt(0));
console.log(school[0]);
console.log(school[school.length - 1]);

console.log("--------------------  ");

for(let i = 0; i < school.length; i++) {
    console.log(school[i]);
} 

console.log("--------------------  ");

school = school.toUpperCase(); // Assign the result back to the variable
console.log(school);

console.log("--------------------  ");

let expectedResult = "JavaScript";
let actualResult = "JAVASCRIPT";
console.log(expectedResult === actualResult); // false
console.log(expectedResult.toLowerCase() === actualResult.toLowerCase()); // true

console.log("--------------------  ");

let str = "python python";
str = str.replace("python", "javascript"); // replaced the first matching 
str = str.replace(/python/g, "javascript"); // replaced all matching

console.log(str);

console.log("--------------------  ");

let emaiil = "cydeschool@gmail.com";
let domain = emaiil.substring(emaiil.indexOf("@") + 1, emaiil.lastIndexOf(".")); // Extract domain
console.log(domain);

let mail = "user@yahoo.com";
let mailDomain = mail.substring(mail.indexOf("@") +1, mail.lastIndexOf("."));
console.log(mailDomain);

console.log("--------------------  ");

let studentName = "Betul";
let studentAge = 10;
console.log(`My name is ${studentName}, and I am ${studentAge} years old.`); // string concatenation



