for(let i = 0; i<5; i++) {
    console.log("Hello, World!");
}

console.log("--------------------  ");

for(let i = 1; i <= 10; i++) {
    console.log(i);
    if(i === 5) {
        break;
    }
}
console.log("--------------------  ");

for(let k = 1; k<= 10; k++) {
    if(k == 3 || k == 7) {
    continue;
    }
    console.log(k);
}
console.log("-----------------------------")

for(let s = 1; s <= 5; s++) {
    console.log(s)
}

console.log("-----------------------------")

let cityNames = ["MK", "London", "Manchester", "Nottingham"];
for(let each of cityNames) {
    console.log(each);
}