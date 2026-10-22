
let element = ["Java", 1, 2, 3, true, false, "python"];

console.log(element);

let students = ["Sara", "Skye", "Asia"];

for(let i = 0; i < students.length; i++) {
    console.log(students[i]);
}

console.log("------------------------");

for(let student of students) {
    console.log(student);
}

console.log("------------------------");

let employee = ["Stafa", "Kader", "Sara", "Betul"];

console.log(employee.length);
console.log(employee);
console.log(employee[0]);
employee.push("Asya");
console.log(employee); 
employee.unshift("Sare");
console.log(employee);
employee.splice([2], 1);
console.log(employee);
employee.shift();
console.log(employee);
employee.pop();
console.log(employee);

