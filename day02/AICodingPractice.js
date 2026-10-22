
let employeeNames = [
    "Sara",
    "Noah Kim",
    "Mia Johnson",
    "Liam Garcia",
    "Sophia Chen",
    "Ethan Brown",
    "Isabella Davis",
    "Lucas Wilson",
    "Amira Hassan",
    "Stafa"
];
console.log(employeeNames);

employeeNames[0] = "Kader";
employeeNames[employeeNames.length - 1];

console.log(employeeNames);

for(let i = employeeNames.length - 1; i >= 0; i--) {
    console.log(employeeNames[i]);
}

// find the min and max numbers in array
let numbers = [100, 200, 300, 400, 5, 4, 6, 3, 2, 65, -14];

let maxNum = numbers[0];
let minNum = numbers[0];

for(let i = 1; i < numbers.length; i++) {
    if(numbers[i] > maxNum) {
        maxNum = numbers[i]
    }
    if(numbers[i] < minNum) {
        minNum = numbers[i];
    }
}

console.log("max number: ", maxNum + " min number: ",  + minNum);


// write a program that can sort the numbers array in ascemding order.

for (let i = 0; i < numbers.length - 1; i++) { //dis dongu
    for (let j = 0; j < numbers.length - 1 - i; j++) { // ic dongu kısmı önemlidir: Her tur bittiğinde en büyük sayı zaten en sağa yerleştiği için, bir sonraki turda en sağdaki o elemanla tekrar vakit kaybetmemek adına aralık her seferinde bir küçülür.
        if (numbers[j] > numbers[j + 1]) {
            let temp = numbers[j];
            numbers[j] = numbers[j + 1];
            numbers[j + 1] = temp;
        }
    } 
} 

// numbers.sort((a, b) => a - b);

console.log("Numbers in ascending order:", numbers);

//remove the duplicated numbers
/* let nums = [2, 2, 3, 4, 4, 5, 5, 6, 6, 8, 9, 9]

let uniqueNums = [...new Set(nums)];

console.log(uniqueNums); */
